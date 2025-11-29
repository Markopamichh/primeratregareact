import { getFirestore, collection, getDocs, doc, getDoc, query, where, runTransaction } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

const cleanObject = (obj) => {
    const cleaned = {};
    for (const key in obj) {
        if (obj[key] !== undefined && obj[key] !== null) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && !(obj[key] instanceof Date)) {
                cleaned[key] = cleanObject(obj[key]);
            } else if (Array.isArray(obj[key])) {
                cleaned[key] = obj[key].map(item =>
                    typeof item === 'object' ? cleanObject(item) : item
                );
            } else {
                cleaned[key] = obj[key];
            }
        }
    }
    return cleaned;
};

export const getProducts = async () => {
    const document = await getDocs(collection(db, "products"));
    const products = [];
    document.forEach((doc) => {
        const data = doc.data();
        const productData = {
            ...data,
            id: doc.id,
            name: data.name || data.title || 'Producto sin nombre',
            image: data.image || data.imagen || ''
        };
        products.push(productData);
    });
    return products;
};

export const getProductsByCategory = async (categoryId) => {
    const q = query(collection(db, "products"), where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const productData = {
            ...data,
            id: doc.id,
            name: data.name || data.title || 'Producto sin nombre',
            image: data.image || data.imagen || ''
        };
        products.push(productData);
    });
    return products;
};

export const getProductById = async (productId) => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            ...data,
            id: docSnap.id,
            name: data.name || data.title || 'Producto sin nombre',
            image: data.image || data.imagen || ''
        };
    } else {
        return null;
    }
};

export const createOrder = async (orderData) => {
    try {
        const orderRef = await runTransaction(db, async (transaction) => {
            const productRefs = orderData.items.map(item => doc(db, "products", item.id));
            const productDocs = await Promise.all(
                productRefs.map(ref => transaction.get(ref))
            );

            for (let i = 0; i < productDocs.length; i++) {
                const productDoc = productDocs[i];
                const orderItem = orderData.items[i];

                if (!productDoc.exists()) {
                    const productName = orderItem.name || orderItem.title || 'Producto';
                    throw new Error(`Producto ${productName} no encontrado`);
                }

                const currentStock = productDoc.data().stock;
                if (currentStock < orderItem.quantity) {
                    const productName = orderItem.name || orderItem.title || 'Producto';
                    throw new Error(
                        `Stock insuficiente para ${productName}. ` +
                        `Disponible: ${currentStock}, Solicitado: ${orderItem.quantity}`
                    );
                }
            }

            productDocs.forEach((productDoc, index) => {
                const orderItem = orderData.items[index];
                const currentStock = productDoc.data().stock;
                const newStock = currentStock - orderItem.quantity;

                transaction.update(productRefs[index], { stock: newStock });
            });

            const newOrderRef = doc(collection(db, "orders"));
            const rawOrderData = {
                buyer: {
                    name: orderData.buyer?.name || '',
                    phone: orderData.buyer?.phone || '',
                    email: orderData.buyer?.email || ''
                },
                items: orderData.items.map(item => ({
                    id: String(item.id || ''),
                    name: String(item.name || 'Producto'),
                    price: Number(item.price) || 0,
                    quantity: Number(item.quantity) || 1
                })),
                total: Number(orderData.total) || 0,
                createdAt: new Date(),
                status: "confirmed"
            };

            const cleanOrderData = cleanObject(rawOrderData);

            transaction.set(newOrderRef, cleanOrderData);

            return newOrderRef;
        });

        return { success: true, orderId: orderRef.id };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

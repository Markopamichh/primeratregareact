import { getFirestore, collection, getDocs } from "firebase/firestore";
import App from "../firebase";


const db = getFirestore(App);

export const getProducts = async () => {
    const document = await getDocs(collection(db, "products"));
    const products = []
    document .forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });
    return products;
}
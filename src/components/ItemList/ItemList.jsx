import Item from "../Item/Item";
import './ItemList.css';

function ItemList({ products }) {
  return (
    <div className="item-list-grid">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default ItemList;

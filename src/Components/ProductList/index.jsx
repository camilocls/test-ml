import "./styles.scss";
import ProductItem from "./ProductItem";

function ProductList({ items }) {
  return (
    <div className="product-list">
      {items.map((item) => (
        <div key={item.id} className="product-list__item">
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

import "./styles.scss";
import ProductItem from "./ProductItem";

function ProductList({ items }) {
  return (
    <div className="product-list">
      {items.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;

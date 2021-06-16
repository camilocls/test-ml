import "./styles.scss";
import ProductItem from "./ProductItem";

function ProductList({ items }) {
  return (
    <div className="product-list">
      {items.map((item) => (
        <div className="product-list__item">
          <ProductItem key={item.id} product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

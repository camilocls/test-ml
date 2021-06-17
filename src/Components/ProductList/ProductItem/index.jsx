import { Link } from "react-router-dom";
import "./styles.scss";
import iconFreeShipping from "../../../assets/icon-shipping@2x.png";

const FreeShippingTag = ({ isFree }) => {
  return (
    isFree && (
      <span className="product-item__free-shipping">
        <img
          className="product-item__free-shipping__img"
          src={iconFreeShipping}
          alt="Free Shipping"
        />
      </span>
    )
  );
};

function ProductItem({ product }) {
  const { id, title, picture, free_shipping, price, location } = product;
  const priceFormat = new Intl.NumberFormat({
    style: "currency",
    currency: price.currency,
  }).format(price.amount);

  return (
    <div className="product-item" id={id}>
      <div className="product-item__image">
        <img className="product-item__image__src" src={picture} alt={title} />
      </div>
      <div className="product-item__content">
        <div className="product-item__details">
          <div className="product-item__price">
            <span className="product-item__price__symbol">{price.symbol}</span>
            <span className="product-item__price__amount">{priceFormat}</span>
            <FreeShippingTag isFree={free_shipping} />
          </div>
          <div className="product-item__location">{location}</div>
        </div>
        <Link className="product-item__title" to={`/items/${id}`}>{title}</Link>
      </div>
    </div>
  );
}

export default ProductItem;

import { Link } from "react-router-dom";
import "./styles.scss";
import { getPriceFormat } from "../../../utils/getPriceFormat";
import FreeShippingTag from "../../FreeShippingTag";

function ProductItem({ product }) {
  const { id, title, picture, free_shipping, price, location } = product;
  const priceFormat = getPriceFormat(price.currency, price.amount);

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
        <Link className="product-item__title" to={`/items/${id}`}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;

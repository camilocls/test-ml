import "./styles.scss";
import iconFreeShipping from "../../../assets/icon-shipping@2x.png";

function ProductItem({ product }) {
  const { id, title, picture, free_shipping, price, location } = product;
  const priceFormat = new Intl.NumberFormat({
    style: "currency",
    currency: price.currencyn,
  }).format(price.amount);

  return (
    <div className="product-item" id={id}>
      <div className="product-item__image">
        <img className="product-item__image__src" src={picture} alt={title} />
      </div>
      <div className="product-item__details">
        <div className="product-item__price">
          <span className="product-item__price__symbol">{price.symbol}</span>
          <span className="product-item__price__amount">{priceFormat}</span>
          {free_shipping && (
            <span className="product-item__free-shipping">
              <img className="product-item__free-shipping__img" src={iconFreeShipping} alt="Free Shipping" />
            </span>
          )}
        </div>
        <h3 className="product-item__title">{title}</h3>
      </div>
      <div className="product-item__location">{location}</div>
    </div>
  );
}

export default ProductItem;

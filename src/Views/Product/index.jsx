import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useDataItem } from "../../Hooks/useDataItem";
import { usePageTitle } from "../../Hooks/usePageTitle";
import BreadcrumbLayout from "../../Layouts/Breadcrumb";
import { getPriceFormat } from "../../utils/getPriceFormat";
import FreeShippingTag from "../../Components/FreeShippingTag";
import Button from "../../Components/Button";
import { PRODUCT_CONDITIONS } from "../../constants";
import "./styles.scss";

function Product() {
  const { id: productId } = useParams();
  const {
    isError,
    isFetching,
    title,
    price,
    picture,
    description,
    breadcrumb,
    freeShipping,
    condition,
    soldQuantity,
  } = useDataItem(productId);
  usePageTitle(title || "Loading");

  const priceFormat = getPriceFormat(price.currency, price.amount);
  const conditionFormat = `${
    PRODUCT_CONDITIONS[condition]
  } - ${soldQuantity} vendido${soldQuantity > 1 ? "s" : ""}`;

  function handleBuy() {
    console.log("Buy now! 🤑");
  }

  if (isError) {
    return <Error />;
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <BreadcrumbLayout breadcrumb={breadcrumb}>
      <div className="product">
        <div className="product__image">
          <img className="product__image__src" src={picture} alt={title} />
        </div>
        <div className="product__content">
          <div className="product__condition">{conditionFormat}</div>
          <h3 className="product__title">{title}</h3>
          <div className="product__price">
            <span className="product__price__symbol">{price.symbol}</span>
            <span className="product__price__amount">{priceFormat}</span>
            <FreeShippingTag
              isFree={freeShipping}
              className="product__free-shipping-tag"
            />
          </div>
          <Button onClick={handleBuy} text="Comprar" />
        </div>
        <div className="product__details">
          <h3 className="product__description__label">
            Descripción del producto
          </h3>
          <p className="product__description">{description}</p>
        </div>
      </div>
    </BreadcrumbLayout>
  );
}

export default Product;

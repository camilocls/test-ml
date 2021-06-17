import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useDataItem } from "../../Hooks/useDataItem";

function Product() {
  const { id: productId } = useParams();
  const { isError, isFetching, title, price, picture, description } =
    useDataItem(productId);

  if (isError) {
    return <Error />;
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="product">
      <h1>{title}</h1>
      <img src={picture} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Product;

import { useState, useEffect } from "react";
import { getItem } from "../services/getItem";

export function useDataItem(productId) {
  const [product, setProduct] = useState({});
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setIsError(false);
    setProduct({})

    getItem(productId).then((data) => {
      if (data.error) {
        setIsError(true);
      }

      if (data && data.item) {
        setProduct(data.item);
      }

      setIsFetching(false)
    });
  }, [productId]);

  if (isError) {
    return {
      error: true,
    };
  }

  return {
    isFetching,
    id: productId,
    title: product.title,
    price: product.price || {},
    picture: product.picture,
    description: product.description
  };
}

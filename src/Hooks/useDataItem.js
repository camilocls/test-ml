import { useState, useEffect } from "react";
import { getItem } from "../services/getItem";

export function useDataItem(productId) {
  const [product, setProduct] = useState({});
  const [isError, setIsError] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setIsError(false);
    setProduct({});
    setBreadcrumb("");

    getItem(productId).then((data) => {
      if (data.error) {
        setIsError(true);
      }

      if (data && data.item) {
        setProduct(data.item);
        setBreadcrumb(data.breadcrumb);
      }

      setIsFetching(false);
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
    breadcrumb,
    title: product.title,
    price: product.price || {},
    picture: product.picture,
    description: product.description,
    freeShipping: product.free_shipping,
    condition: product.condition,
    soldQuantity: product.sold_quantity
  };
}

import { useState, useEffect } from "react";
import { getItemsBySearch } from "../services/getItemsBySearch";

export function useDataSearch(query) {
  const [results, setResults] = useState({});
  const [breadcrumb, setBreadcrumb] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setIsError(false);
    setResults([])

    getItemsBySearch(query).then((data) => {
      if (data.error) {
        setIsError(true);
      }

      if (data && data.items && data.items.length) {
        setResults(data.items);
        setBreadcrumb(data.breadcrumb)
      }

      setIsFetching(false)
    });
  }, [query]);


  if (isError) {

    return {
      error: true,
    };
  }

  return {
    isFetching,
    breadcrumb,
    items: results
  };
}

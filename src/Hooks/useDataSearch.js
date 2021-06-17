import { useState, useEffect } from "react";
import { getItemsBySearch } from "../services/getItemsBySearch";

export function useDataSearch(query) {
  const [results, setResults] = useState({});
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
    breadcrumb: results.breadcrumb,
    items: results
  };
}

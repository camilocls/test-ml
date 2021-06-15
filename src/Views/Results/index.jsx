import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getItemsBySearch } from "../../services/getItemsBySearch";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import EmptyState from "../../Components/EmptyState";
import ProductList from "../../Components/ProductList";
import BreadcrumbLayout from "../../Layouts/Breadcrumb";

function Results(props) {
  let { search } = useLocation();
  const [breadcrumb, setBreadcrumb] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const values = queryString.parse(search);
  const { q } = values;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setResults([]);

    getItemsBySearch(q).then((data) => {
      if (data.error) {
        setIsError(true);
      }

      if (data && data.items && data.items.length) {
        setBreadcrumb(data.breadcrumb);
        setResults(data.items);
      }

      setIsLoading(false);
    });
  }, [q]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!results.length) {
    return <EmptyState query={q} />;
  }

  return (
    <BreadcrumbLayout breadcrumb={breadcrumb}>
      <div className="results">
        <ProductList items={results} />
      </div>
    </BreadcrumbLayout>
  );
}

export default Results;

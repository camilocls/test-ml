import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDataSearch } from "../../Hooks/useDataSearch";
import { usePageTitle } from "../../Hooks/usePageTitle";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import EmptyState from "../../Components/EmptyState";
import ProductList from "../../Components/ProductList";
import BreadcrumbLayout from "../../Layouts/Breadcrumb";

function Results() {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const { q: query } = values;
  const { isError, isFetching, breadcrumb, items } = useDataSearch(query);
  usePageTitle(query || "")

  if (isError) {
    return <Error />;
  }

  if (isFetching) {
    return <Loader />;
  }

  if (items && !items.length) {
    return <EmptyState query={query} />;
  }

  return (
    <BreadcrumbLayout breadcrumb={breadcrumb}>
      <div className="results">
        <ProductList items={items} />
      </div>
    </BreadcrumbLayout>
  );
}

export default Results;

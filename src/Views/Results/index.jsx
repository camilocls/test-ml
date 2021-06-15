import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getItemsBySearch } from "../../services/getItemsBySearch";
import Error from "../../Components/Error"
import Loader from "../../Components/Loader"

function Results(props) {
  let { search } = useLocation();
  const [breadcrumb, setBreadcrumb] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const values = queryString.parse(search);
  const { q } = values;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getItemsBySearch(q).then((data) => {
      if (data.error) {
        setIsError(true);
      } else {
        setIsLoading(false);
        setBreadcrumb(data.breadcrumb);
      }
    });
  }, [q]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="results">
      {breadcrumb}
      Results
    </div>
  );
}

export default Results;

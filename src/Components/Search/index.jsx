import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import iconSearch from "../../assets/icon-search@2x.png";

const PLACEHOLDER_TEXT = "Nunca desdes de buscar";

function Search() {
  let history = useHistory();
  const [query, setQuery] = useState("");

  function handleFieldQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query) {
      history.push(`/items?q=${query}`);
    } else {
      console.log("Is empty!");
    }
  }

  return (
    <div className="search">
      <form
        onSubmit={handleSubmit}
        className="search__form"
        action="/items"
        method="GET"
      >
        <input
          className="search__field"
          placeholder={PLACEHOLDER_TEXT}
          name="q"
          type="text"
          onChange={handleFieldQuery}
        />
        <button className="search__button">
          <img className="search__icon" src={iconSearch} alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default Search;

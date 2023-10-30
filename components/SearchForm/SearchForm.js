"use client";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";
import styles from "./SearchForm.module.css";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const [status, setStatus] = useState("idle");

  async function handleSearch(event) {
    event.preventDefault();
    setStatus("loading");
    const response = await fetch(
      `https://tofu-seven.vercel.app/api/get-products?searchTerm=${searchTerm}`
    );

    if (response.ok) {
      const json = await response.json();
      if (json.status === 200) {
        setSearchResults(json.data);
        setStatus(json.data.length > 0 ? "success" : "empty");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("error");
    }
    setSearchTerm("");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <TextInput
          required={true}
          aria-label="Search through database"
          label="Search for:"
          placeholder="firm polsoja"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Find</button>
      </form>
      <div className={styles.responseContainer}>
        {status === "idle" && <p>Welcome to the search!</p>}
        {status === "loading" && <p>Searching...</p>}
        {status === "error" && <p>Sory, something went wrong!</p>}
        {status === "empty" && <p>No results</p>}
        {status === "success" && (
          <div className={styles.successContainer}>
            <h2>Search Results:</h2>
            <div className={styles.searchResults}>
              {searchResults.map((result) => (
                <SearchResult key={result.id} result={result} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchForm;

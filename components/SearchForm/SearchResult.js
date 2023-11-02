import React from "react";
import styles from "./SearchResult.module.css";
import InteractionButtons from "./InteractionButtons";

function SearchResult({ result }) {
  return (
    <article className={styles.container}>
      <InteractionButtons itemId={result.id} rating={result.rating} />
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>{result.title.toUpperCase()}</td>
          </tr>
          <tr>
            <td>Producer:</td>
            <td>{result.producer}</td>
          </tr>
          <tr>
            <td>Level of firmness:</td>
            <td>{result.hardness}</td>
          </tr>
          <tr>
            <td>Calories per 100g:</td>
            <td>{result.caloriesper100}kcal</td>
          </tr>
          <tr>
            <td>Protein per 100g:</td>
            <td>{result.proteinper100}g</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default SearchResult;

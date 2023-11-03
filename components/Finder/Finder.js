import React from "react";
import styles from "./Finder.module.css";
import Link from "next/link";

function Finder() {
  return (
    <article className={styles.container}>
      <h1>Finder</h1>

      <div className={styles.sections}>
        <div className={styles.block}>
          <Link href="/finder/database">DataBase </Link>
        </div>
        <div className={styles.block}>
          <Link href="/finder/firmness">Firmness </Link>
        </div>
      </div>
    </article>
  );
}

export default Finder;

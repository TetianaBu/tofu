import React from "react";

import styles from "./Banner.module.css";

function Banner({ type, children }) {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
export default Banner;

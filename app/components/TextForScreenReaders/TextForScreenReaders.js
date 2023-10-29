import React from "react";
import styles from "./TextForScreenReaders.module.css";

function TextForScreenReaders({ children }) {
  return <span className={styles.hidden}>{children}</span>;
}

export default TextForScreenReaders;

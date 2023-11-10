import React from "react";
import TofcioAndBeans from "@/components/TofcioAndBeans";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.container}>
      <TofcioAndBeans />
      <div className={styles.text}>
        <h1>Tofcio&Co</h1>
        <p>
          Welcome to Tofcio, where the world of tofu unfolds like a captivating
          storybook
        </p>
      </div>
    </section>
  );
}

export default Intro;

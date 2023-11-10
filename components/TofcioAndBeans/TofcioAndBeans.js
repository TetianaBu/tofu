import React from "react";
import Image from "next/image";
import TofcioAnimated from "./TofcioAnimated";

import styles from "./TofcioAndBeans.module.css";
import bean from "@/public/bean.svg";

function TofcioAndBeans() {
  return (
    <div className={styles.container}>
      <TofcioAnimated />

      <div className={styles.beansContainer}>
        <Image src={bean} alt="Image of bean" />
        <Image src={bean} alt="Image of bean" />
        <Image src={bean} alt="Image of bean" />
        <Image src={bean} alt="Image of bean" />
      </div>
    </div>
  );
}
export default TofcioAndBeans;

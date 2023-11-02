import React from "react";
// import Head from "next/head";
import { Share2 } from "react-feather";
import TextForScreenReaders from "../TextForScreenReaders";
import styles from "./InteractionButtons.module.css";

function ShareButton({ props }) {
  const { title, text, url } = [...props];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported.");
    }
  };
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.saveButton} onClick={handleShare}>
        {" "}
        <Share2 size={16} />
        <TextForScreenReaders>Share</TextForScreenReaders>
      </button>
    </div>
  );
}

export default ShareButton;

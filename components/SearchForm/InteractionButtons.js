// "use client";
import React from "react";
import { Heart, Star } from "react-feather";
import TextForScreenReaders from "../TextForScreenReaders";
import styles from "./InteractionButtons.module.css";

// TODO:
// 1. send info about like to backend
// 2. save user like to user profile + update ui
// 3. add item to saved if user saved it + update ui

function InteractionButtons({ itemId, rating }) {
  function handleLike(e) {
    e.preventDefault();
  }
  function handleSave(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonWrapper}>
        <span className={styles.likesTotal}>{rating ? rating : 0}</span>
        <button className={styles.likeButton} onClick={handleLike}>
          {" "}
          <Heart size={16} />
          <TextForScreenReaders>Like</TextForScreenReaders>
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.saveButton} onClick={handleSave}>
          {" "}
          <Star size={16} />
          <TextForScreenReaders>Save</TextForScreenReaders>
        </button>
      </div>
    </div>
  );
}

export default InteractionButtons;

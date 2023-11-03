import React from "react";
import { Star } from "react-feather";
import styles from "./Rating.module.css";
import { range } from "@/lib/range";

function Rating({ rating, maxRating = 5 }) {
  return (
    <div>
      <div className={styles.stars}>
        {range(rating).map((num) => (
          <Star key={num} />
        ))}
      </div>
      <div>
        {" "}
        Rating: <span className={styles.number}>{rating}</span> / {maxRating}
      </div>
    </div>
  );
}
export default Rating;

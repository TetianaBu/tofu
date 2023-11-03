import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import styles from "./PostSummaryCard";

function PostSummaryCard({ type, slug, title, publishedOn, abstract }) {
  const href = `/blog/${type}/${slug}`;
  const formattedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div className={styles.container}>
      <h3 className={styles.titleLinked}>
        <Link href={href}>{title}</Link>
      </h3>
      <time dateTime={publishedOn}>{formattedDate}</time>
      <p>{abstract}</p>
      <Link href={href}>
        Continue reading <span>→</span>
      </Link>
    </div>
  );
}

export default PostSummaryCard;

import React from "react";
import styles from "./PostsInSection.module.css";
import PostSummaryCard from "@/components/PostSummaryCard";
import { getBlogPostList } from "@/lib/file-helpers";

async function PostsInSection({ type }) {
  const blogPosts = await getBlogPostList(type);
  return (
    <div className={styles.container}>
      {blogPosts.map(({ slug, ...delegated }) => (
        <PostSummaryCard type={type} key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default PostsInSection;

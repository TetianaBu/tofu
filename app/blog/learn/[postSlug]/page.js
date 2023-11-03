import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/lib/file-helpers";
import styles from "./postSlug.module.css";
import PostHero from "@/components/PostHero";

async function LearnPost({ params }) {
  const type = "learn";
  const { frontmatter, content } = await loadBlogPost(type, params.postSlug);

  return (
    <article className={styles.container}>
      <PostHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default LearnPost;

import React from "react";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p>
          Welcome to Tofcio blog section, where the world of tofu unfolds like
          a captivating storybook
        </p>
      </section>
      <div>
        <section>
          <article>
          <p>some text</p>
          </article>
          <article>
            <p>some text</p>
          </article>
        </section>
        <aside>some aside</aside>
      </div>
    </div>
  );
}

export default Blog;

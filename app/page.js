import Quiz from "@/components/Quiz";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.introContainer}>
        <div className={styles.introText}>
          <h1>Tofcio&Co</h1>
          <p>
            Welcome to Tofcio, where the world of tofu unfolds like a
            captivating storybook
          </p>

          <p>
            Please note that the content on this page is currently being
            developed. Check back soon for updates!
          </p>
        </div>
      </section>
      <Quiz />
    </main>
  );
}

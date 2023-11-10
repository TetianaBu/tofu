import Quiz from "@/components/Quiz";
import Intro from "@/components/Intro";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Intro />
      <Quiz />
    </main>
  );
}

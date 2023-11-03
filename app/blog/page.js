import Blog from "@/components/Blog";
import Link from "next/link";
import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <main className={styles.container}>
      <div className={styles.intro}>
        <h1>Place where Tofcio talks about tofu</h1>
        <p>
          {" "}
          Ever wondered about what is tofu or why on earth people will eat it?
          Well, you&apos;re in the right place! Tofcio&apos;s here to spill the
          beans (or should I say, tofu?) on what this stuff really is. Is it
          good for you? Can it be delicious <i>(Absolutely!)</i>?. If
          you&apos;re in Poland, I&apos;ve speciall perks for you. So, lets
          explore!
        </p>
      </div>
      <div className={styles.sections}>
        <div className={styles.block}>
          <Link href="/blog/learn">Learn</Link>
        </div>
        <div className={styles.block}>
          <Link href="/blog/inspo">Inspo</Link>
        </div>
      </div>
    </main>
  );
}

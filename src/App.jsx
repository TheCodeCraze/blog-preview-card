import styles from "./App.module.css";

export function App() {
  return (
    <article className={styles.container}>
      <img
        className={styles.image}
        src="illustration-article.svg"
        alt="Article's illustration"
      />
      <div className={styles.info}>
        <p className={styles.category}>Learning</p>
        <p className={styles.date}>Published 21 Dec 2023</p>
        <h1 className={styles.title}>HTML & CSS foundations</h1>
        <p className={styles.description}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={styles.author}>
        <img
          className={styles.pic}
          src="image-avatar.svg"
          alt="Greg Hooper's avatar"
        />
        <p className={styles.name}>Greg Hooper</p>
      </div>
    </article>
  );
}

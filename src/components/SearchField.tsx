import styles from "./SearchField.module.scss";

export default function SearchField() {
  return (
    <div className={styles.search}>
      <input className={styles.search_input} />
      <div className={styles.search_icon_wrapper}>
        <img className={styles.search_icon} src="/search.png" alt="search" />
      </div>
    </div>
  );
}

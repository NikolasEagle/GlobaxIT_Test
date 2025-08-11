import styles from "./SearchField.module.scss";

interface Props {
  searchFunc: (query: string) => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchField({ searchFunc }: Props) {

  return (
    <div className={styles.search}>
      <input
        onChange={(event) => searchFunc(event.target.value)}
        className={styles.search_input}
      />
      <div className={styles.search_icon_wrapper}>
        <img className={styles.search_icon} src="/search.png" alt="search" />
      </div>
    </div>
  );
}

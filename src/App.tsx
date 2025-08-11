import styles from "./App.module.scss";
import SearchField from "./components/SearchField";

export default function App() {
  return (
    <div className={styles.home}>
      <SearchField />
    </div>
  );
}

import styles from "./App.module.scss";
import SearchField from "./components/SearchField";
import CardsPanel from "./components/CardsPanel";

export default function App() {
  return (
    <div className={styles.home}>
      <SearchField />
      <CardsPanel />
    </div>
  );
}

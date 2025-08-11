import styles from "./App.module.scss";
import SearchField from "./components/SearchField";
import CardsPanel from "./components/CardsPanel";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState<React.JSX.Element>();

  const [searchValue, setSearchValue] = useState<string>("");

  const search = async (query: string): Promise<void> => {
    const url = "http://localhost:3000";

    try {
      const response = await fetch(`${url}?term=${query}`);

      const body = await response.json();

      setContent(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.home}>
      <SearchField
        searchFunc={search}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CardsPanel content={content} />
    </div>
  );
}

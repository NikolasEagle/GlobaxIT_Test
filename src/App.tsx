import styles from "./App.module.scss";
import SearchField from "./components/SearchField";
import CardsPanel from "./components/CardsPanel";
import { useEffect, useState } from "react";

export interface User {
  id: number;

  name: string;

  phone: string;

  email: string;

  address: string;

  position_name: string;

  departament: string;

  hire_date: string;
}

export interface Info {
  data: User[];
}

export default function App() {
  const [content, setContent] = useState<Info | null>(null);

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

  useEffect(() => {
    search("");
  }, []);

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

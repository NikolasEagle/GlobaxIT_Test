import styles from "./CardsPanel.module.scss";
import { Info } from "../App";
import Card from "./Card";

interface Props {
  content: Info | null;
}

export default function CardsPanel({ content }: Props) {
  return (
    <div className={styles.panel}>
      {content &&
        content.data.map((_, index) => <Card user={content.data[index]} />)}
    </div>
  );
}

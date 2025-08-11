import styles from "./CardsPanel.module.scss";
import { Info, User } from "../App";
import Card from "./Card";

interface Props {
  setActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  content: Info | null;
}

export default function CardsPanel({
  setActivePopup,
  setSelectedUser,
  content,
}: Props) {
  return (
    <div className={styles.panel}>
      {content &&
        content.data.map((_, index) => (
          <Card
            setActivePopup={setActivePopup}
            setSelectedUser={setSelectedUser}
            user={content.data[index]}
          />
        ))}
    </div>
  );
}

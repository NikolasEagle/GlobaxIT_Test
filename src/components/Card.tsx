import { User } from "../App";
import styles from "./Card.module.scss";

interface Props {
  setActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  user: User;
}

export default function Card({ setActivePopup, setSelectedUser, user }: Props) {
  const openPopup = () => {
    setSelectedUser(user);
    setActivePopup(true);
  };

  return (
    <div onClick={openPopup} className={styles.card}>
      <h2>{user.name}</h2>
      <div className={styles.contacts}>
        <div>
          <div className={styles.phone}></div>
          <p>{user.phone}</p>
        </div>
        <div>
          <div className={styles.email}></div>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

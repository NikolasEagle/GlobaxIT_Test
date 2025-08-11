import { User } from "../App";
import styles from "./Popup.module.scss";

interface Props {
  isActive: boolean;
  user: User | null;
}

export default function Popup({ isActive, user }: Props) {
  return (
    isActive && (
      <div className={styles.popup_shadow}>
        <div className={styles.popup}></div>
      </div>
    )
  );
}

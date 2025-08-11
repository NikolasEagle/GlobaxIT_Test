import { User } from "../App";
import styles from "./Card.module.scss";

interface Props {
  user: User;
}

export default function Card({ user }: Props) {
  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>
      <div className={styles.contacts}>
        <div>
          <img className={styles.phone} src="/phone.png" alt="phone" />
          <p>{user.phone}</p>
        </div>
        <div>
          <img className={styles.email} src="/email.png" alt="email" />
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

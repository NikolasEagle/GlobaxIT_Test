import { User } from "../App";
import styles from "./Card.module.scss";

interface Props {
  user: User;
}

export default function Card({ user }: Props) {
  return <div className={styles.card}>{user.id}</div>;
}

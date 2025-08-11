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
        <div className={styles.popup}>
          <div className={styles.header}>
            <h2>{user.name}</h2>
            <div className={styles.close}></div>
          </div>
          <div className={styles.info}>
            <div className={styles.desc}>
              <p>Телефон:</p>
              <p>Почта:</p>
              <p>Дата приема:</p>
              <p>Должность:</p>
              <p>Подразделение:</p>
            </div>
            <div className={styles.data}>
              <p>{user?.phone}</p>
              <p>{user?.email}</p>
              <p>{user?.hire_date}</p>
              <p>{user?.position_name}</p>
              <p>{user?.department}</p>
            </div>
          </div>
          <div className={styles.add_info}>
            <p className={styles.desc}>Дополнительная информация:</p>
            <p className={styles.data}>
              Разработчики используют текст в качестве заполнителя макта
              страницы. Разработчики используют текст в качестве заполнителя
              макта страницы.
            </p>
          </div>
        </div>
      </div>
    )
  );
}

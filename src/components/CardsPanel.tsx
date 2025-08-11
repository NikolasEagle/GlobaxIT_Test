import React from "react";
import styles from "./CardsPanel.module.scss";

interface Props {
  content: React.JSX.Element;
}

export default function CardsPanel({content}: Props) {
  return <div className={styles.panel}></div>;
}

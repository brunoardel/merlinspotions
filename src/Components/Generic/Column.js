import React from "react";
import styles from "./Column.module.css";

export default props => {
  return <div className={styles.column}>{props.children}</div>;
};

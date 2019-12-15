import React from "react";
import { ReactComponent as BagLogo } from "../../images/bag-icon.svg";
import styles from "./Bag.module.css";

export default () => {
  return (
    <div className={styles.bag}>
      <BagLogo />
      <div className={styles.bagContainer}>
        Bag: <span className={styles.bagCount}>1</span>
      </div>
    </div>
  );
};

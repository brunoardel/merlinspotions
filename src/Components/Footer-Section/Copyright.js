import React from "react";
import styles from "./Copyright.module.css";

export default () => {
  return (
    <div className={styles.copyright}>
      <span className={styles.copyrightText}>
        &copy; Merlin's Potions.All Rights Reserved.
      </span>
    </div>
  );
};

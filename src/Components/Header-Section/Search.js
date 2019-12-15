import React from "react";
import styles from "./Search.module.css";

export default () => {
  return (
    <div className={styles.searchInput}>
      <span className="fa fa-search" />
      <input type="text" placeholder="Search our stock" />
    </div>
  );
};

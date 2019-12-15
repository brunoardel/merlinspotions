import React from "react";
import styles from "./Social.module.css";

export default () => {
  return (
    <div className={styles.social}>
      <ul className={styles.socialList}>
        <a className={styles.socialIcon} href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a className={styles.socialIcon} href="#">
          <i className="fab fa-twitter" />
        </a>
        <a className={styles.socialIcon} href="#">
          <i className="fab fa-pinterest-p" />
        </a>
        <a className={styles.socialIcon} href="#">
          <i className="fab fa-tumblr" />
        </a>
        <a className={styles.socialIcon} href="#">
          <i className="fab fa-google-plus-g" />
        </a>
      </ul>
    </div>
  );
};

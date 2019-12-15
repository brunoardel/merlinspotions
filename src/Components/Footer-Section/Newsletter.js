import React from "react";
import styles from "./Newsletter.module.css";

export default () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h1
          className={`${styles.newsletterText} ${styles.newsletterTextItalic}`}
        >
          Sign up for our Newsletter
        </h1>
        <h2 className={styles.newsletterText}>
          Sign up for our Newsletter &amp; get exclusive discounts!
        </h2>
        <div className={styles.newsletterForm}>
          <input
            className={styles.newsletterInput}
            placeholder="Enter your email"
            type="text"
          />
          <button className={styles.newsletterBtn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

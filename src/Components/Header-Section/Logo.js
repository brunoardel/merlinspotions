import React, { Component } from "react";
import styles from "./Logo.module.css";

class Logo extends Component {
  formatTitle(title) {
    const splited = title.split(" ");
    return (
      <>
        <span className={`${styles.logoTitle} ${styles.logoTitleBold}`}>
          {splited[0]}
        </span>
        <span className={styles.logoTitle}>{splited[1]}</span>
      </>
    );
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <div className={styles.logo}>
        <div className={styles.title}>{this.formatTitle(title)}</div>
        <div className={styles.subtitle}>
          <span>{subtitle}</span>
        </div>
      </div>
    );
  }
}

export default Logo;

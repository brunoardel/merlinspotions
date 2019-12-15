import React from "react";
import navStyles from "../Generic/Nav.module.css";

export default props => {
  const { navElements, buttons, styles = navStyles } = props;
  return (
    <div className={styles.navbarNav}>
      <ul className={styles.navbarItems}>
        {navElements.name.map(element => (
          <li key={element} className={styles.navbarItem}>
            <a className={styles.navbarLink} href={navElements.href}>
              {element}
            </a>
          </li>
        ))}
      </ul>
      {buttons ? (
        <div className={styles.navbarBtnGroup}>
          <button className={styles.navbarBtnSign}>Sign In</button>
          <span>or</span>
          <button className={styles.navbarBtnSign}>Sign Up</button>
        </div>
      ) : null}
    </div>
  );
};

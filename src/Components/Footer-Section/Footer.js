import React from "react";
import Newsletter from "./Newsletter";
import Social from "./Social";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Media from "react-media";
import Nav from "../Generic/Nav";
import Column from "../Generic/Column";
import NavFooterStyles from "./NavFooter.module.css";

export default () => {
  const elements = {
    name: ["Company", "Contact us", "Shipping", "Returns", "Carrers"],
    href: "#"
  };
  return (
    <div className={styles.footer}>
      <Media query="(max-width: 992px)">
        {matches =>
          matches ? (
            <>
              <Newsletter />
              <Social />
              <Copyright />
            </>
          ) : (
            <div className={`wrapper ${styles.footerDesktop}`}>
              <Column>
                <Nav
                  styles={NavFooterStyles}
                  navElements={elements}
                  buttons={false}
                />
                <Social />
                <Copyright />
              </Column>
              <Column>
                <Newsletter />
              </Column>
            </div>
          )
        }
      </Media>
    </div>
  );
};

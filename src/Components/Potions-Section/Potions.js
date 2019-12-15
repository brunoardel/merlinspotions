import React from "react";
import Column from "../Generic/Column";
import styles from "./Potions.module.css";
import Potion from "./Potion";

export default props => {
  const { title, potions } = props;
  return (
    <div className="wrapper">
      <h1 className={styles.potionsTitle}>{title}</h1>
      <div className={styles.potions}>
        {potions !== null ? (
          potions.map(potion => {
            return (
              <Column key={potion.id}>
                <Potion potion={potion} />
              </Column>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

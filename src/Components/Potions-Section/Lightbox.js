import React from "react";
import styles from "./Lightbox.module.css";

export default props => {
  const { name, image, price, effect, ingredients } = props.potion;
  return (
    <div className={styles.backgroundGrey}>
      <div className={styles.lightbox}>
        <button
          onClick={() => props.toggleLightBox(false)}
          className={styles.lightboxBtnX}
        >
          X
        </button>
        <div className={styles.lightboxContent}>
          <img
            className={styles.lightboxImg}
            src={require(`../../images/products/${image}`)}
            alt={`${name}`}
          />
          <div className={styles.lightboxText}>
            <h1 className={styles.potionName}>{name}</h1>
            <h2 className={styles.potionName}>Use/Effect:</h2>
            <span className={styles.lightboxEffect}>{effect}</span>
            <h3 className={styles.potionName}>Ingredients:</h3>
            <div className={styles.lightboxIngredients}>
              {ingredients.map(ingredient => (
                <span className={styles.lightboxIngredient}>{ingredient}</span>
              ))}
            </div>
            <div className={styles.lightboxPrice}>
              <h4 className={styles.potionName}>Price:</h4>
              <span className={styles.potionPrice}>{`$${price}`}</span>
            </div>
            <button className={styles.lightboxBtn}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

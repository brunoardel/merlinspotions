import React, { Component } from "react";
import Lightbox from "./Lightbox";
import styles from "./Potion.module.css";

class Potion extends Component {
  constructor(props) {
    super(props);
    this.state = { lightbox: false };
  }

  toggleLightBox(bool) {
    this.setState({ lightbox: bool });
  }

  render() {
    if (this.props.potion !== undefined) {
      const { name, image, price } = this.props.potion;
      return (
        <div className={styles.potion}>
          <figure>
            <button
              onClick={() => this.toggleLightBox(true)}
              className={styles.potionBtn}
            >
              <img
                className={styles.potionImg}
                src={require(`../../images/products/${image}`)}
                alt={`${name}`}
              />
            </button>
            <figcaption>
              <span className={styles.potionName}>{name}</span> -{" "}
              <span className={styles.potionPrice}>{`$${price}`}</span>
            </figcaption>
          </figure>
          {this.state.lightbox ? (
            <Lightbox
              toggleLightBox={() => this.toggleLightBox()}
              potion={this.props.potion}
            />
          ) : null}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Potion;

import React, { Component } from "react";
import Header from "./Header-Section/Header";
import Potions from "./Potions-Section/Potions";
import Footer from "./Footer-Section/Footer";
import getAll from "../Utils/PotionsAPI";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { potions: null };
  }

  toArray(obj) {
    let array = [];
    Object.entries(obj).forEach(([key, value]) => (array[key - 1] = value));
    return array;
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    getAll()
      .then(result => this.setState({ potions: this.toArray(result.potions) }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Header />
        <Potions title="Potions" potions={this.state.potions} />
        <Footer />
      </>
    );
  }
}

export default App;

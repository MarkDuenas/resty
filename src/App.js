import React, { Component } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form.js";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;

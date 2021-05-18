import React, { Component } from "react";

import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form.js";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    url: "",
    method: "",
    final: "",
    headers: "",
    results: "",
  };

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(this.state.url);

      this.setState({
        ...this.state,
        final: `${this.state.method}  ${this.state.url}`,
        headers: response.headers,
        results: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Form
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          final={this.state.final}
          headers={this.state.headers}
          results={this.state.results}
          url={this.state.url}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

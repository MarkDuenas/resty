import React, { Component } from "react";

import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Results from "./components/results/Results";

class App extends Component {
  state = {
    url: "",
    method: "",
    final: "",
    headers: "",
    results: "",
    history: [],
  };

  componentDidMount() {
    const items = localStorage.getItem("history")
      ? localStorage.getItem("history")
      : null;
    if (!items) {
      return;
    }

    const history = JSON.parse(items);

    this.setState({
      ...this.state,
      history: history,
    });
  }

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: this.state.method,
        url: this.state.url,
        data: {},
      });

      if (this.state.url && this.state.method) {
        this.setState({
          ...this.state,
          final: `${this.state.method} ${this.state.url}`,
          headers: response.headers,
          results: response.data,
          history: [
            {
              url: this.state.url,
              method: this.state.method,
              record: response,
            },
            ...this.state.history,
          ],
        });
      }

      console.log(this.state.history, "this is the history");
      // save to local storage
      localStorage.setItem("history", JSON.stringify(this.state.history));

      this.setState({ ...this.state, url: "", method: "" });
    } catch (e) {
      console.error(e);
    }
  };

  clickHandler = (e) => {
    console.log(e.target.value);
    let words = e.target.value.split(" ");
    console.log(words);
    this.setState({ ...this.state, url: words[1], method: words[0] });
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
          url={this.state.url}
        />
        <Results
          headers={this.state.headers}
          results={this.state.results}
          final={this.state.final}
          clickHandler={this.clickHandler}
          history={this.state.history}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

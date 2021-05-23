import React, { Component } from "react";

import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Results from "./components/results/Results";
import Nav from "./components/nav/Nav";
import History from "./components/history/History";
import Help from "./components/help/Help";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    url: "",
    method: "",
    headers: "",
    results: "",
    history: [],
    data: "",
    body: "",
    loading: false,
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
    this.setState({ ...this.state, loading: true });
    try {
      const response = await axios({
        method: this.state.method || "get",
        url: this.state.url,
        data: this.state.body ? JSON.parse(this.state.body) : {},
      });

      if (this.state.url && this.state.method) {
        this.setState({
          ...this.state,
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
        this.setState({ ...this.state, loading: false });
      }
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

  historyHandler = (data) => {
    this.setState({ ...this.state, data: data });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Route exact path='/'>
            <Form
              submitHandler={this.submitHandler}
              changeHandler={this.changeHandler}
              url={this.state.url}
              method={this.state.method}
            />
            <Results
              headers={this.state.headers}
              results={this.state.results}
              final={this.state.final}
              clickHandler={this.clickHandler}
              history={this.state.history}
              loading={this.state.loading}
            />
          </Route>
          <Route exact path='/history'>
            <History
              history={this.state.history}
              historyHandler={this.historyHandler}
              data={this.state.data}
            />
          </Route>
          <Route exact path='/help'>
            <Help />
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

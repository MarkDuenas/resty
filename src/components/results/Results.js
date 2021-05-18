import React, { Component } from "react";
import ReactJson from "react-json-view";

class Results extends Component {
  render() {
    return (
      <>
        <ReactJson
          src={this.props.headers}
          theme='google'
          name='Headers'
          style={{ fontSize: ".7em" }}
        />
        <ReactJson
          src={this.props.results}
          theme='google'
          name='Response'
          style={{ fontSize: ".7em" }}
        />
      </>
    );
  }
}

export default Results;

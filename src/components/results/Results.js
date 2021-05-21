import React, { Component } from "react";
import ReactJson from "react-json-view";
import "./Results.css";

class Results extends Component {
  render() {
    const history = this.props.history.map((item) => {
      return <button>{item.url}</button>;
    });

    return (
      <div className='main-content'>
        <div className='history'>
          {this.props.final ? (
            <button
              className='url'
              value={this.props.final}
              onClick={this.props.clickHandler}
            >
              {this.props.final}
            </button>
          ) : (
            ""
          )}
          {history}
        </div>

        <div className='json-content'>
          {this.props.results ? (
            <>
              <ReactJson
                src={this.props.headers}
                theme='google'
                name='Headers'
                style={{ fontSize: "1.5em" }}
              />
              <ReactJson
                src={this.props.results}
                theme='google'
                name='Response'
                style={{ fontSize: "1.5em" }}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Results;

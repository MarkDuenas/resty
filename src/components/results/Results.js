import React, { Component } from "react";
import ReactJson from "react-json-view";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Results.scss";

class Results extends Component {
  render() {
    const history = this.props.history.map((item, idx) => {
      return (
        <li key={idx}>
          <button
            className='url'
            onClick={this.props.clickHandler}
            value={`${item.method} ${item.url}`}
          >
            {item.method} {item.url}
          </button>
        </li>
      );
    });

    return (
      <div className='main-content'>
        <div className='history'>
          <ul>{history}</ul>
        </div>

        {this.props.results ? (
          <div data-testid='json-content-results' className='json-content'>
            <ReactJson
              data-testid='results'
              src={this.props.headers}
              theme='google'
              name='Headers'
              style={{ fontSize: "1.5em" }}
            />
            <ReactJson
              data-testid='results'
              src={this.props.results}
              theme='google'
              name='Response'
              style={{ fontSize: "1.5em" }}
            />
          </div>
        ) : this.props.loading ? (
          <>
            <h4 data-testid='loading'>Loading...</h4>
            <Loader type='TailSpin' color='#312e32' />
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Results;

import React, { Component } from "react";
import ReactJson from "react-json-view";

class History extends Component {
  render() {
    const history = this.props.history.map((item, idx) => {
      return (
        <li key={idx}>
          <button
            data-testid='history'
            className='url'
            onClick={() => {
              this.props.historyHandler(item);
            }}
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

        {this.props.data ? (
          <div data-testid='json-content' className='json-content'>
            <ReactJson
              src={this.props.data.record.headers}
              theme='google'
              name='Headers'
              style={{ fontSize: "1.5em" }}
            />
            <ReactJson
              src={this.props.data.record.data}
              theme='google'
              name='Response'
              style={{ fontSize: "1.5em" }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default History;

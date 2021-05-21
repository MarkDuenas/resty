import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className='form-div'>
        <form onSubmit={this.props.submitHandler}>
          <label htmlFor='url'> URL: </label>
          <input
            data-testid='url'
            type='text'
            name='url'
            value={this.props.url}
            onChange={this.props.changeHandler}
          />
          <button> GO! </button>
          <div className='radio-container'>
            <input
              type='radio'
              name='method'
              value='GET'
              id='get'
              onChange={this.props.changeHandler}
            />
            <label htmlFor='get'> GET </label>
            <input
              type='radio'
              name='method'
              value='POST'
              id='post'
              onChange={this.props.changeHandler}
            />
            <label htmlFor='post'> POST </label>
            <input
              type='radio'
              name='method'
              value='PUT'
              id='put'
              onChange={this.props.changeHandler}
            />
            <label htmlFor='put'> PUT </label>
            <input
              type='radio'
              name='method'
              value='DELETE'
              id='delete'
              onChange={this.props.changeHandler}
            />
            <label htmlFor='delete'> DELETE </label>
          </div>
        </form>

        {/* <div className='main-content'>
          <div className='history'>{this.props.final}</div>
          <div className='json-content'>
            {this.props.results ? (
              <Results
                headers={this.props.headers}
                results={this.props.results}
              />
            ) : (
              ""
            )}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Form;

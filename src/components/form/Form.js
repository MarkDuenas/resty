import React, { Component } from "react";

import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div className='form-div'>
        <form data-testid='api-form' onSubmit={this.props.submitHandler}>
          <label htmlFor='url'> URL: </label>
          <input
            data-testid='url'
            type='text'
            name='url'
            value={this.props.url}
            onChange={this.props.changeHandler}
          />
          <div className='txt-area'>
            <label htmlFor='body'>Body:</label>
            <textarea
              onChange={this.props.changeHandler}
              data-testid='body'
              name='body'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <button> GO! </button>
          <div className='radio-container'>
            <input
              data-testid='get'
              type='radio'
              name='method'
              value='GET'
              id='get'
              checked={this.props.method === "GET"}
              onChange={this.props.changeHandler}
            />
            <label htmlFor='get'> GET </label>
            <input
              data-testid='post'
              type='radio'
              name='method'
              value='POST'
              id='post'
              checked={this.props.method === "POST"}
              onChange={this.props.changeHandler}
            />
            <label htmlFor='post'> POST </label>
            <input
              data-testid='put'
              type='radio'
              name='method'
              value='PUT'
              id='put'
              checked={this.props.method === "PUT"}
              onChange={this.props.changeHandler}
            />
            <label htmlFor='put'> PUT </label>
            <input
              data-testid='delete'
              type='radio'
              name='method'
              value='DELETE'
              id='delete'
              checked={this.props.method === "DELETE"}
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

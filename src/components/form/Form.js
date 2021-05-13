import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = { url: "", method: "", final: "" };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ final: `${this.state.method}   ${this.state.url}` });
    console.log(this.state.final);
  };

  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='form-div'>
        <form onSubmit={this.submitHandler}>
          <label htmlFor='url'> URL: </label>
          <input
            type='text'
            name='url'
            onChange={this.changeHandler}
            value={this.state.url}
          />
          <button> GO!</button>
          <div className='radio-container'>
            <input
              type='radio'
              name='method'
              value='GET'
              id='get'
              onChange={this.changeHandler}
            />
            <label htmlFor='get'> GET </label>
            <input
              type='radio'
              name='method'
              value='POST'
              id='post'
              onChange={this.changeHandler}
            />
            <label htmlFor='post'> POST </label>
            <input
              type='radio'
              name='method'
              value='PUT'
              id='put'
              onChange={this.changeHandler}
            />
            <label htmlFor='put'> PUT </label>
            <input
              type='radio'
              name='method'
              value='DELETE'
              id='delete'
              onChange={this.changeHandler}
            />
            <label htmlFor='delete'> DELETE </label>
          </div>
        </form>

        <div className='main-content'>{this.state.final}</div>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/history'> History </Link>
          </li>
          <li>
            <Link to='/help'> Help </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;

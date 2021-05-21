import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p data-testid='footer'>&copy; 2018 Code Fellows</p>
      </div>
    );
  }
}

export default Footer;

import React, { Component} from "react";
import "./header.component.scss";

class Header extends Component{
  render(){
    return(
      <header className="header-container">
        <h1> Hello, Header!! </h1>
      </header>
    );
  }
}

export default Header;
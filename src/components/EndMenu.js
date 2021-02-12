import React, { Component } from "react";
import "../index.css";

export class EndMenu extends Component {
  render() {
    return (
      <div>
        <h1 className="sign" >YOU SUCK</h1>
        <div className="menu">
          <button className="glow-on-hover" onClick={() => this.props.onClick()}> RETRY </button>

          <button className="glow-on-hover" > OPTIONS </button>
        </div>
      </div>
    );
  }
}
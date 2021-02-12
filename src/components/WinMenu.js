import React, { Component } from "react";
import "../index.css";

export class WinMenu extends Component {
  render() {
    return (

      <div>
        <h1 className="sign">VICTORY</h1>
        <div className="menu">
        <button className="glow-on-hover" onClick={() => this.props.onClick()}> PLAY AGAIN </button>

        <button className="glow-on-hover"> OPTIONS </button>
        </div>
      </div>
    );
  }
}
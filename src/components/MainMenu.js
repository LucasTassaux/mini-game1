import React, { Component } from "react";
import "../index.css";

export class MainMenu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="glow-on-hover" onClick={() => this.props.onClick()}> START </button>

        <button className="glow-on-hover"> OPTIONS </button>
      </div>
    );
  }
}

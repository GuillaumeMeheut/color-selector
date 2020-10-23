import React, { Component } from "react";
import "./copied.css";

class Copied extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.class} style={{ backgroundColor: this.props.color }}>
        <div className="textContainer" style={{ backgroundColor: this.props.color }}>
          <p className="textCopied">COPIED !</p>
        </div>
      </div>
    );
  }
}

export default Copied;

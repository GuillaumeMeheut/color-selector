import React, { Component } from "react";
import "./color.css";

class Color extends Component {
  state = {};

  copyText = (text) => {
    navigator.clipboard.writeText(text);
    this.props.triggerCopied(this.props.hexa);
  };

  render() {
    return (
      <div className="colorContainer">
        <div
          className={this.props.class}
          style={{ backgroundColor: this.props.hexa, transitionDelay: this.props.transitionDelay }}
        >
          <p className="text" onClick={() => this.copyText(this.props.hexa)}>
            {this.props.hexa}
          </p>
          <p className="text" onClick={() => this.copyText(this.props.rgb)}>
            {this.props.rgb}
          </p>
        </div>
      </div>
    );
  }
}

export default Color;

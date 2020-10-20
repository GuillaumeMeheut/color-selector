import React, { Component } from "react";
import "./color.css";

class Color extends Component {
  state = {};

  copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  render() {
    return (
      <div className="colorContainer">
        <div className="myColor" style={{ backgroundColor: this.props.hexa }}>
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

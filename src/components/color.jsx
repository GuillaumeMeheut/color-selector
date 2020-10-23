import React, { Component } from "react";
import "./color.css";

class Color extends Component {
  state = {};

  copyText = (text) => {
    navigator.clipboard.writeText(text);
    this.props.triggerCopied(this.props.hexa);
  };

  getOpositeColor = (rgb) => {
    // Like this : rgb(0, 0, 0);
    while (rgb.indexOf(" ") !== -1) rgb = rgb.replace(" ", "");
    //Check if is formatted as RGB
    let x;
    if ((x = /([0-9]{0,3}),([0-9]{0,3}),([0-9]{0,3})/.exec(rgb))) {
      //Extract colors
      const color = {
        r: parseInt(x[1]),
        g: parseInt(x[2]),
        b: parseInt(x[3]),
      };
      //If is this operation be <= 128 return white, others else return black
      const OpositeColor =
        0.3 * color["r"] + 0.59 * color["g"] + 0.11 * color["b"] <= 128 ? "#FFF" : "#000";
      return OpositeColor;
    }
    return -1;
  };

  render() {
    return (
      <div className="colorContainer">
        <div
          className={this.props.class}
          style={{
            backgroundColor: this.props.hexa,
            transitionDelay: this.props.transitionDelay,
            color: this.getOpositeColor(this.props.rgb),
          }}
        >
          <p className="text" onClick={() => this.copyText(this.props.hexa)}>
            {this.props.hexa}
          </p>
          <br />
          <p className="text" onClick={() => this.copyText(this.props.rgb)}>
            {this.props.rgb}
          </p>
        </div>
      </div>
    );
  }
}

export default Color;

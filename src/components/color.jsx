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

  returnCadenaSvg = (textFillColor) => {
    if (this.props.locked)
      return (
        <svg
          width="24"
          height="29"
          viewBox="0 0 24 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="10.2448"
            width="24"
            height="18"
            rx="4"
            fill={textFillColor}
            className="cadenas"
          />
          <path
            d="M6 7.86956C5.99999 2.32609 9.07107 2 12 2C14.9289 2 18 2 18 7.86956C18 9.90159 18 11.621 18 13.0006C18 15.2097 16.2091 17 14 17H10C7.79087 17 6 15.211 6 13.0018C6 11.5926 6 9.85679 6 7.86956Z"
            stroke={textFillColor}
            stroke-width="3"
            className="cadenas"
          />
        </svg>
      );
    else
      return (
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="12.2448"
            width="24"
            height="18"
            rx="4"
            fill={textFillColor}
            className="cadenas"
          />
          <path
            d="M6 6.69565C5.99999 2.26087 9.07107 2 12 2C14.9289 2 18 2 18 6.69565C18 11.3913 18 14 18 14"
            stroke={textFillColor}
            stroke-width="3"
            className="cadenas"
          />
        </svg>
      );
  };

  render() {
    const textFillColor = this.getOpositeColor(this.props.rgb);
    const cadenaSVG = this.returnCadenaSvg(textFillColor);
    return (
      <div className="colorContainer">
        <div
          className={this.props.locked ? "myColor myColorActivated" : this.props.class}
          style={{
            backgroundColor: this.props.hexa,
            transitionDelay: this.props.transitionDelay,
            color: textFillColor,
          }}
        >
          <p className="text" onClick={() => this.copyText(this.props.hexa)}>
            {this.props.hexa}
          </p>
          <p className="text" onClick={() => this.copyText(this.props.rgb)}>
            {this.props.rgb}
          </p>
          <span onClick={() => this.props.triggerLocked(this.props.id)}>{cadenaSVG}</span>
        </div>
      </div>
    );
  }
}

export default Color;

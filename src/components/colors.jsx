import React, { Component } from "react";
import Color from "./color";
import Button from "./button";
import Copied from "./copied";
import "./colors.css";

class Colors extends Component {
  state = {
    colors: [
      { id: 1, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0s", textColor: "#FFFFFF" },
      { id: 2, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.1s", textColor: "#ffffff" },
      { id: 3, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.2s", textColor: "#ffffff" },
      { id: 4, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.3s", textColor: "#ffffff" },
      { id: 5, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.4s", textColor: "#ffffff" },
      { id: 6, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.5s", textColor: "#ffffff" },
      { id: 7, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.6s", textColor: "#ffffff" },
      { id: 8, hexa: "#000000", rgb: "rgb(0,0,0)", transitionDelay: "0.7s", textColor: "#ffffff" },
    ],
    colorClass: "myColor",
    copiedClass: "background backgroundDesactivated",
    copiedColor: null,
  };

  randomizeColor = () => {
    const colors = this.state.colors.map((c) => {
      const color = ~~(Math.random() * 0xffffff);
      c.hexa = "#" + color.toString(16).padStart(6, "0").toUpperCase();
      c.rgb = "RGB(" + (color >> 16) + "," + ((color >> 8) & 0xff) + "," + (color & 0xff) + ")";
      return c;
    });
    this.setState({ colors });
  };

  triggerColorClass = () => {
    let c = "myColor";
    this.setState({ colorClass: c });
    setTimeout(() => {
      c = "myColor myColorActivated";
      this.setState({ colorClass: c });
    }, 300);
  };

  triggerCopied = (color) => {
    let c = "background backgroundActivated";
    this.setState({ copiedColor: color });
    this.setState({ copiedClass: c });
    setTimeout(() => {
      c = "background backgroundDesactivated";
      this.setState({ copiedClass: c });
    }, 500);
  };

  render() {
    return (
      <div className="appContainer">
        <Button randomize={this.randomizeColor} triggerColorClass={this.triggerColorClass} />
        <Copied class={this.state.copiedClass} color={this.state.copiedColor} />
        <div className="colorsContainer">
          {this.state.colors.map((color) => (
            <Color
              key={color.id}
              hexa={color.hexa}
              rgb={color.rgb}
              class={this.state.colorClass}
              transitionDelay={color.transitionDelay}
              textColor={color.textColor}
              triggerCopied={this.triggerCopied}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Colors;

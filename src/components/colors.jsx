import React, { Component } from "react";
import Color from "./color";
import Button from "./button";
import "./colors.css";

class Colors extends Component {
  state = {
    colors: [
      { id: 1, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#FFFFFF" },
      { id: 2, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 3, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 4, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 5, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 6, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 7, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
      { id: 8, hexa: "#000000", rgb: "rgb(0,0,0)", textColor: "#ffffff" },
    ],
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

  render() {
    return (
      <div className="appContainer">
        <Button randomize={this.randomizeColor} />

        <div className="colorsContainer">
          {this.state.colors.map((color) => (
            <Color key={color.id} hexa={color.hexa} rgb={color.rgb} textColor={color.textColor} />
          ))}
        </div>
      </div>
    );
  }
}

export default Colors;

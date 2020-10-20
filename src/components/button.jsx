import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {
    buttonClicked: true,
    buttonContent: "REFRESH",
  };

  buttonTransition = () => {
    this.setState((prevState) => ({
      buttonClicked: !prevState.buttonClicked,
      buttonContent: "",
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        buttonClicked: !prevState.buttonClicked,
        buttonContent: "REFRESH",
      }));
    }, 700);
  };

  render() {
    const { buttonClicked } = this.state;
    return (
      <button
        className={`${buttonClicked ? "buttonRefresh" : " buttonRefresh buttonRefreshClicked"}`}
        onClick={() => {
          this.props.randomize();
          this.buttonTransition();
        }}
      >
        <span className={`${buttonClicked ? "spanButton" : "spanButtonClicked"}`}>
          {this.state.buttonContent}
        </span>
      </button>
    );
  }
}

export default Button;

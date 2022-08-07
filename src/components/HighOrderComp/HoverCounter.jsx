import React, { Component } from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends Component {

  render() {
    const { incrementCounter, counter,name } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCounter}>Hovered {counter} times {name}</button>
      </div>
    );
  }
}
export default WithCounter(HoverCounter)
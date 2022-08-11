import React, { Component } from "react";
import WithCounter from './WithCounter'
class ClickCounter extends Component {
  render() {
    const { incrementCounter, counter,name } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>Clicked {counter} times {name}</button>
      </div>
    );
  }
}
export default WithCounter(ClickCounter,8)
import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
  render() {
    return <div>
        {this.props.render(this.state.counter,this.incrementCounter)}
    </div>;
  }
}

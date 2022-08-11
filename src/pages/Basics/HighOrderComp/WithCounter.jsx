import React, { Component } from "react";
const WithCounter = (WrapperComp, IncrementNumber = 1)=>{
    class WithCounter extends Component {
        constructor(props) {
            super(props);
            this.state = {
              counter: 0,
            };
          }
          incrementCounter = () => {
            this.setState((prev) => {
              return {
                counter: prev.counter + IncrementNumber,
              };
            });
          };
        render(){
            return <WrapperComp counter={this.state.counter} incrementCounter={this.incrementCounter} 
              {...this.props} />
        }
    }
    return WithCounter;
}
export default WithCounter;
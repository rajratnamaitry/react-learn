import React, { Component } from 'react'
import FrwdInpuRef from './frwdInpuRef'

export default class ParentFwdRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }
  btnClick = () => {
    //console.log(this.inputRef)
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <FrwdInpuRef ref={this.inputRef} />
        <button onClick={this.btnClick} >focus input</button>
      </div>
    )
  }
}

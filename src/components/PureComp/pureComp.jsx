import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log('pure comp')
    return (
      <div>Pure comp {this.props.name} </div>
    )
  }
}

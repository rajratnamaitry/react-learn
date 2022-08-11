import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export default class CompD extends Component {
  render() {
    return (
      <UserConsumer>
        { (name)=> <div>Comp D {name}</div> }
      </UserConsumer>      
    )
  }
}

import React, { Component } from 'react'
import CompD from './CompD'
import UserContext from './userContext'

export default class CompC extends Component {
  render() {
    return (
      <div>
        Comp C  {this.context}
        <CompD /> 
      </div>
    )
  }
}
CompC.contextType = UserContext

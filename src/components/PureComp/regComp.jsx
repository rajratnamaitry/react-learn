import React, { Component } from 'react'

export default class RegComp extends Component {
     render() {
        console.log('reg comp')
        return (
            <div>RegComp {this.props.name} </div>
        )
    }
}

import React, { Component } from 'react'
import ChildMethodAsProps from './ChildMethodAsProps';
/**
 *  method pass as props
 *  @output decorator
 */
export default class MethodAsProps extends Component {
    constructor() {
        super();
        this.state = {
            name:"parent"
        }
        this.getParent = this.getParent.bind(this);
    }
    getParent(child){ 
        alert(`click on method ${this.state.name} from ${child}`)
    }
    render() {
        return (
            <ChildMethodAsProps getParentHandler={this.getParent} ></ChildMethodAsProps>
        )
    }
}

import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }
    focusInputFn(arg){
        //this.inputRef.current.value = arg;
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

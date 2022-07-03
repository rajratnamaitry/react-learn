import React, { Component } from 'react'
import Input from './input';

export default class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.compRef = React.createRef();
    }
    componentDidMount(){
        this.compRef.current.focusInputFn('input');
    }
    render() {
        return (
            <div>
                <Input ref={this.compRef} ></Input>
                <button >Submit</button>
            </div>
        )
    }
}

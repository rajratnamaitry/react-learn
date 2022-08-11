import React, { Component } from 'react'

export default class RefEleCom extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = elem => {
            this.cbRef = elem;
        }
    }
    componentDidMount() {
        this.cbRef.focus();
        console.log('Ref', this.inputRef)
    }
    btnClick = ()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.btnClick} >Submit</button>
            </div>
        )
    }
}

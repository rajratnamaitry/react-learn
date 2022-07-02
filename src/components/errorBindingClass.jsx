import React, { Component } from 'react'
/** 
 * error binding 
 *  with call back fun
 * */ 
export default class ErrorBindClass extends Component {
    constructor() {
        super()
        this.state = {
            name: 'state',
            count: 0
        }
    }
    btnClick(){
        console.log(this)
        this.setState((prev, props)=>({
            count:prev.count+1
        }),()=>{
            console.log('callback value',this.state.count)
        })
        console.log('click value',this.state.count)
    }
    btnClickArrow = () => {
        this.setState((prev, props)=>({
            count:prev.count+1
        }),()=>{
            console.log('arrow callback value',this.state.count)
        })
    }
    render() {
        return (
            <div>
                <p>welcome  props {this.props.name} </p>
                <p>welcome  state {this.state.name} count {this.state.count} </p>
                <button onClick={this.btnClick.bind(this)} >click</button>
                <button onClick={this.btnClickArrow} >arrow click</button>
            </div>
        )
    }
}

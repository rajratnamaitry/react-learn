import React, { Component } from 'react'
/** 
 * state 
 *  with call back fun
 * */ 
export default class MessageClass extends Component {
    constructor() {
        super()
        this.state = {
            name: 'state',
            count: 0
        }
    }
    btnClick(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log('callback value',this.state.count)
        // })
        /** output
        * click value 0
        * click value 0
        * click value 0
        * callback value 1
        */
        this.setState((prev, props)=>({
            count:prev.count+1
        }),()=>{
            console.log('callback value',this.state.count)
        })
        /** output
        * click value 0
        * click value 0
        * click value 0
        * callback value 3
        */
        console.log('click value',this.state.count)
    }
    increament(){
        this.btnClick();
        this.btnClick();
        this.btnClick();
    }
    render() {
        return (
            <div>
                <p>welcome  props {this.props.name} </p>
                <p>welcome  state {this.state.name} count {this.state.count} </p>
                <button onClick={()=>this.increament()} >click</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'raj'
        }
        console.log('A','con')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('A','getDerivedStateFromProps')
        return null;
    }
    shouldComponentUpdate(){
        console.log('A','shouldComponentUpdate')
         return true;
    }
    btnClick = ()=>{
        this.setState({
            name:'raj3'
        })
    }
    render() {
        console.log('A','render')
        return (
            <div>LifeCycleA
                <button onClick={this.btnClick} >click</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
    componentDidMount() {
        console.log('A','componentDidMount')
    }
    getSnapshotBeforeUpdate(prevProps, nextProps){
        console.log('A','getSnapshotBeforeUpdate')           
    }
    componentDidUpdate(){
        console.log('A','componentDidUpdate')
    }
}

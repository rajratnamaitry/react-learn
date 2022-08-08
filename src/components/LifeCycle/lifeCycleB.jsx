import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'B'
        }
        console.log('B','constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('B','getDerivedStateFromProps')
        return null;
    }
    shouldComponentUpdate(){
        console.log('B','shouldComponentUpdate')
        return true
    }
    render() {
        console.log('B','render')
        return (
            <div>LifeCycleB</div>
        )
    }
    componentDidMount() {
        console.log('B','componentDidMount')
    }
    getSnapshotBeforeUpdate(prevProps,nextProps){
        console.log('B','getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('B','componentDidUpdate')
    }
}

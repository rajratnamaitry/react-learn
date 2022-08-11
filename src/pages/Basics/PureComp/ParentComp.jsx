import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'parent'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'parent set'
            })
        }, 2000);
    }
    render() {
        console.log('******************8parent comp*******************')
        return (
            <>
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <div>ParentComp</div>
            </>
        )
    }
}

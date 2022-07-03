import React, { Component, PureComponent } from 'react'
import PureComp from './pureComp';
import RegComp from './regComp';

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
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <div>ParentComp</div>
            </>
        )
    }
}

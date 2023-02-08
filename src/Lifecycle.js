import React, { Component } from "react";

class Life extends Component {
    constructor(props) {
        super(props);
        console.log('1-constructor')
        this.state = { name: 'vikas' }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2-getDerivedStateFromProps');
        if (state.name === 'Rone') {
            return {
                name: 'Milhouse'
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('x-shouldComponentUpdate');
        if (nextState.name === 'vikas') {
            return false
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('x-getSnapshotBeforeUpdate');
        let name = prevState;
        return name;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("x-componentDidUpdate");
        //console.log(prevState);
        //console.log(this.state);
        console.log(snapshot);
    }
    componentDidMount() {
        console.log('4-componentDidMount');
    }
    componentWillUnmount() {
        console.log('x-componentWillUnmount');
    }

    render() {
        console.log('3-render');
        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'Rone' })} >Change Name</button>
            </>
        )
    }
}
export default Life

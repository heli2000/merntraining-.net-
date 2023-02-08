import React from "react";
import { Navigate } from "react-router-dom";
import Child from "./Child";

export class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford", model: "Mustang", color: "red", year: 1964
        };
    }
    changeColor = () => {
        this.setState({ color: "blue" })
    }
    getNameFromChild = (name) =>{
        console.log(name);
    }
    render() {

        return (
            <div>
                {JSON.stringify(this.props)}
                <button type="button" onClick={this.changeColor} >Change 	c				olor</button>
                <Child getname={(name)=>this.getNameFromChild(name)} name={this.props.name}>
                    <h1>pass to child</h1>
                    <h1>pass to child</h1>
                    <h1>pass to child</h1>
                    <h1>pass to child</h1>
                </Child>
            </div>

        );
    }
}

import { Component } from "react";

class Resume extends Component{
    render(){
        const {name} = this.props; //better to make constructor and stuff
        return <h1>This is a class component {name}</h1>
    }
}

export default Resume;
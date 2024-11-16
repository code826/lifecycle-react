import { Component } from "react";
import Test from "./Test";

class TestParent extends Component{
    constructor(){
        super();
        console.log("TestParent constructor");
        this.state={
            rollNo:1
        }
        
    }
    static getDerivedStateFromProps(props,state){
        console.log("TestParent getDerivedStateFromProps");
        // if(props.rollNo != state.rollNo){
        //     return {rollNo:props.rollNo}
        // }
        return null;
        
    }

    componentDidMount = () =>{
        console.log("TestParent component did mount");
        // fetch("https://jsonplaceholder.typicode.com/users/1")
        // .then(resp => resp.json())
        // .then(data => {console.log('data',data);
        //     this.setState({
        //         rollNo:data.id
        //     });
        // })
    }

    render(){
        console.log("TestParent Render");
        return (
            <Test/>
        )
    }
}

export default TestParent;
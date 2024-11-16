import { Component } from "react";

class Test extends Component{
    constructor(){
        super();
        console.log("Test constructor");
        this.state={
            rollNo:0
        }
        
    }
    static getDerivedStateFromProps(props,state){
        console.log("Test getDerivedStateFromProps");
        // if(props.rollNo != state.rollNo){
        //     return {rollNo:props.rollNo}
        // }
        return null;
        
    }
    shouldComponentUpdate = (nextProps,nextState) =>{
        console.log("Test shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate = (prevProps,prevState) =>{
        console.log("Test getSnapshotBeforeUpdate");
        return {newVal:prevState.rollNo+10};
    }

    componentDidMount = () =>{
        console.log("Test component did mount");
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(resp => resp.json())
        .then(data => {console.log('data',data);
            this.setState({
                rollNo:data.id
            });
        })
    }
    componentDidUpdate = (prevProps,prevState,snapshpt) =>{
        console.log("Test componentDidUpdate");
        console.log(prevProps,prevState,snapshpt);
    }

    render(){
        console.log("Test Render");
        return (
            <h1> My roll no is {this.state.rollNo}</h1>
        )
    }
}

export default Test;

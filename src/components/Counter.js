import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        console.log("Counter constructor");
        this.state={
            counter:0
        }
        
    }
    static getDerivedStateFromProps(props,state){
        console.log("Counter getDerivedStateFromProps");
    
        return null;
        
    }
    shouldComponentUpdate = (nextProps,nextState) =>{
        console.log("Counter shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate = (prevProps,prevState) =>{
        console.log("Counter getSnapshotBeforeUpdate");
        return {newVal:prevState.rollNo+10};
    }

    componentDidMount = () =>{
        console.log("Counter component did mount");
      //  this.forceUpdate();
        // fetch("https://jsonplaceholder.typicode.com/users/1")
        // .then(resp => resp.json())
        // .then(data => {console.log('data',data);
        //     this.setState({
        //         rollNo:data.id
        //     });
        // })
    }
    componentDidUpdate = (prevProps,prevState,snapshpt) =>{
        console.log("Counter componentDidUpdate");

    }
    componentWillUnmount = () =>{
        console.log("Counter componentWillUnmount")
    }

    render(){
        throw new Error('Counter Error');
        console.log("Counter Render");
        return (
            <>
            <h1>Counter is {this.state.counter}</h1>
            <button onClick={() =>{
                this.setState({
                    counter:this.state.counter+1
                })
            }}>Increase Value</button>
            </>
            
        )
    }
}

export default Counter;
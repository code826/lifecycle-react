import { Component } from "react";

class Timer extends Component{
    constructor(props){
        super(props);
        let date = new Date();
        this.state = {
            time:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            interval_id:null,
            status:0
        }
    }
    componentDidMount = () =>{
        //
        console.log("Component Did Mount");
        fetch("https://jsonplaceholder.typicode.com/user/1")
        .then(resp => resp.json())
        .then(data => {console.log('data',data);
            throw new Error("unexpected");
        })
    }
    shouldComponentUpdate = (newProps,newState) =>{
        if(this.state.time != newState.time){
            let sec = Number(newState.time.split(":")[2]);
                if(sec %4 == 0){
                    return true;
                }else{
                    return false;
                }
        }
        return true;
        //based on second 
        //if seconds is 0,4,8,12,--> show it 
        //for othr i will not
    }
    componentDidUpdate = (prevProps,prevState) =>{
            console.log('Component Updated !!');
            if(this.state.status != prevState.status){
                console.log('Component Updated inside !!');
                if(this.state.status == 1){
                    let id =  setInterval(() =>{
                        console.log('inside interval');
                        const date = new Date();
                        const hours = date.getHours();
                        const min = date.getMinutes();
                        const sec = date.getSeconds();
                        this.setState({
                            time:`${hours}:${min}:${sec}`
                        });
                    },1000);
                    console.log('id',id);
                    this.setState({
                        interval_id:id
                    })
                }else{
                    clearInterval(this.state.interval_id);
                    this.setState({
                        interval_id:null
                    })
                }
            }
           
    }
    componentWillUnmount(){
        console.log('component is unmounting');
        clearInterval(this.state.interval_id);

    }
    render(){
        return (
           <div id="timer-container">
                <span className="timer-header">Timer</span> : <span className="time">{this.state.time}</span>
                <br/>
                <button onClick={() =>{
                    this.setState({
                        status:1
                    })
                }}>Start </button>
                <button onClick={() =>{
                    this.setState({
                        status:0
                    })
                }}>Stop</button>
           </div>
        )
    }
}
export default Timer;
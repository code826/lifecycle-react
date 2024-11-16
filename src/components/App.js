import { Component } from "react";
// import Test from "./Test";
// import TestParent from "./TestParent";
// import Counter from "./Counter";
import Timer from "./Timer";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
import Test from "./Test";
import CircularMenu from "./CircularMenu";


class App extends Component{
  constructor(){
    super();
    this.state = {
      isPresent:true
    }
  }

  render(){
    return (
      <>
      {/* <button onClick={() =>{
        this.setState({
          isPresent:!this.state.isPresent
        })
      }}>{this.state.isPresent?"Remove Component":"Show Compnent"}</button>
      {this.state.isPresent && <Timer/>} */}
      {/* <ErrorBoundary>
        <Counter/>
      
      </ErrorBoundary>

      <ErrorBoundary>
        <Test/>
      
      </ErrorBoundary>
       */}
      <CircularMenu/>
      </>
      
    )
  }
}
export default App;

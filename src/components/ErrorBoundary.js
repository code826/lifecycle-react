import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state= {
            isError:false,
            error:""
        }
    }
    static getDerivedStateFromError(err){
        console.log('state changed');
        return {isError:true,error:err}
    }
    componentDidCatch = (err,info)=>{
        console.log('err',err,'info',info);
    }
    render(){
        console.log('error',this.state);
        if(this.state.isError){
            return (
                <h1>Error Ocuurs Contact To Admin</h1>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary;
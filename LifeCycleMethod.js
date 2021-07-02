import React, { Component } from 'react'

 class LifeCycleMethod extends Component {
   constructor() {
       super()
    console.log("constructor called");
    this.state = {
        count :0 
    }
   }
   componentDidUpdate(){
       console.log("componentDidUpdate");
   }
   shouldComponentUpdate(){
    console.log("ShouldCompomemtUpdate",this.state.count);
    if(this.state.count < 5)
       return true;
   }
    
   componentDidMount() {
       console.log("componenetDidMount called")
   }
   
    render() {
      console.log("render called")
        return (
            <div>
                <h1>LifeCycle {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
            </div>
        )
    }
}

export default LifeCycleMethod;

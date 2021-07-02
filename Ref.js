// ! ref: it directly change the DOM like color,background,get attr value or property
// ! but according to react we shouldn't change DOM so
// ! we should use Ref mimimum when its emergency
// ! for form validation we have to get input form like for focus,blue the input filed
import React, { Component,createRef } from 'react'
export class Ref extends Component {
 constructor(props) {
     super(props)
     this.inputRef = createRef();

 }
 componentDidMount(){
     console.log(this.inputRef.current.value="Rajesh");
     this.inputRef.current.style.color ='red'
     this.inputRef.current.style.fontSize = '2rem'

    }
getVal(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.backgroundColor ="yellow"
} 
    render() {
        return (
        <div>
            <h1>Ref</h1>
            <input type="text" ref={this.inputRef}  />  
            <button onClick={()=>this.getVal()}>Check</button>     
        </div>
        )
    }
}

export default Ref;

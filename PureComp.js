//! pure comp : it stops the re-rendering of the comoponent 
//! it will check whether is there any change happend or not so it
//! will render the comoponent when there is any updation happens

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    // shouldComponentUpdate(){
        render() {
            console.log("render")
        return (
            <div>
                <h1>{this.state.count}</h1>
               <button onClick={()=>this.setState({count:1})}>Update Pure</button>
            </div>
        )
    }
}

export default PureComp;
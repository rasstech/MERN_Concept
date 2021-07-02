import React from 'react'

function PassFunction(props) {
    let name = "Rajesh";
    return (
        <div>
        <h1>Passing function </h1>
        <button onClick={()=>props.data(name)}>click on me</button>         
        </div>
    )
}

export default PassFunction

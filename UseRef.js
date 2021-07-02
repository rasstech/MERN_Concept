import React,{useRef} from 'react'

function UseRef() {
    let inputref = useRef(null);
    const handleInput = () =>{
        inputref.current.value ="Rajesh"
        inputref.current.focus()

    }
    return (
        <div>
            <h1> Use Ref </h1>
            <input type="text" ref={ inputref }/ >
            <button onClick={handleInput}>Click</button>
        </div>
    )
}

export default UseRef

import React,{useState} from 'react'

 const HOC = () => {
     const [count, setcount] = useState(0)
    return (
        <div>
            <h1>HOC</h1>
             <h1>{count}</h1>
            <button onClick={setcount(count+1)}>update</button>
        </div>
    )
}

export default HOC;
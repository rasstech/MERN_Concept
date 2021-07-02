import React,{useState} from 'react'

function Hide_show() {
   const [print, setprint] = useState(true)
   
    return (
        <div>{
            print?<h1> hello there </h1>: null
        }
            
            <button onClick={()=>setprint(false)}>Hide</button>
            <button onClick={()=>setprint(true)}>Show</button>
            <button onClick={()=>setprint(!print)}>Toggle</button>
        </div>
    )
}

export default Hide_show

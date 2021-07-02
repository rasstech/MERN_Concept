import React,{useEffect,useState} from 'react'
import style from './Custom.module.css'
function UseeffectHook() {
    const [count, setcount] = useState(0)
    const [Dcount, setDcount] = useState(10)
useEffect(() => {
  alert("hey there")
}, [count,Dcount])

    return (
        <div>
        <h1 className={style.success}>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Count UseeffectHook</button>
            <h1>{Dcount}</h1>
            <button onClick={()=>setDcount(Dcount+1)}>Data UseeffectHook</button>
        </div>
    )
}

export default UseeffectHook

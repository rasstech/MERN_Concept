//! its also use for enhance the performancemonce
//! same like Pure Comp
import React,{useState,useMemo} from 'react'

function UseMemo() {
    const [count, setcount] = useState(0);
    const [item, setitem] = useState(10);
    const multicountMemo = useMemo(  function multicount (){
        console.log("mutlicount called");
        return count * 5
    },[count])

    return (
        <div>
            <h1>Memo</h1>
            <h2>Count : {count}</h2>
            <h2>item : {item}</h2>
             <h2>{multicountMemo}</h2>
            <button onClick={()=>setcount(count+1)}>update count</button>
            <button onClick={()=>setitem(item * 10)}>update item</button>
            
        </div>
    )
}

export default UseMemo

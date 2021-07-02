import React,{useReducer} from 'react'

const initialState = 0;

const reducer = (state,action) =>{
    console.log(state,action);
    if(action.type ==="INCREMENT"){
        return state + 1
    }else if(action.type ==="DECREMENT"){
        return state - 1
    }
  return state;
}

const UseReducer = () => {

const [state, dispatch] =   useReducer(reducer,initialState)
    return (
        <div>
            <h1>Reducer Hook </h1>
            <p>{state}</p>
            <button onClick={() =>dispatch({type:"INCREMENT"})}>INC</button>
            <button onClick={() =>dispatch({type:"DECREMENT"})}>DEC</button>
        
     </div>
    )
}

export default UseReducer;

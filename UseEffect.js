// import React,{useEffect,useState} from 'react'

// const UseEffect = () => {
//     const [widthCount, setwidthCount] = useState(window.screen.width);

//    const actualWidth = ()=>{
//        console.log(window.innerWidth);
//        setwidthCount(window.innerWidth);
//    }

//     useEffect(() => {
//       window.addEventListener("resize",actualWidth);
//     })

//     return (
//         <>
//             <h1>Window width</h1>
//             <h2>{widthCount}px</h2>
//         </>
//     )
// }

// export default UseEffect

//! API CAll

import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [users, setusers] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    setusers(await response.json());
    // console.log(await response.json());
  };
 const [count, setcount] = useState(0)

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>API calls</h1>
        <h1>{count}</h1>
        <button onClick={() =>setcount(count+1)}>Click for upadate count</button>
 <table>
 {
   users.map((user) =>
        <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        
        </tr>
   )
 }
 
 </table>
    </>
  );
};

export default UseEffect;

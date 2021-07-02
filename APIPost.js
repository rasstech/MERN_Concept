import React,{useState,useEffect} from 'react'
import axios from 'axios'
const APIPost = () => {
    const [posts, setPosts] = useState([])

   const handler = e =>{
        setPosts(...posts,{[e.target.name]: e.target.value});     
     }
     

   const submitform = e =>{
        e.preventDefault();
        console.log(e)  
        axios.post('https://jsonplaceholder.typicode.com/posts',posts)
        .then(response => {
            console.log(response)
            setPosts(response.data)
        }).catch(error =>console.log(error))
     }

    useEffect(() => {
      submitform()
    }, [])

    return (
    <div>   
        <form onSubmit={submitform}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={handler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handler}
          />
        </div>
        <div>
          <input 
          type="text" 
          name="body" 
          value={body} 
          onChange={handler} />
        </div>
    <button onClick={submitform}>Submit</button>
        </form>
  </div>
    )
}

export default APIPost

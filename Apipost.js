import React, { Component } from "react";
import axios from 'axios'
export class Apipost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "", 
    };
  }
 handler = e =>{
    this.setState({[e.target.name]: e.target.value});     
 }
 submitform = e =>{
    e.preventDefault();
    console.log(this.state)  
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response => {
        console.log(response)
    }).catch(error =>console.log(error))   
 }
  render() {
    const { userId, title, body } = this.state;
    return (
      <>
      <form onSubmit={this.submitform}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handler}
          />
        </div>
        <div>
          <input 
          type="text" 
          name="body" 
          value={body} 
          onChange={this.handler} />
        </div>
    <button onClick={this.submitform}>Submit</button>
        </form>
      </>
    );
  }
}

export default Apipost;

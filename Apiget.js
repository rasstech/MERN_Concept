import React, { Component } from 'react'
import axios from 'axios'

export class Api extends Component {
  constructor(props) {
      super(props)

      this.state = {
           posts:[]
      }
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          console.log(response)
          this.setState({posts:response.data})
      }).catch(error =>console.log(error))
  }
    render() {
            const {posts}  = this.state
        return (
            <div>
                {
                    posts.map(item => <div key={item.id}>{item.title}</div>
                    )
                }
            </div>
        )
    }
}

export default Api

import './App.css';
import React from 'react';
import axios from 'axios';
import User from './user'

class App extends React.Component {
  state = {
    users: []
  }
   
  data = Array.from(this.state.users);

  componentDidMount() {
    axios.get("https://api.github.com/users/ACarrill42")
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state,
        users: res.data        
      })
    })
    .catch(err => {
      console.log("Unable to fetch User",err)
    })

    axios.get("https://api.github.com/users/ACarrill42/followers")
    .then(res => {
      console.log("fetch data", res)
      this.setState({
        ...this.state, 
        users: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return(
      <div className = 'app'>
        <h1>Github User:</h1>
        <User users ={this.state.users}/>
      </div>  
    )
  }
}
export default App;

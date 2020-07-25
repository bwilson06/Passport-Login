import React, { Component } from "react";
import axios from 'axios'
import Alert from './Alert'

class Login extends Component {
  state = {
    email: "",
    password: "",
    visible: true
  };
handleEmail = (event) => { 
    this.setState({ email: event })
}

handlePassword = (event) => {
    this.setState({ password: event })
}

myFunction = (e) => {
    e.preventDefault()
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/login', newUser).then(response => {
      console.log(response)
    }).catch( error => {
      console.log(error)
    })
    console.log(`Email: ${this.state.email}\nPassword: ${this.state.password}`)

}

toggle = () => {
  this.setState({
    visible: ! this.state.visible
  })
}
  render() {
    
    return (
      <div>
        <form>
          <input type="email" 
          name="email"
          value={this.state.email}
          placeholder="email" 
          id="user_email"
          onChange={(e) => this.handleEmail(e.target.value)}>
          </input>

          <input type="password" 
          placeholder="password" 
          value={this.state.password}
          name="password"
          id="user_password"
          onChange={(e) => this.handlePassword(e.target.value)}>
          </input>

          <button type="submit" onClick={this.myFunction}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

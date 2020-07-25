import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
handleEmail = (event) => { 
    this.setState({ email: event })
}

handlePassword = (event) => {
    this.setState({ password: event })
}

myFunction = (e) => {
    e.preventDefault()
    console.log(`Email: ${this.state.email}\nPassword: ${this.state.password}`)
}
  render() {
    return (
      <div>
        <form>
          <input type="email" 
          placeholder="email" 
          id="user_email"
          onChange={(e) => this.handleEmail(e.target.value)}>
          </input>

          <input type="password" 
          placeholder="password" 
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

import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })

  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password){
      this.props.onSubmit(this.state)}
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUsername(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassword(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

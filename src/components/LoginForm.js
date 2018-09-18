import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUserChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.username && this.state.password) {
      return this.props.onSubmit(this.state)
    }
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
    // console.log(this.state)
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
    // console.log(this.props)
  }
}

export default LoginForm;

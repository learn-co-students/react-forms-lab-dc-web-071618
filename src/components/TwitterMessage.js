import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      message: ""
    };
    console.log(this.state.maxChars)
  }

  counter = (e) => {
    const newMessage = e.target.value
    this.setState({
      maxChars: 140 - newMessage.length,
      message: newMessage
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.counter} value={this.state.message}></input>
        <p>Characters left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

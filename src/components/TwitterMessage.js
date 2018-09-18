import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  updateMessage = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateMessage} value={this.state.value}/>
        <button>{this.props.maxChars - this.state.value.length}</button>
      </div>
    );
  }
}

export default TwitterMessage;

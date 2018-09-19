import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {tweet: ""};
  }

  handleEvent = event => {
    this.setState({tweet: event.target.value})
  }

  charCounter = () => {
    return(this.props.maxChars - this.state.tweet.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={event => this.handleEvent(event)}/>
        <p>Letters Left: {this.charCounter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;

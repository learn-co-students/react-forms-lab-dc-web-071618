import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.inputLength}
          onChange={event => this.handleChange(event)}
        />
        <p>{this.props.maxChars - this.state.inputValue.split("").length}</p>
      </div>
    );
  }
}

export default TwitterMessage;

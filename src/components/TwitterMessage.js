import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      count: 0
    };
  }

  handleChange = (event) => {
    //event.target.value is the input typed
    //event.target.value.length is the count of how many characters were typed
    // debugger
    this.setState({
      message: event.target.value,
      count: event.target.value.length,

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} count={this.state.count}/>
        <div>Characters left: {this.props.maxChars - this.state.count}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;

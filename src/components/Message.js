import { Component } from "react";

class Message extends Component {
  // every class component must have render() in React
  render() {
    return (
      <h1>
        This is a class component and {this.props.messageContent} Message
        Number: {this.props.messageCode}
      </h1>
    );
  }
}

export default Message;

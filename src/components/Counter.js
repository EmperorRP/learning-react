import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.decrement = this.decrement.bind(this); // way to bind the onlcick event
  }

  increment() {
    console.log(this);
    // this.state.counter = 1; This will not work because we need to use a setState method instead
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // decrement() {
  //   console.log(this);
  //   this.setState({
  //     counter: this.state.counter - 1,
  //   });
  // }
  
  // Another method for event handling
  decrement = () => {
    console.log(this);
    this.setState({
        counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter} </h3>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default Counter;

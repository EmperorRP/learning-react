import { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      firstname: event.target.value,
    });
    console.log(this.state.firstname);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
    console.log(this.state.lastname);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log({ fname: this.state.firstname, lname: this.state.lastname });
    // this.setState;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstname}
          ></input>

          <input
            value={this.state.lastname}
            type="text"
            onChange={this.handleLastNameChange}
          ></input>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

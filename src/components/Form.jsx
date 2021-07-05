import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  // userNameInput = React.createRef();
  state = {
    userName: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onAdd(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          type='text'
          value={this.state.userName}
          // ref={this.userNameInput}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder='Github username...'
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;

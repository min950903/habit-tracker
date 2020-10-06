import React, { Component } from "react";

class InputField extends Component {
  state = {
    inputValue: "",
  };

  onAddHabbit = () => {
    this.props.onAddHabbit(this.state.inputValue);
    const inputValue = "";
    this.setState({ inputValue });
  };

  onHabitChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        <input placeholder="habit" name="habit" onChange={this.onHabitChange} />
        <button className="habit-button" onClick={this.onAddHabbit}>
          Add
        </button>
      </>
    );
  }
}

export default InputField;

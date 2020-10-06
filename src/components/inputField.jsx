import React, { PureComponent } from "react";

class InputField extends PureComponent {
  inputRef = React.createRef();

  onAddHabbit = (event) => {
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAddHabbit(this.inputRef.current.value);

    this.inputRef.current.value = "";
  };

  render() {
    console.log("input field");
    return (
      <form className="add-form" onSubmit={this.onAddHabbit}>
        <input
          type="text"
          className="add-input"
          name="habit"
          ref={this.inputRef}
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default InputField;

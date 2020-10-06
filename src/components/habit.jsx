import React, { Component } from "react";

class Habbit extends Component {
  habitIncrement = () => {
    this.props.onHabitIncrement(this.props.habit);
  };

  habitDecrement = () => {
    this.props.onHabitDecrement(this.props.habit);
  };

  habitDelete = () => {
    this.props.onHabitDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.habitIncrement}
        >
          <i className="fas fa-plus-square" />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.habitDecrement}
        >
          <i className="fas fa-minus-square" />
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.habitDelete}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

export default Habbit;

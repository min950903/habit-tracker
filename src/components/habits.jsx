import React, { Component } from "react";
import Habit from "./habit";
import InputField from "./inputField";

class Habits extends Component {
  onHabitIncrement = (habit) => {
    this.props.onHabitIncrement(habit);
  };

  onHabitDecrement = (habit) => {
    this.props.onHabitDecrement(habit);
  };

  onHabitDelete = (habit) => {
    this.props.onHabitDelete(habit);
  };

  onAddHabbit = (name) => {
    this.props.onAddHabbit(name);
  };

  onResetAll = () => {
    this.props.onResetAll();
  };

  render() {
    return (
      <>
        <InputField onAddHabbit={this.onAddHabbit} /> <br />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onHabitIncrement={this.onHabitIncrement}
              onHabitDecrement={this.onHabitDecrement}
              onHabitDelete={this.onHabitDelete}
            />
          ))}
        </ul>
        <button className="habit-button" onClick={this.onResetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;

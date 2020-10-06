import React, { Component } from "react";
import Habit from "./habit";
import InputField from "./inputField";

class Habits extends Component {
  render() {
    console.log("habits");
    return (
      <>
        <InputField onAddHabbit={this.props.onAddHabbit} /> <br />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onHabitIncrement={this.props.onHabitIncrement}
              onHabitDecrement={this.props.onHabitDecrement}
              onHabitDelete={this.props.onHabitDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onResetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;

import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Sleeping", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    navCount: 0,
  };

  onHabitIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);

    habits[idx].count++;
    this.setState({ habits });
  };

  onHabitDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);

    habits[idx].count = habits[idx].count <= 0 ? 0 : habits[idx].count - 1;
    this.setState(habits);
  };

  onHabitDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  onAddHabbit = (name) => {
    const habits = [...this.state.habits];
    habits.push({ id: habits.length + 1, name: name, count: 0 });
    this.setState({ habits });
  };

  onResetAll = () => {
    const habits = [...this.state.habits];
    const resetHabits = habits.map((habit) => (habit.count = 0));
    this.setState({ habtis: resetHabits });
    this.setState({ navCount: 0 });
  };

  render() {
    return (
      <>
        <NavBar
          navCount={this.state.habits.filter((habit) => habit.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onHabitIncrement={this.onHabitIncrement}
          onHabitDecrement={this.onHabitDecrement}
          onHabitDelete={this.onHabitDelete}
          onAddHabbit={this.onAddHabbit}
          onResetAll={this.onResetAll}
        />
      </>
    );
  }
}

export default App;

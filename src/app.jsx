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
  };

  onHabitIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 };
      }

      return item;
    });

    this.setState({ habits });
  };

  onHabitDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...item, count: count <= 0 ? 0 : count };
      }

      return item;
    });

    this.setState({ habits });
  };

  onHabitDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  onAddHabbit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  onResetAll = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }

      return habit;
    });

    this.setState({ habits });
  };

  render() {
    console.log("app");
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

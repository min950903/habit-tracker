import React from "react";
import { memo } from "react";

const Habit = memo((props) => {
  const { name, count } = props.habit;

  const habitIncrement = () => {
    props.onHabitIncrement(props.habit);
  };

  const habitDecrement = () => {
    props.onHabitDecrement(props.habit);
  };

  const habitDelete = () => {
    props.onHabitDelete(props.habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={habitIncrement}>
        <i className="fas fa-plus-square" />
      </button>
      <button className="habit-button habit-decrease" onClick={habitDecrement}>
        <i className="fas fa-minus-square" />
      </button>
      <button className="habit-button habit-delete" onClick={habitDelete}>
        <i className="fas fa-trash" />
      </button>
    </li>
  );
});

export default Habit;

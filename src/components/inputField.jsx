import React from "react";
import { memo } from "react";

const InputField = memo((props) => {
  const inputRef = React.createRef();

  const onAddHabbit = (event) => {
    event.preventDefault();

    const name = inputRef.current.value;
    name && props.onAddHabbit(inputRef.current.value);

    inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onAddHabbit}>
      <input
        type="text"
        className="add-input"
        name="habit"
        ref={inputRef}
        placeholder="habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default InputField;

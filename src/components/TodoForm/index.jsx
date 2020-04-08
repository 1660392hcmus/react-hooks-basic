import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
  onSubmit: null
};

function TodoForm(props) {
  //   const [todo, setTodo] = useState("");

  //   const handleChange = event => {
  //     setTodo(event.target.value);
  //   };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     console.log(todo);
  //     setTodo("");
  //   };

  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value
    };
    onSubmit(formValue);
    setValue(""); //reset form wwhen submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
      <input type="submit"></input>
    </form>
  );
}

export default TodoForm;

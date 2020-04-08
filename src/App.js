import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "todo oneeeeeee" },
    { id: 2, title: "todo twooooooo" },
    { id: 3, title: "todo threeeeee" }
  ]);

  function handleTodoFormSubmit(formValue) {
    console.log(formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>hello</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
    </div>
  );
}

export default App;

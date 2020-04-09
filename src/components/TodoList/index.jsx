import React, { useState } from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  //các props trong component
  todos: PropTypes.array, //phím tắt pta, mảng arr các todo trong todo list
  onTodoClick: PropTypes.func //phím tắt ptf //onclick to handle, cụ thể là remove
};

TodoList.defaultProp = {
  //tạo các giá trị mặc định ban đầu
  todos: [], //ở đây là rỗng nếu k có todo nào đc khởi tạo, tùy vào props truyền vào bên App.js
  onTodoClick: null
};

function TodoList(props) {
  //hàm component chính
  const { todos, onTodoClick } = props; //các props trong component

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo); //truyền props qua thằng cha là App.js để xử lý
    }
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "todo oneeeeeee" },
    { id: 2, title: "todo twooooooo" },
    { id: 3, title: "todo threeeeee" }
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const respone = await fetch(requestUrl);
        const responeJSON = await respone.json();
        console.log({ responeJSON });

        const { data } = responeJSON;
        setPostList(data);
      } catch (error) {
        console.log("Fail to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, []);
  // [] dependencies rỗng => chạy 1 lần lúc unmount

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

      <PostList posts={postList} />
    </div>
  );
}

export default App;

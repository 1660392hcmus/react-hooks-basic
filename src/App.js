import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import { filter } from "minimatch";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "todo oneeeeeee" },
    { id: 2, title: "todo twooooooo" },
    { id: 3, title: "todo threeeeee" }
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        //_limit=10&_page=3
        const paramsString = queryString.stringify(filters); //object => string
        console.log("param: ", paramsString);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const respone = await fetch(requestUrl);
        const responeJSON = await respone.json();
        console.log({ responeJSON });

        const { data, pagination } = responeJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fail to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, [filters]);
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

  function handlePageChange(newPage) {
    console.log(("New page: ", newPage));
    setFilters({
      ...filter,
      _page: newPage
    });
  }

  return (
    <div className="app">
      <h1>hello</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>

      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;

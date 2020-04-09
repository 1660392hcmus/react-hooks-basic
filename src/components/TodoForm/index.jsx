import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func //khai báo props type xài trong component
};

TodoForm.defaultProps = {
  onSubmit: null // khởi tạo giá trị mặc định cho props
};

function TodoForm(props) {
  //hàm component chính
  //   const [todo, setTodo] = useState("");

  //   const handleChange = event => {
  //     setTodo(event.target.value);
  //   };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     console.log(todo);
  //     setTodo("");
  //   };

  const { onSubmit } = props; //khai báo props xài trong component
  const [value, setValue] = useState(""); //value của ô input, ở đây khởi tạo giá trị ban đầu là rỗng

  const handleValueChange = event => {
    console.log(event.target.value); //lấy giá trị trong ô input
    setValue(event.target.value); //set value thành giá trị đã nhập
  };

  const handleSubmit = event => {
    event.preventDefault(); //ngăn reload lại trang khi bấm submit
    if (!onSubmit) return;
    const formValue = {
      title: value
    };
    onSubmit(formValue);
    setValue(""); //reset form wwhen submit
  }; //truyền props onSubmit với giá trị là onSubmit(formValue) qua thằng cha là App.js

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
      <input type="submit"></input>
    </form>
  );
}

export default TodoForm;

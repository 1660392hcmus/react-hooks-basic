import React, { useState } from "react"; //rsfp Creates a stateless React component as a named function with PropTypes (Reactjs code snippets)
import "./ColorBox.scss";

ColorBox.propTypes = {}; // khong co props nao

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"]; //arr list
  const randomColor = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]; // random COLOR_LIST[random id]
  return randomColor; // return one random color
}

function ColorBox(props) {
  //hàm component chính
  const [color, setColor] = useState(() => {
    //state color, hàm callback để gọi màu trong local storage
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  }); //khai bao state

  function handleBoxClick() {
    //handle onClick
    const newColor = getRandomColor(); //goi ham random color
    setColor(newColor); //set color trong state thanh mau color vừa chọn
    localStorage.setItem("box_color", newColor); //lưu vào local storage để khi reload lại trình duyệt thì vẫn giữ đc màu mới đổi
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;

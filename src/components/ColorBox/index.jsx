import React, { useState } from "react"; //rsfp Creates a stateless React component as a named function with PropTypes (Reactjs code snippets)
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomColor = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
  return randomColor;
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  }); //khai bao state

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
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

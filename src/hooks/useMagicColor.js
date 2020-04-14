import React, { useState, useEffect, useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"]; //arr list
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3); // random COLOR_LIST[random id]
  }
  console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex]; // return one random color
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  //change color every 1s

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      // clean up
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;

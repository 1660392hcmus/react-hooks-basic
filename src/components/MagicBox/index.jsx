import React from "react";
import "./MagicBox.scss";

import useMagicColor from "../../hooks/useMagicColor";

function MagicColor() {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicColor;

import React, { useState } from "react";
import "../style/Pixel.css";

function Pixel({ selectedColor }) {
  const [Color, setColor] = useState("white");
  const [oldColor, setOldColor] = useState(Color);

  function changeColor() {
    setColor(selectedColor);
    setOldColor(selectedColor);
  }
  function onHoverEnter() {
    setOldColor(Color);
    setColor(selectedColor);
  }
  function onHoverExit() {
    setColor(oldColor);
  }

  return (
    <div
      className="Pixel"
      onClick={changeColor}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverExit}
      style={{ background: Color }}
    ></div>
  );
}

export default Pixel;

import React, { useRef } from "react";

import "../style/DrawingPannel.css";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";

function DrawPannel({ width, height, selectedColor }) {
  let pixHeight = [];
  const imgRef = useRef();

  for (let j = 0; j < height; j++) {
    pixHeight.push(<Row val={width} key={j} selectedColor={selectedColor} />);
  }
  return (
    <div className="DrawPannel_Container">
      <div className="DrawPannel" ref={imgRef}>
        {pixHeight}
      </div>
      <button
        onClick={() => exportComponentAsPNG(imgRef)}
        className="Export_Button"
      >
        Export PNG
      </button>
    </div>
  );
}

export default DrawPannel;

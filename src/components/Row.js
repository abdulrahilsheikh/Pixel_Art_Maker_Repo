import React from "react";
import Pixel from "./Pixel";

function Row({ val, selectedColor }) {
  let pixRow = [];
  console.log(val);
  for (let i = 0; i < val; i++) {
    pixRow.push(<Pixel key={i} selectedColor={selectedColor} />);
  }
  return <div className="row">{pixRow}</div>;
}

export default Row;

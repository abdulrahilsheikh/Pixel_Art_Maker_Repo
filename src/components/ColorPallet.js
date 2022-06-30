import React, { useState } from "react";
import "../style/ColorPallet.css";

function ColorPallet(props) {
  const [colors, setcolors] = useState("red");
  props.update(colors);
  const colorList = [
    "#8ecae6",
    "#219ebc",
    "#023047",
    "#14213d",
    "#0096c7",
    "#005f73",
    "#f77f00",
    "#fcbf49",
    "#d90429",
    "#edf2f4",
    "#ee9b00",
    "#f08080",
    "#f4978e",
    "#f8ad9d",
    "#f72585ff",
    "#b5179eff",
    "#7209b7ff",
    "#560badff",
    "#480ca8ff",
    "#3a0ca3ff",
    "#3f37c9ff",
    "#4361eeff",
    "#4895efff",
    "#4cc9f0ff",
    "#03071eff",
    "#370617ff",
    "#6a040fff",
    "#9d0208ff",
    "#d00000ff",
    "#dc2f02ff",
    "#e85d04ff",
    "#f48c06ff",
    "#faa307ff",
    "#ffba08ff",
    "#ff595eff",
    "#ffca3aff",
    "#8ac926ff",
    "#1982c4ff",
    "#6a4c93ff",
    "#000814ff",
    "#001d3dff",
    "#003566ff",
    "#ffc300ff",
    "#ffd60aff",
    "#007f5fff",
    "#2b9348ff",
    "#55a630ff",
    "#80b918ff",
    "#aacc00ff",
    "#bfd200ff",
    "#d4d700ff",
    "#dddf00ff",
    "#eeef20ff",
    "#ffff3fff",
    "#590d22ff",
    "#800f2fff",
    "#a4133cff",
    "#c9184aff",
    "#ff4d6dff",
    "#ff758fff",
    "#ff8fa3ff",
    "#ffb3c1ff",
    "#ffccd5ff",
    "#fff0f3ff",
    "#ffbc42ff",
    "#d81159ff",
    "#8f2d56ff",
    "#218380ff",
    "#73d2deff",
  ];
  const listButtonRow = colorList.map((color, index) => (
    <span
      key={index}
      className="Color_Pallet_Button"
      onClick={() => setcolors(color)}
      style={{ backgroundColor: color }}
    ></span>
  ));

  return (
    <div className="Color_Pallet">
      <h2 style={{ color: "#ffd500" }}>ColorPallet</h2>
      <h4
        className="Current_Color"
        style={{ backgroundColor: colors, color: "#ffd500", fontStyle: "bold" }}
      >
        Current Color
      </h4>

      <div className="Color_Pallet_Row">{listButtonRow}</div>
    </div>
  );
}

export default ColorPallet;

import React, { useState } from "react";
import "../style/editor.css";
import ColorPallet from "./ColorPallet";
import DrawPannel from "./DrawPannel";

function Editor() {
  const [pixelWidth, setPixelWidth] = useState(16);
  const [pixelHeight, setPixelHeight] = useState(16);
  const [DrawMode, SetDrawMode] = useState(false);
  const [SelectColor, setSelectColor] = useState("red");

  const changeColor = (color) => {
    setSelectColor(color);
  };
  return (
    <div className="Editor_Container">
      <div className="Editor_Container_Content">
        <h1 style={{ color: "#ffd500" }}>Pixel Art Maker</h1>
        {!DrawMode && (
          <div className="Options">
            {/* Width button */}
            <div className="Option">
              <input
                type={"number"}
                className="panelInput"
                defaultValue={pixelWidth}
                onChange={(e) => {
                  setPixelWidth(e.target.value);
                }}
              />
              <span style={{ color: "#ffd500" }}>Width</span>
            </div>
            {/* Height button */}
            <div className="Option">
              <input
                type={"number"}
                className="panelInput"
                defaultValue={pixelHeight}
                onChange={(e) => {
                  setPixelHeight(e.target.value);
                }}
              />
              <span style={{ color: "#ffd500" }}>Height</span>
            </div>
          </div>
        )}

        <div
          className="Editor_Container_Button"
          onClick={() => SetDrawMode(!DrawMode)}
        >
          {DrawMode ? "Reset" : "Get Started"}
        </div>

        {DrawMode ? (
          <DrawPannel
            width={pixelWidth}
            height={pixelHeight}
            selectedColor={SelectColor}
          />
        ) : null}
      </div>
      {DrawMode ? (
        <div className="Editor_Container_Content Color_pallet">
          <ColorPallet color={"red"} update={changeColor} />
        </div>
      ) : null}
    </div>
  );
}

export default Editor;

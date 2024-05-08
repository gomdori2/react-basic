import React, { useContext } from "react";
import { ColorConsumer, ColorContext } from "../contexts/colorContext";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{ width: "200px", height: "200px", background: state.color }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: state.subcolor,
        }}
      ></div>
    </>
  );
};

export default ColorBox;

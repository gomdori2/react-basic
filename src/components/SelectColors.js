import React, { useContext } from "react";
import { ColorConsumer, ColorContext } from "../contexts/colorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex" }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: "100px",
              height: "100px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={e => {
              e.preventDefault(); // 기본동작 방지
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColors;

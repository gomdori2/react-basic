import React from "react";
import "./react.css";

const Main = props => {
  return (
    <div>
      <h1> 안녕하세요, 나는{props.title}입니다.</h1>
    </div>
  );
};

export default Main;

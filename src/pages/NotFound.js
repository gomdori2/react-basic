import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      잘못된 경로로 접근하셨습니다.
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;

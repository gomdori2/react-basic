import React from "react";
import { NavLink } from "react-router-dom";

const ArticleItem = ({ id, text }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default ArticleItem;

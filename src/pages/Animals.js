import React from "react";
import { Link, useParams } from "react-router-dom";

const Animals = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/animal/cat">동물 목록1</Link>
        </li>
        <li>
          <Link to="/animal/dog">동물 목록2</Link>
        </li>
        <li>
          <Link to="/animal/bear">동물 목록3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Animals;

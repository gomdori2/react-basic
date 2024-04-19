import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개 페이지</Link>
        </li>
        <li>
          <Link to="/profile/cat">고양이 프로필</Link>
        </li>
        <li>
          <Link to="/profile/dog">강아지 프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

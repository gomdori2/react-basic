import React from "react";
import Counter from "../components/Counter";

const MainPage = () => {
  return (
    <div>
      <h1>Hooks study</h1>
      <div>
        <h2>useState</h2>
        <h3>예시 : 카운터 앱</h3>
        <Counter />
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";

const Main = ({ title, children }) => {
  //const { title, children } = props;
  console.log(title);
  console.log(children);

  return (
    <div>
      <h1> 안녕하세요, 나는{title}입니다.</h1>
      <h2>children 값은 {children}</h2>
    </div>
  );
};
export default Main;

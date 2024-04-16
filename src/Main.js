import React, { useState } from "react";

const Main = () => {
  const object = { a: 1, b: 2, c: 3 };
  // 스프레드
  const nextObject = { ...object, b: 5, d: 5 }; // object 사본을 만들어서 b 값만 덮어쓴다.
  console.log(object);
  console.log(nextObject);

  const array = [
    {
      id: 1,
      value: true,
    },
    {
      id: 2,
      value: true,
    },
    {
      id: 3,
      value: false,
    },
    {
      id: 4,
      value: true,
    },
    {
      id: 5,
      value: false,
    },
  ];
  // 새항목 추가
  let nextArray = array.concat({ id: 6 });
  console.log(nextArray);

  nextArray = nextArray.filter(item => item.id !== 2);
  console.log(nextArray);

  // id가 1인 항목의 value를 false
  // 불변성 유지를 위해 스프레드 연산자 사용(...item)
  nextArray = nextArray.map(item =>
    item.id === 1 ? { ...item, value: false } : item,
  );
  console.log(nextArray);

  return <div></div>;
};
export default Main;

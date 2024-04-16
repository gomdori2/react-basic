# 3. useState()

## 3.1. state

- 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
- props는 상위 컴포넌트가 설정하는 값.
- 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
- props 를 바꾸려면 부모 컴포넌트에서 바꿔야한다.
  - but,
- 하위 컴포넌트에서 전달 받은 props 값을 직접 바꿀수 없는데,
- state는 컴포넌트 자체적으로 지닌 값으로
- 컴포넌트 내부에서 값을 업데이트 할 수 있다.

### 3.1.1. useState()

- 리액트 16.8 이후 버전에서 사용가능
- 이전 버전에서는 class state 사용
  - 여기선 hooks종류를 사용못함.
- Hooks 종류 중 하나다.

#### 3.1.1.1. 배열 구조 분해 할당

- 배열 구조 분해 할당
- const [value, setValue] = useState();

```js
const array = [1, 2];
const [c, d] = array;

// const a = array[0];
// const b = array[1];

// console.log(a);
// console.log(b);

console.log(c, d);
```

#### 3.1.1.2. useState 사용

```js
import React, { useState } from "react";

const Main = () => {
  // useState함수의 인자에 초기값 useState(초기값)
  // useState함수를 호출하면 배열이 반환
  // 배열의 첫 번째 요소는 현재상태 message
  // 두 번째 요소는 상태를 바꿔주는 세터(setter) 함수 setMessage
  const [message, setMessage] = useState("하위");

  // 이벤트 핸들러
  const onClickEnter = () => {
    setMessage("ㅎㅇ");
  };
  const onClickLeave = () => {
    setMessage("ㅂㅇ");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};
export default Main;
```

#### 3.1.1.3. 한 컴포넌트에서 useState 여러 번 사용하기

```js
import React, { useState } from "react";

const Main = () => {
  // 메세지 상태 변경
  const [message, setMessage] = useState("하위");
  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  // 이벤트 핸들러
  const onClickEnter = () => {
    setMessage("ㅎㅇ");
    setColor("red");
    setBackgroundColor("gray");
  };
  const onClickLeave = () => {
    setMessage("ㅂㅇ");
    setColor("blue");
    setBackgroundColor("#fff");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* 하나로 축약 가능 color면 color에 
        담아서 오브젝트 하나만 던져도 알아서 css 먹음 */}
      <h1 style={{ color, backgroundColor }}>{message}</h1>
    </div>
  );
};
export default Main;
```

## 3.2. state를 사용할 대 주의사항

- state 값을 바꾸어야 할 때는 setState
- 혹은 useState 를 통해 전달 받은 세터함수를 사용해야한다.

- 배열이나 객체를 업데이트 해야할 때

```js
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
```

## 3.3. 정리

- props는 상위 컴포넌트가 설정
- state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트

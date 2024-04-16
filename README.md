# 2. 컴포넌트

## 2.1. 클래스형 컴포넌트

- 생긴 모양만 일단 알아두자

- 함수형과 기능에서 큰 차이 없다.

- **트렌드 함수형 컴포넌트와 Hooks을 사용하는 것**

```js
import React, { Component } from "react";
import "./react.css";
// 함수형
// const Main = () => {
//   const title = "리액트";

//   return (
//     <div>
//       <h1> {title}</h1>
//     </div>
//   );
// };
// 클래스형
class Main extends Component {
  render() {
    const title = "리액트";
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Main;
```

## 2.2. 컴포넌트 생성

- 파일 및 컴포넌트 명은 파스칼케이스로 한다.

## 2.3. props(properties)

- 컴포넌트 속성을 설정할 때 사용하는 요소
- **props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정**
- 리액트는 단방향
  - 부모(props를 넘김) > 자식(props를 넘김)

## 2.3.1. JSX 내부에서 props 렌더링

- props 값은 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있다.
- props를 렌더링 할 때는 JSX 내부에서 {} 기호로 감싼다.

- Main.js

```js
- Main.js
const Main = (props) => {
  <h1> 안녕하세요, 나는{props.title}입니다.</h1>
}

- 비구조화 할당 문법
- 객체 구조 분해 할당
const Main = ({ title }) => {
  return (
    <div>
      <h1> 안녕하세요, 나는{title}입니다.</h1>
    </div>
  );
};

export default Main;
```

### 2.3.2 컴포넌트를 사용할 때 props 값 지정하기

- App.js

```js
-App.js;
function App() {
  return <Main title="리액트" />;
}
```

### 2.3.3. props 기본값 설정 : defaultProps

```js
import React from "react";
import "./react.css";

const Main = props => {
  return (
    <div>
      <h1> 안녕하세요, 나는{props.title}입니다.</h1>
    </div>
  );
};
Main.defaultProps = {
  title: "기본 이름",
};
export default Main;
```

### 2.3.4. 태그 사이의 내용을 보여주는 children

- src/App.js
- 보내는 곳

```js
import Main from "../src/Main.js";

function App() {
  return <Main>리액트</Main>;
}

export default App;
```

- src/Main.js
- 받는 곳

```js
<h2>children 값은 {props.children}</h2>
```

### 2.3.5. 구조 분해 할당(비구조화 할당 문법)을 통해 props

- [구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
-

```js
import React from "react";

const Main = ({ title, children }) => {
  // 구조분해 할당
  // props 내부 값을 현재 오브젝트 내부에 있는애 한테 할당함.
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
```

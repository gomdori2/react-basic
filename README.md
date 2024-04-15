# 1. JSX 문법

## 1.1. 감싸인 요소

- JSX 파일(컴포넌트)은 철글자를 대문자
- <></> Fragment
  - 컴포넌트를 return 하는 걸 프라그먼트라함
- src/Main.js
- build 파일 > src 파일을 압축함.
- public에 있는애는 압축 x

```js
import React from "react";

const Main = () => {
  const title = "리액트";
  return;
  <Fragment>
    <h1>{title} 안녕</h1>
    <h2>리액트 안녕</h2>
  </Fragment>;
};

export default Main;
```

## 1.2. 자바스크립트 표현

- JSX 안에서 자바스크립트 표현식 코드를 {}로 감싸면 된다.

```js
import React from "react";

const Main = () => {
  const title = "React";

  return (
    <>
      <h1>{title} 안녕</h1>
      <h2>리액트 안녕</h2>
    </>
  );
};

export default Main;
```

- 명령형

- 선언형

## 1.3. IF문 대신 조건부 연산자(삼항연산자)

- jsx 내부의 자바스크립트 표현식에서 if문을 사용할 수 없다.
- jsx 밖에서 if문을 사용하여 사전에
  값을 설정하거나 return 위에 js 부분에 설정하거나
- 조건부 연산자(삼항 연산자)를 사용한다.

```js
  {조건 === "" ? () : ()}
  // 아무것도 안보여줄때 null로 사용을 하기도 한다.
  {title === "리액트" ? <h1>리액트 입니다.</h1> : null}
  // 위에 null 준거랑 똑같음. 뒤에 false일 때 값 주지 않음.
  {title === "리액트" && <h1>리액트 입니다.</h1>}
  {title === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
)}
```

- if 문으로 제어할 시

```js
import React from "react";

const Main = () => {
  const title = "undefined";
  let s = "";
  if (title === undefined) {
    s = `리액트입니다.`;
  } else {
    s = `리액트아닙니다..`;
  }
  return <div>{s}</div>;
};

export default Main;
```

## 1.4 AND 연산(&&)를 사용한 조건부 렌더링(화면에 뿌린다.)

```js
{
  title === "리액트" && <h1>리액트 입니다.</h1>;
}
```

## 1.5 undefined를 렌더링하지 않기

- OR ||

```js
return title || "값이 undefined입니다."; 이건 아직 사용 x 하자.
return <div>{title}</div>을 사용
```

## 스타일링

- DOM 요소에 스타일을 적용할 때는 문자열이 아닌 객체 형태로
- 카멜케이스 사용

```css
box-sizing: border-box;
/boxsizing: borderBox;
```

## 1.6. 인라인 스타일링

```css
<div style={{ backgroundColor: "pink", fontSize: "48px", fontWeight: "700" }}>
      {title}
</div>
```

- js 단에 객체로 제어하는 방식

```js
const Main = () => {
  const title = "리액트";
  const style = {
    backgroundColor: "pink",
    fontSize: "48px",
    fontWeight: "700",
  };

  return <div style={style}>{title}</div>;
};
```

## 1.7. class 대신 className

- 파일로 관리

```js
import React from "react";
import "./react.css";
const Main = () => {
  const title = "리액트";

  return <div className="react">{title}</div>;
};

export default Main;
```

```css
.react {
  background-color: pink;
  font-size: 48px;
  font-weight: 700;
}
```

## 1.8. styled-component(Emotion)

- CSS in JS
- emtion Snippets > 리액트 emotion > css 자동완성

```js
import React from "react";
import "./react.css";
import styled from "@emotion/styled";

const StyledTitle = styled.div`
  background-color: pink;
  font-size: 48px;
  font-weight: bold;
`;

const Main = () => {
  const title = "리액트";

  return <StyledTitle>{title}</StyledTitle>;
};

export default Main;
```

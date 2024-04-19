# 7. 리액트 라우터로 SPA 개발하기

## 7.1. 라우팅이란?

- 라우팅의 개념 : 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것을 의미
- 게시판(community)을 만든다고 가정해보자

- 글쓰기 페이지(wirte) : 새로운 글을 작성하는 페이지
- 글 목록 페이지(list) : 작성된 여러 글의 목록을 보여주는 페이지
- 해당 글읽기 페이지(read) : 하나의 글을 보여주는 페이지
- 예시 : http://localhost:3000/community/wirte
- 이렇게 여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지 별로 컴포넌트들을 분리해가면서
- 프로젝트를 관리하기 위해 필요한 것이 라우팅 시스템
- 리액트 라우터, Next.js

## 7.2. 싱글 페이지 애플리케이션(SPA)

- 하나의 페이지로 이루어진 애플리케이션이라는 의미
  - 초기 로딩시간이 길다.
  - load된걸로 렌더링 해줌 각각을 돌때마다 다시 도는거 아님
- 사용자 인터랙션(상호작용)이 많고 다양한 정보를 제공하는
  모던 웹 애플리케이션에 적합.
- html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후
  이후에는 필요한 데이터만 받아와서 화면에 업데이트 하는 것이 싱글 페이지 애플리케이션이다.
- 다른 페이지 이동할 때는 다른 페이지의 html을 새로 요청하는 것이 아니고,
  브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고,
  기존에 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 된다.

## 7.3. 리액트 라우터 적용 및 기본 사용법

- 순서
  1. 프로젝트 생성 및 라이브러리 설치
  2. 페이지 만들고 이동해 본다.
  3. URL파라미터와 쿼리스트링 사용해보기
  4. 중첩된 라우트 구현하기
  5. 리액트 라우터의 부가기능 사용해보기

### 7.3.1. 프로젝트 생성 및 라이브러리 설치

- `npm install react-router-dom`
- `yarn add react-router-dom`

### 7.3.2. 프로젝트에 라우터 적용

- src/index.js

```js
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

### 7.3.3. 페이지 컴포넌트 만들기

<!-- Main으로 해도됨 -->

- src/pages/Home.js

```js
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>가장 먼저 보여지는 페이지입니다.</h1>
    </div>
  );
};

export default <h1>가장 먼저 보여지는 페이지입니다.</h1>;
```

- src/pages/About.js

```js
import React from "react";

export const About = () => {
  return <div>소개 페이지입니다.</div>;
};
```

### 7.3.4. Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기

- src/App.js

```js
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

### 7.3.5. Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기

- a 태그는 브라우저에서는 페이지를 새로 불러오게 되기 때문에 사용하지말자.
- Link 컴포넌트는 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고
  History API를 통해 브라우저 주소의 경로만 바꾸는 기능으로 내장되어 있다.

- src/pages/Home.js

```js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개 페이지</Link>
    </div>
  );
};

export default Home;
```

## 7.4. URL 파라미터와 쿼리스트링

<!-- export 안하면 객체로 싸서 보내야함. -->
<!-- 파라미터에 따라서 정보 변경 -->

- src/App.js

```js
<Route path="/profile/:animals" element={<Profile />} />
```

- src/pages/Home.js

```js
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
```

- src/pages/Profile.js

```js
// 루트 컴포넌트에서 profiles든 뭐든 path 명 바꿔서 쓸수 있음
// ex) profile > pro 이런느낌
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
```

**7장/8장같이 해뒀음.**

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

- 라우터 폴더를 따로 만들어서 빼는게 좋다.
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

- 이름만 보고도 알 수 있게 뒤에 aboutPage 이런거 붙여주기

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

### 7.4.1. URL 파라미터

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

### 7.4.2. 쿼리 스트링

- useLocation

- useSearchParmas Hook 사용하기

- src/pages/About.js

```js
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  // useSearchParams()는 배열 타입의 값을 반환한다.
  // 쿼리 하나하나는 파라미터 이게 둘이상이면 쿼리스트링
  // const [쿼리파라미터를 조회/수정 하는 메서드들이 담긴 객체반환,
  // 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환] = useSearchParams();

  const [searchParams, setSearchParam] = useSearchParams();
  // get() 메서드를 통해 특정 쿼리파라미터를 조회할 수 있다.
  // set()메서드를 통해 특정 쿼리파라미터를 업데이트할 수 있다.
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  // 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입
  // 필요에 따라 "", 숫자는 parseInt로 변환 시켜서 보내자
  const onToggleDetail = () => {
    // 처음엔 초기값.
    setSearchParam({ mode: 1, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParam({ mode: nextMode, detail });
  };
  return (
    <div>
      <Link to="/">
        <h2>home</h2>
      </Link>
      <h1>소개 페이지입니다</h1>
      <p>리액트 라우터 사용</p>
      {/* toggle btn 이라보면됨. */}
      <p>mode : {mode}</p>
      <p>detail : {detail}</p>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <button onClick={onToggleDetail}>detail</button>
    </div>
  );
};

export default About;
```

## 7.5. 중첩된 라우트

- 중첩된 라우터를 사용하지 않을 때
- src/App.js

```js
<Route path="/Articles" element={<Articles />} />
<Route path="/Article/:id" element={<Article />}></Route>
```

- src/pages/Home.js

```js
<li>
  <Link to="/Articles">게시글 목록</Link>
</li>
```

- src/pages/Articles.js

```js
import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/article/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/article/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/article/3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
```

- src/pages/Article.js

```js
import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
```

- 중첩된 라우트를 사용할 때
- src/App.js

```js
<Route path="/Articles" element={<Articles />}>
  <Route path=":id" element={<Article />}></Route>
</Route>
```

- src/pages/Articles.js

```js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      {/* 페이지내부에서 값만 해당 페이지 불러옴 <Outlet /> */}
      <Outlet />
    </div>
  );
};

export default Articles;
```

### 7.5.1. 공통 레이아웃 컴포넌트

- 컴포넌트 관심사 : 컴포넌트별로 기능을 분리 시켜야함.
- 중첩된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때도 유용하게 사용 가능

- src/components/Layout.js

```js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "lightgray",
          padding: "1rem",
          fontSize: "24px",
        }}
      >
        <Link to={"/"}>Header</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
```

- src/App.js

```js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:animals" element={<Profile />} />
      </Route>
      {/* path="/Articles" > 감싼 요소에 path가 /파라매터로 path가 잡힘. */}
      <Route path="/Articles" element={<Articles />}>
        <Route path=":id" element={<Article />}></Route>
      </Route>

      <Route path="/Animals" element={<Animals />} />
      {/* outlet으로도 해볼 것  */}
      {/* <Route path="/Animals" element={<Animals />}>
        <Route path="/Animal/:animal" element={<Animal />} />  
      </Route> */}

      <Route path="/Animal/:animal" element={<Animal />} />
    </Routes>
  );
}

export default App;
```

- src/pages/Articles

```js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Articles = () => {
  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      {/* 페이지내부에서 값만 해당 페이지 불러옴 <Outlet /> */}
    </div>
  );
};

export default Articles;
```

### 7.5.2. index props(첫화면에 보여줄 페이지 호출)

- src/App.js

```js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* index == path="/" */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:animals" element={<Profile />} />
      </Route>
      {/* path="/Articles" > 감싼 요소에 path가 /파라매터로 path가 잡힘. */}
      <Route path="/Articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>

      <Route path="/Animals" element={<Animals />} />
      {/* outlet으로도 해볼 것  */}
      {/* <Route path="/Animals" element={<Animals />}>
        <Route path="/Animal/:animal" element={<Animal />} />  
      </Route> */}

      <Route path="/Animal/:animal" element={<Animal />} />
    </Routes>
  );
}

export default App;
```

## 7.6. 리액트 라우터 부가 기능

### 7.6.1. useNavigate

- Link 컴포넌트(리액트 라우터 돔이 주는거)를 사용하지 않고 다른 페이지로 이동해야 하는 상황에 사용하는 Hook
- src/components/Layout.js

- Link 방식

```js
<header
  style={{
    backgroundColor: "lightgray",
    padding: "1rem",
    fontSize: "24px",
  }}
>
  <Link to={"/"}>Header</Link>
</header>
```

- nav 방식
- src/App.js

```js
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* index == path="/" */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:animals" element={<Profile />} />
      </Route>
      {/* path="/Articles" > 감싼 요소에 path가 /파라매터로 path가 잡힘. */}
      <Route path="/Articles" element={<Articles />}>
        <Route index element={<Navigate replace to="1" />} />
        <Route path=":id" element={<Article />} />
      </Route>

      <Route path="/Animals" element={<Animals />} />
      {/* outlet으로도 해볼 것  */}
      {/* <Route path="/Animals" element={<Animals />}>
        <Route path="/Animal/:animal" element={<Animal />} />  
      </Route> */}

      <Route path="/Animal/:animal" element={<Animal />} />
    </Routes>
  );
}

export default App;
```

- src/components/Layout.js

```js
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전페이지로 이동
    navigate(-1);
  };
  const goArticles = () => {
    // alticls 페이지로 이동
    // replace 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 기록에 남기지 않음.
    navigate("/articles", { replace: true });
  };
  const goHome = () => {
    // 첫페이지로 가기
    navigate("/");
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "lightgray",
          padding: "1rem",
          fontSize: "24px",
        }}
      >
        Header
        {/* <Link to={"/"}></Link> */}
        <button
          onClick={() => {
            goBack();
          }}
        >
          뒤로가기
        </button>
        <button
          onClick={() => {
            goArticles();
          }}
        >
          게시글 목록
        </button>
        <button
          onClick={() => {
            goHome();
          }}
        >
          홈으로
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
```

### 7.6.2. NavLink

- 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우
- 특정 스타일또는 CSS 클래스를 적용하는 컴포넌트이다.
- 잘 쓰지는 않아요... 근데 또 몰라요...
- src/pages/Articles.js

```js
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Articles = () => {
  const activeStyle = { color: "green", fontSize: "21px" };
  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
      {/* 페이지내부에서 값만 해당 페이지 불러옴 <Outlet /> */}
    </div>
  );
};

export default Articles;
```

- 리팩토링
- src/pages/Articles.js

```js
import { Link, NavLink, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const items = [
  { id: 1, text: "게시글 1" },
  { id: 2, text: "게시글 2" },
  { id: 3, text: "게시글 3" },
  { id: 4, text: "게시글 4" },
  { id: 5, text: "게시글 5" },
];

const Articles = () => {
  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <NavLink to={`/articles/${item.id}`}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
```

- src/pages/Articles.js

```js
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import ArticleItem from "./ArticleItem";

const items = [
  { id: 1, text: "게시글 1" },
  { id: 2, text: "게시글 2" },
  { id: 3, text: "게시글 3" },
  { id: 4, text: "게시글 4" },
  { id: 5, text: "게시글 5" },
];

const Articles = () => {
  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        {items.map(item => (
          <ArticleItem key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Articles;
```

- src/pages/ArticleItem.js

```js
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
```

### 7.6.3. NotFound 페이지 만들기

- src/pages/NotFound.js

```js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      잘못된 경로로 접근하셨습니다.
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
```

```js
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* index == path="/" */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:animals" element={<Profile />} />
      </Route>
      {/* path="/Articles" > 감싼 요소에 path가 /파라매터로 path가 잡힘. */}
      <Route path="/Articles" element={<Articles />}>
        <Route index element={<Navigate replace to="1" />} />
        <Route path=":id" element={<Article />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      <Route path="/Animals" element={<Animals />} />
      {/* outlet으로도 해볼 것  */}
      {/* <Route path="/Animals" element={<Animals />}>
        <Route path="/Animal/:animal" element={<Animal />} />  
      </Route> */}

      <Route path="/Animal/:animal" element={<Animal />} />
    </Routes>
  );
}

export default App;
```

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const items = [
{ id: 1, text: "게시글 1의 내용입니다." },
{ id: 2, text: "게시글 2의 내용입니다." },
{ id: 3, text: "게시글 3의 내용입니다." },
{ id: 4, text: "게시글 4의 내용입니다." },
{ id: 5, text: "게시글 5의 내용입니다." },
];

const Articles = () => {
const activeStyle = { color: "green", fontSize: 21 };

return (

<div>
<Layout>
<div>
<Outlet />
</div>
</Layout>
<ul>
{items.map(item => {
<li key={item.id}>
<NavLink to={`/articles/${item.id}`}>{item.text}</NavLink>
</li>;
})}
</ul>
{/_ 페이지내부에서 값만 해당 페이지 불러옴 <Outlet /> _/}
</div>
);
};

export default Articles;

# 8. 컴포넌트 스타일링

## 8.1 Scss

- `yarn add sass`
- src/components/ScssComponent.js

```js
import "../styles/scssComponent.scss";

const ScssComponent = () => {
  return (
    <div className="box-wrap">
      <div className="box red"></div>
      <div className="box orange"></div>
      <div className="box yellow"></div>
      <div className="box green"></div>
      <div className="box blue"></div>
      <div className="box indigo"></div>
      <div className="box violet"></div>
    </div>
  );
};

export default ScssComponent;
```

- src/styles/scssComponent.scss

```scss
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용가능)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}

.box-wrap {
  display: flex;
  .box {
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &.red {
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      background: black;
    }
  }
}
```

### 8.1.1 utils 함수 분리

- 여러 파일에서 사용될 수 있는 Scss 변수 및 믹스인을 다른 파일로 분리
- src/styles/utils.scss

```scss
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용가능)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

- src/styles/scssComponent.scss

```scss
@import "./utils.scss";

.box-wrap {
  display: flex;
  .box {
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &.red {
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      background: black;
    }
  }
}
```

## 8.2 css Module

- css를 불러와서 사용할 때 클래스 이름을 고유한 값
- 즉 [파일 이름]_[클래스 이름]_[해시값] 형태로 자동으로 만들어준다.
- 컴포넌트 스타일 클래스 이름이 중복되는 현상을 방지해주는 기술이다.
- .module.css 확장자로 파일 저장

- src/components/CSSModule.js

```js
import styles from "../styles/CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

- src/styles/CSSModule.module.css

```css
/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 사용할 수 있다. */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}

/* 웹 페이지 전역적으로 사용되는 글로벌 CSS */
:global .something {
  font-weight: 800;
  color: aqua;
}
```

## 8.3. Emotion

- styled-components 비슷하다.
- src/components/StyledComponent.js

```js
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// 컴포넌트 외부에 css 작성함 .
// *중요 Emotion은 첫글자 무조건 대문자
// 이름 명명 규칙은 사람마다 다르다.
// ex) StyledBox / BoxBlock
// 교수님 추천 : StyledBoxDiv
// Div일때만 Div
// js 환경이랑 같음
// 함수도 되고 js랑 비슷하다함.
// 외부로 빼면 어디서든 쓸수있음.
// 전역변수
// 전체컴포넌트에 지정하고 싶다.
// 공통은 따로빼서 쓰기도함. ex) btn ...
const StyledBoxDiv = styled.div`
  background: ${props => props.backgroundColor || "blue"};
  padding: 1rem;
  display: flex;
`;
const StyledButton = styled.button`
  background: #fff;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  // 옆의 요소 찾는법
  // & 자기자신 + 요소  > 자기자신의 옆에 붙어있는 요소 
    & + button {
    margin-left: 30px;
  }
`;

// 리액트의 반응형은 컴포넌트 하나를 잡아서 반응형으로 한후 그것을 적용시키는 방식
const StyledComponent = () => {
  return (
    <div>
      <StyledBoxDiv backgroundColor="black">
        <StyledButton backgroundColor="pink">있어보여</StyledButton>
        <StyledButton backgroundColor="red" inverted={true}>
          테두리
        </StyledButton>
      </StyledBoxDiv>
    </div>
  );
};

export default StyledComponent;
```

- 반응형 디자인

```js
const StyledBoxDiv = styled.div`
  background: ${props => props.backgroundColor || "blue"};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
```

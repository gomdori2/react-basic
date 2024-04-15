# 1. 리액트 프로젝트 초기세팅

## 1.1. 리액트 프로젝트 생성

- `npx create-react-app ./`
- `yarn create react-app ./`

## 1.2. 파일 정리

- srt/test 파일들 삭제

1. app.css
2. app.test.js
3. reportWebVitals.js
4. setupTest…
5. index.css 파일 수정

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  color: #000000;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
html {
  font-size: 16px;
}
body {
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.23px;
  word-break: keep-all;
  color: #000000;
}
```

## 1.3. React 개발 편의 도구 설치

- React 크롬 개발 도구 [DevTools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko&utm_source=ext_sidebar)

- VSCode React Plugin (ES7+ React/Redux/React-Native snippets ) 설치

## 1.4. nomalize.css 설정(css 초기화) cdn으로 할지/file 다운

- yarn add normalize.css

- src/index.js에서 상단에 import

## scss, emotion.js

- `yarn add sass`
- `yarn add @emotion/react`
- `yarn add @emotion/styled`

## ESLint, prettier 설정

- .prettierrc.json
  - .prettierrc.json 파일을 루트 폴더에 만들것.

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,

  // tab 시 2번 건너뛰기
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 설정

  - `yarn add eslint --dev`

- ESLint와 Prettier를 연결하여 ESLint 설정

  - `yarn add eslint-config-prettier --save-dev`

- 바벨에 의한 경고 제외
  - 경고 해결은 아님.
- `npm install @babel/plugin-proposal-private-property-in-object --dev`
- `yarn add @babel/plugin-proposal-private-property-in-object --dev`

- App.js부분 다 날릴것.

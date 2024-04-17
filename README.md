# 4. 함수 컴포넌트 이벤트

- 리액트에서 이벤트를 사용할 때 주의사항
  - 카멜케이스로 작성
    - HTML 은 onclick은 리액트에선 onClick
    - 함수 형태의 값을 전달
    - DOM 요소에만 이벤트를 설정할 수 있다.
    - styled 컴포넌트는 안에다가 작성 할 수 있음
- 이벤트의 종류
  - 모두 다 사용하지는 않지만 확인만 일단 해두자.
  - onClick
  - onChange
  - clipboard
  - composition
  - keyboard
  - focus
  - form
  - mouse
  - selection
  - touch
  - ui
  - wheel
  - media
  - image
  - animation
  - transition

## 4.1. 함수 컴포넌트로 이벤트 핸들링 구현해보기

```js
import React, { useState } from "react";

const Main = () => {
  // username 상태
  // const [상태, 상태업데이트함수] = useState(초기값)[hook]
  const [username, setUsername] = useState(0);
  const onChangeUsername = event => {
    setUsername(event.target.value.length);
  };

  const [message, setMessage] = useState("");
  const onChangeMessage = event => {
    setMessage(event.target.value);
  };

  return (
    // 리액트에선 태그 무조건 닫아야함.
    <div style={{ width: "182px" }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        // value={username}
        onChange={onChangeUsername}
      ></input>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <span>
          입력 수:<strong style={{ color: "red" }}>&nbsp;{username}</strong>
        </span>
      </div>
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChangeMessage}
      />
    </div>
  );
};
export default Main;
```

<!-- 글자수 계산 넣어둬서 아마 사용자명 안붙을꺼임.붙이려면 length 빼자 -->

```js
import React, { useState } from "react";

const Main = () => {
  // username 상태
  // const [상태, 상태업데이트함수] = useState(초기값)[hook]
  const [username, setUsername] = useState(0);
  const onChangeUsername = event => {
    setUsername(event.target.value.length);
  };

  const [message, setMessage] = useState("");
  const onChangeMessage = event => {
    setMessage(event.target.value);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
    console.log("버튼이다");
  };
  const onClick = () => {
    alert(`${username} : ${message}`);
    setUsername("");
    setMessage("");
  };
  return (
    // 리액트에선 태그 무조건 닫아야함.
    <div style={{ width: "182px" }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        // value={username}
        onChange={onChangeUsername}
        onKeyUp={onKeyPress}
      ></input>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <span>
          입력 수:<strong style={{ color: "red" }}>&nbsp;{username}</strong>
        </span>
      </div>
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChangeMessage}
        onKeyUp={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default Main;
```

- event.target.name을 사용하는 경우
- input의 갯수가 많아질 것 같으면 event.target.name을 쓰는 것이 좋을 수 도 있다.

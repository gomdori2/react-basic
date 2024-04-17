import React, { useState } from "react";

// 두가지 변수명으로 많이 적는다.
const initState = {
  username: "",
  message: "",
};
// const initialState = {};

const Main = () => {
  const [memberInfo, setMemberInfo] = useState(initState);
  const { username, message } = memberInfo;

  const onChange = event => {
    const nextMemberInfo = {
      ...memberInfo, // 기존의 정보 내용을 이자리에 복사한 뒤
      [event.target.name]: event.target.value, // 원하는 값을 덮어 씌우기
    };
    setMemberInfo(nextMemberInfo);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
    console.log("버튼이다");
  };

  const onClick = () => {
    alert(`${username} : ${message}`);
    setMemberInfo(initState);
  };
  return (
    // 리액트에선 태그 무조건 닫아야함.
    <div style={{ width: "182px" }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <br></br>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChange}
        onKeyUp={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default Main;

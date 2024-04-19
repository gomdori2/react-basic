import React, { useState } from "react";
const initState = {
  username: "",
  nickname: "",
};
const InputReducer = () => {
  // reducer로 해보자

  // userInfo 상태
  const [userInfo, setUserInfo] = useState(initState);
  // 객체 구조 분해 할당으로 데이터 가공해서 넣는것
  const { username, nickname } = userInfo;
  // 리팩토링 예시
  // 1. 인라인 형식으로 일단 만들고
  //   onChange={e => {
  //     setUsername(e.target.value);
  //   }}
  //   onChange={e => {
  //     setNickname(e.target.value);
  //   }}

  // 2. username 이벤트 핸들러 함수형으로 만듬
  //   const onChangeUsername = e => {
  //     setUsername(e.target.value);
  //   };
  //   const onChangeNickname = e => {
  //     setNickname(e.target.value);
  //   };
  // 3. 사본 떠서 담고 그 데이터를 가지고 뿌려줌
  // ...userInfo,
  // [e.target.name]: e.target.value, > userInfo.username
  // 4. 구조분해 할당으로 객체로 되어있는 데이터를 끄집어내서 뿌려줌
  //  const { username, nickname } = userInfo; > username
  // 5. reducer로 리팩토링 (주말에 해볼 것[참조해서])

  const onChange = e => {
    const nextUserInfo = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };
    setUserInfo(nextUserInfo);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b> {username}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default InputReducer;

import React, { useState } from "react";

const initState = [
  {
    id: 1,
    name: "홍길동",
  },
  {
    id: 2,
    name: "임꺽정",
  },
  {
    id: 3,
    name: "알라딘",
  },
  {
    id: 4,
    name: "지니",
  },
  {
    id: 5,
    name: "미키마우스",
  },
];
const Main = () => {
  const numbers = [1, 2, 3, 4, 5];
  const bigger = numbers.filter(num => num > 3);
  // 특정요소 제거
  const remove = numbers.filter(num => num !== 3);

  // member 목록 상태
  const [members, setMembers] = useState(initState);

  // member.id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");
  // input 이벤트 핸들러
  const onChange = e => {
    setUsername(e.target.value);
  };
  // button 이벤트 핸들러
  const onClick = e => {
    // 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열로 만든다.

    const nextMembers = members.concat({
      id: nextId,
      name: username,
    });
    setNextId(nextId + 1);

    setMembers(nextMembers);
    setUsername("");
  };

  const onRemove = id => {
    const nextMembers = members.filter(member => member.id !== id);
    const nextMembersBk = nextMembers.filter(members => members.name !== "");
    console.log(nextMembersBk);
    setMembers(nextMembersBk);
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>
      <ul>
        {/* return 안쓰고 쓰는것. */}
        {members.map(member => (
          <li key={member.id} onDoubleClick={() => onRemove(member.id)}>
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

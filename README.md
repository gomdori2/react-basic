# 5. 컴포넌트 반복

- 리액트에서 많이씀.
  - 코드의 재사용
- map을 많이쓴다.

## 5.1. 자바스크립트 배열의 map() 메서드

## 5.2. 데이터 배열을 컴포넌트 배열로 변환하기

```js
import React from "react";

const Main = () => {
  // id 를 객체로 줘서 한 방식
  // const usernames = [
  //   {
  //     id: 1,
  //     name: "홍길동",
  //   },
  //   {
  //     id: 2,
  //     name: "임꺽정",
  //   },
  //   {
  //     id: 3,
  //     name: "알라딘",
  //   },
  //   {
  //     id: 4,
  //     name: "지니",
  //   },
  //   {
  //     id: 5,
  //     name: "미키마우스",
  //   },
  // ];
  // const usernameList = usernames.map((username, index) => {
  //   return <li key={username.id}>{username.name}</li>;
  // });

  // js로 index로 id값 잡아서 뿌림
  const usernames = ["홍길동", "임꺽정", "알라딘", "지니", "미키마우스"];
  const usernameList = usernames.map((username, index) => {
    return <li key={index}>{username.name}</li>;
  });
  return (
    <div>
      <ul>
        {/* 인라인 */}
        {usernames.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export default Main;
```

## 5.3. 응용

## 5.3.1. 초기상태 설정하기

### 5.3.2. 데이터 추가 기능 구현하기

- push가 아닌 concat을 사용하자 이유는 불변성유지(immutable)
- 리액트에서는 상태를 업데이트할 때 기존 상태를 그대로 두면서 새로운 값을 설정해야한다.(불변성 유지)
- push()는 기존 배열 자체를 변경
- concat은 새로운 배열을 만들어 준다.

```js
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
  // member 목록 상태
  const [members, setMembers] = useState(initState);

  // member.id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = e => {
    // 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열로 만든다.

    const nextMembers = members.concat({
      id: nextId,
      name: username,
    });
    setNextId(nextId + 1);
    // console.log(nextId);

    setMembers(nextMembers);
    // console.log(nextMembers);
    setUsername("");
    // console.log("추가됐음");
  };
  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>
      <ul>
        {/* return 안쓰고 쓰는것. */}
        {members.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
```

### 5.3.3. 데이터 제거 기능 구현하기(dbClick)

- 각 항목을 더블클릭 했을 때 화면에서 사라지는 기능 구현
  - 실제 삭제 / 보이지 않게만
- 불변성을 유지 하면서 업데이트 filter 함수 사용
- filter 함수는 배열에서 특정 조건을 만족하는 원소들만 분류

```js
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
```

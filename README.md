# 6. Hooks

## 6.1. useState()

```js
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value} 입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

export default Counter;
```

## 6.2. useEffect()

- 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 기본구조

```js
// value
useEffect(() => {}, [의존성 배열]);
```

- eventLisner는 발생하면 바로 실행
- useEffect는 모니터링하다가 실행

### 6.2.1. 마운트될 때만 실행하고 싶을 때

- 의존성 배열 빈배열
- 한번만 실행하고 안함

### 6.2.2. 특정 값이 업데이트될 때만 실행하고 싶을 때

- 의존성 배열 안에 검사하고 싶은 값을 넣어주면 됨

### 6.2.3. 뒤 정리하기

- 참고 : 컴포넌트의 라이프사이클

  - 모든 리액트 컴포넌트에는 라이프사이클(생명주기)이 존재
  - 컴포넌트의 수명(생명)은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.
  - 가끔 컴포넌트를 처음으로 렌더링할 때나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야 할 수도 있다.
  - 또한 불필요한 업데이트를 방지해야 할 수도 있다.
  - 라이프사이클 메서드가 따로 있다.
    - 클래스형 컴포넌트에서만 사용가능
  - 함수형 컴포넌트에서는 Hooks 기능을 사용하여 비슷한 작업을 처리
  - 마운트(mount) : DOM이 생성되고 웹 브라우저 상에 나타나는 것
  - 업데이트(update)
    - 컴포넌트는 다음 같은 총 네 가지 경우 업데이트한다.
    - props를 받을 때(값이 변경될때)
    - state가 바뀔 대 (이것도 값이 변경됨)
    - 부모 컴포넌트가 리렌더링될 때 (상위 컴포넌트가 새로고침 되거나 변경될 때 > 하위도 변경)
    - 클래스형 > this해서 강제로 force update 시킬 때 업데이트됨 (우리랑은 상관 x > 함수형이라서)
  - 언마운트(unmount) : 컴포넌트를 DOM에서 제거하는 것
  - useEffect는 기본적으로 렌더링되고 난 직후마다 실행된다.
  - 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
    - 의존성 배열에 던지면 함수 실행 시 계속 돔
    - 그게 아니면 마운트, 렌더링 시 한번만 돔

- 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에
  어떠한 작업을 수행하고 싶다면 cleanUp 함수를 반환 해주어야 한다.
- 렌더링 될 때마다 뒷정리 함수가 계속 나타난것을 확인 할 수 있다.
- 뒷정리 함수가 호출될 때는 업데이트 직전의 값을 보여준다.

- 바닐라일경우`onready` 비슷하다.

- 컴포넌트가 살아있는것 > 죽인다
- 마운트 된 컴포넌트 > 언마운트 시키는 것

```js
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  console.log("카운터 컴포넌트 렌더링");

  useEffect(() => {
    console.log("effect");
    console.log(value);

    return () => {
      console.log("cleanup 함수");
      console.log(value);
    };
  }, [value]);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value} 입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

export default Counter;
```

- 불러와서 바로 뿌릴 때 사용
- 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수에 빈배열을 넣으면 된다.
- 직전 상태를 보여줌.
- 상태관리에 좋다.

## 6.3. useReducer()

### 기본이해

- 커피숍에 비유 해볼께요
- 액션타입 : 커피숍의 메뉴 (아메리카노, 라떼, 카푸치노, 아이스티 ...)
- 액션생성(함수) : 주문서 작성 (아메리카노 하나랑 라떼 하나 주세요)
  - 페이로드 : 주문서 작성 (아메리카노는 **샷추가**, 라떼 우유는 **두유**로 바꿔주세요)
- 디스패치(함수) : 주문하기
- 리듀서(함수) : 주문 받은걸 만들고 가공해서 손님에게 내 준다.

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 싸용하는 Hook
- 리듀서는 현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달 받아 새로운 상태를 반환하는 함수
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 **불변성 유지** 지켜주어야 한다.
-

### 6.3.1. 카운터 구현하기

- src/components/CounterReducer.js(이런 파일명 안씀)

```js
import React, { useReducer } from "react";
// 매개변수명 바꾸지마라
const reducer = (state, action) => {
  // action.type에 따라 다른 작업 수행
  // action.type은 관례상 대문자로 적음
  switch (action.type) {
    // case 뒤에는 자기가 명명하는것
    case "INCREMENT":
      return {
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        value: state.value - 1,
      };

    default:
      return state;
  }
};
const CounterReducer = () => {
  // [state, dispatch] = useReducer(reducer 함수 , 초기값)
  // useReducer의
  // 첫 번째 파라미터에는 해당 리듀서의 함수,
  // 두 번째 파라미터에는 해당 리듀서의 기본값
  // useReducer Hook을 사용하면 state 값과 dispatch 함수를 받아온다.
  // state: 현재 상태
  // dispatch : 액션을 발생시키는 함수
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서함수가 호출되는 형식
  // useReducer의 큰 장점 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        1증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        1감소
      </button>
    </div>
  );
};

export default CounterReducer;
```

### 6.3.2. input 상태 관리하기

- useReducer에서의 액션은 그 어떤 값도 사용 가능하다.
- 그래서 e.target 값 자체를 액션값으로 사용해보자
- src/components/InputReducer.js

```js
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  return {
    // 사본만들어서 값을 넣어주는거
    // 불변성 유지
    ...state,
    [action.name]: action.value,
  };
};
const initState = {
  username: "",
  nickname: "",
};
const InputReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { username, nickname } = state;

  const onChange = e => {
    // e.target을 dispatch로 사용한거임.
    dispatch(e.target);
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
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
        <br></br>
        <br></br>
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
```

<!-- 최적화 작업할 때 쓰는거 아직은 안배움 -->
<!-- 다음에 하자 라우터시 -->

## 6.4. useMemo()

- 나아주웅에

## 6.5. useCallback()

- 나아주웅에
<!-- 최적화 작업할 때 쓰는거 아직은 안배움 -->

## 6.6 useRef()

- 컴포넌트에서 ref(javascript)를 쉽게 사용할 수 있도록 해준다.
- [ref설명](https://velog.io/@yubiny289/%EB%A6%AC%EC%95%A1%ED%8A%B8-ref-DOM%EC%97%90-%EC%9D%B4%EB%A6%84-%EB%8B%AC%EA%B8%B0)

```js
import React, { useRef, useState } from "react";
const getAverage = number => {
  console.log("평균값 계산 중...");
  if (number.length === 0) {
    return 0;
  }
  // js 내장함수 reduce
  // mnd 확인해볼것 reduce
  const sum = number.reduce((a, b) => a + b);
  // 평균값
  return sum / number.length;
};

// 기능에 관한 컴포넌트/화면을 위한 컴포넌트를 나누면 유지보수에 좋다.
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useRef
  // 약간 느낌이 라벨이랑 비슷함.
  const inputElement = useRef(null);

  // input 이벤트 핸들러
  const onChange = e => {
    setNumber(e.target.value);
  };

  // button 이벤트 핸들러
  const onClick = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");

    // 현재 요소
    inputElement.current.focus();
  };
  const avg = getAverage(list);

  return (
    <div>
      <input
        type="number"
        onChange={onChange}
        value={number}
        ref={inputElement}
      />
      <button onClick={onClick}>등록</button>
      <ul>
        {/* dom 요소들을 돌리려고 한다면 ()로 묶어서 사용함. */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
```

## 6.6.1. 로컬변수를 사용하기

- 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다.
- 여기서 로컬변수는 렌더링과 상관없이 바뀔 수 있는 **값** 의미한다.
- 실습예제 : 더블 클릭 방지 기능구현, 사용자가 버튼을 빠르게 여러 번 클릭하는 경우 예상치 못한 여러 번의 액션을 방지

```js
import React, { useRef, useState } from "react";
const getAverage = number => {
  console.log("평균값 계산 중...");
  if (number.length === 0) {
    return 0;
  }
  // js 내장함수 reduce
  // mnd 확인해볼것 reduce
  const sum = number.reduce((a, b) => a + b);
  // 평균값
  return sum / number.length;
};

// 기능에 관한 컴포넌트/화면을 위한 컴포넌트를 나누면 유지보수에 좋다.
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useRef
  // 약간 느낌이 라벨이랑 비슷함.
  const inputElement = useRef(null);

  // input 이벤트 핸들러
  const onChange = e => {
    setNumber(e.target.value);
  };

  // button 이벤트 핸들러
  const onClick = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");

    // 현재 요소
    inputElement.current.focus();
  };

  // useRef 로컬 변수 사용하기
  // 더블클릭 방지 기능
  const isClick = useRef(false);
  const preventdDblClick = () => {
    // 현재 isClick 이면
    if (isClick.current) {
      console.log("이미 처리중 입니다... 그만...");
      inputElement.current.focus();
      return;
    }
    console.log("처리 시작...");
    isClick.current = true;
    onClick();

    // 가정 : 처리에 1초 소요
    setTimeout(() => {
      isClick.current = false;
      console.log("처리 완료");
    }, 2000);
  };

  const avg = getAverage(list);

  return (
    <div>
      <input
        type="number"
        onChange={onChange}
        value={number}
        ref={inputElement}
      />
      <button onClick={preventdDblClick}>등록</button>
      <ul>
        {/* dom 요소들을 돌리려고 한다면 ()로 묶어서 사용함. */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
```

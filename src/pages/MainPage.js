import React from "react";
import Average from "../components/Average";

const MainPage = () => {
  return (
    <div>
      {/* <h1>Hooks study</h1>
      <div>
        <h2>useState</h2>
        <h3>예시 : 카운터 앱</h3>
        <Counter />
      </div>
      <div>
        <h2>useEffect()</h2>
        <h3>예시 : 카운터 앱</h3>
        <Counter />
      </div>
      <div>
        <h2>useReducer()</h2>
        <h3>예시 : 리듀서 활용 카운터 앱</h3>
        <CounterReducer />
      </div> */}
      {/* <div>
        <h3>예시 : input 상태 관리하기</h3>
        <InputReducer />
      </div> */}
      <div>
        <h2>useRef</h2>
        <h3>예시 : 평균값 계산</h3>
        <Average />
      </div>
    </div>
  );
};

export default MainPage;

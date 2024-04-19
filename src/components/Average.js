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

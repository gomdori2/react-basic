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

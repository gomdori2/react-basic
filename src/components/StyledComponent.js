import { css } from "@emotion/react";
import styled from "@emotion/styled";
// 컴포넌트 외부에 css 작성함 .
// *중요 Emotion은 첫글자 무조건 대문자
// 이름 명명 규칙은 사람마다 다르다.
// ex) StyledBox / BoxBlock
// 교수님 추천 : StyledBoxDiv
// Div일때만 Div
// js 환경이랑 같음
// 함수도 되고 js랑 비슷하다함.
// 외부로 빼면 어디서든 쓸수있음.
// 전역변수
// 전체컴포넌트에 지정하고 싶다.
// 공통은 따로빼서 쓰기도함. ex) btn ...
const StyledBoxDiv = styled.div`
  background: ${props => props.backgroundColor || "blue"};
  padding: 1rem;
  display: flex;

  width: 1024px;

  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StyledButton = styled.button`
  background: #fff;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  // 옆의 요소 찾는법
  // & 자기자신 + 요소  > 자기자신의 옆에 붙어있는 요소 
    & + button {
    margin-left: 30px;
  }
`;

// 리액트의 반응형은 컴포넌트 하나를 잡아서 반응형으로 한후 그것을 적용시키는 방식
const StyledComponent = () => {
  return (
    <div>
      <StyledBoxDiv backgroundColor="black">
        <StyledButton backgroundColor="pink">있어보여</StyledButton>
        <StyledButton backgroundColor="red" inverted={true}>
          테두리
        </StyledButton>
      </StyledBoxDiv>
    </div>
  );
};

export default StyledComponent;

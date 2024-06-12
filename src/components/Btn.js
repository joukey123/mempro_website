import styled from "styled-components";

const BtnBox = styled.button`
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 20px;
  color: ${(props) =>
    props.$isClick ? props.theme.colors.white : props.theme.colors.blue};
  background-color: ${(props) =>
    props.$isClick ? props.theme.colors.blue : "transparent"};
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) =>
      props.theme.colors.white}; // Hover 상태에서 텍스트 색상 변경 (선택 사항)
    transition: all 0.3s ease-in-out;
  }
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

function Btn({ text, onClick, isClick }) {
  return (
    <BtnBox onClick={onClick} $isClick={isClick}>
      {text}
    </BtnBox>
  );
}

export default Btn;

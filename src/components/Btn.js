import styled from "styled-components";

const BtnBox = styled.button`
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.blue};
  background-color: transparent;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) =>
      props.theme.colors.white}; // Hover 상태에서 텍스트 색상 변경 (선택 사항)
    transition: all 0.3s ease-in-out;
  }
`;

function Btn({ text }) {
  return <BtnBox>{text}</BtnBox>;
}

export default Btn;

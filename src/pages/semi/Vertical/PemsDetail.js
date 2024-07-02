import styled from "styled-components";
import line from "../../../img/line.svg";

const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 750px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

function PemsDetail() {
  return <StructureWarpper></StructureWarpper>;
}

export default PemsDetail;

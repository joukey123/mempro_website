import { motion } from "framer-motion";
import styled from "styled-components";
import line from "../../../img/line.svg";
import CobraDetail from "./CobraDetail";
import Footer from "../../../components/Footer";
import WireDetail from "./WireDetail";
import ShortDetail from "./ShotDetail";
import PemsDetail from "./PemsDetail";

const Wrapper = styled.div`
  padding: 0 50px;
  @media (max-width: 1023px) {
    padding: 0px;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  border-radius: 8px;
  overflow: hidden;
  border: 0.5px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 140px;
  margin-top: 50px;
`;
const Table = styled.table`
  width: 100%;
  max-width: 1100px;
  border-collapse: collapse;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  margin-top: 30px;

  :first-child tr {
    background: linear-gradient(to right, #2467a2, #253b78);
    :first-child {
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  tr,
  td {
    :first-child {
      background-color: ${(props) => props.theme.colors.white};
    }
    padding: 15px;
    border: 0.1px solid ${(props) => props.theme.colors.border};
    &:hover {
      background-color: ${(props) => props.theme.colors.white};
    }
  }
  th {
    color: white;
    padding: 15px;
    font-weight: 600;
  }
`;
function VprobeDetail({ needle, contents }) {
  return (
    <Wrapper>
      {needle === "cobra" && (
        <CobraDetail contents={contents.cobra} needle={needle} />
      )}
      {needle === "wire" && (
        <WireDetail contents={contents.wire} needle={needle} />
      )}
      {needle === "short" && (
        <ShortDetail contents={contents.short} needle={needle} />
      )}
      {needle === "PEMS" && (
        <PemsDetail contents={contents.pems} needle={needle} />
      )}
    </Wrapper>
  );
}

export default VprobeDetail;

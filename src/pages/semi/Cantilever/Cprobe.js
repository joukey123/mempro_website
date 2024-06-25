import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { itemsDetail } from "../../../data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import line from "../../../img/line.svg";
import CprobeDetail from "./CprobeDetail";
import { useAspect } from "@react-three/drei";
import BendingDetail from "./BendingDetail";
import CoatingDetail from "./CoatingDetail";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 0 50px;
`;

const Table = styled.div`
  width: 100%;
  max-width: 570px;
  padding-left: 50px;
`;
const Th = styled.span`
  color: ${(props) => props.theme.colors.black};
  display: block;
  width: 120px;
  height: fit-content;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  &:first-child {
    margin: 25px 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
`;
const TableItem = styled.span`
  width: 200px;
  padding: 10px 15px;
  text-align: center;
  font-weight: 200;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isClick && props.theme.colors[props.$color]};
  color: ${(props) =>
    props.$isClick ? props.theme.colors.white : props.theme.colors.black};
  font-weight: ${(props) => props.$isClick && 600};
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  &:last-child {
    border-right: 0px;
  }
`;

const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;

const ContentsTitle = styled.div`
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 3px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
`;
function Cprobe() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { cards, contents } = itemsDetail[`${sublink}`];
  const [selectCard, setSelectCard] = useState("Cantilever");
  const [selectNeedle, setSelectNeedle] = useState("WRNP");
  const [maxWidth, setMaxWidth] = useState();
  const tableref = useRef();

  const handleClickCard = (item, event) => {
    setSelectCard(item);
  };
  const handleClickNeedle = (item) => {
    setSelectNeedle(item);
  };
  useEffect(() => {
    setMaxWidth(tableref.current.clientWidth);
  }, []);
  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <Table>
          <TableRow>
            <Th>Card Type</Th>
            <ItemWrapper $tableWidth={maxWidth}>
              {Object.keys(cards).map((item, index) => (
                <TableItem
                  key={index}
                  onClick={(event) => handleClickCard(item, event)}
                  $isClick={item === selectCard}
                  $color={"blue"}
                >
                  {item}
                </TableItem>
              ))}
            </ItemWrapper>
          </TableRow>
          <TableRow>
            <Th>Probe Type</Th>
            <ItemWrapper ref={tableref} $tableWidth={maxWidth}>
              {selectCard &&
                cards[selectCard]?.needle.map((item, index) => (
                  <TableItem
                    key={index}
                    onClick={() => handleClickNeedle(item)}
                    $isClick={item === selectNeedle}
                    $color={"gold"}
                  >
                    {item}
                  </TableItem>
                ))}
            </ItemWrapper>
          </TableRow>
        </Table>
        <span
          style={{ margin: "10px 0 50px 50px", fontSize: 13, fontWeight: 400 }}
        >
          * Needles는 재료에 따른 분류입니다. Spec 정보는 동일할 수 있습니다.
        </span>

        <CprobeDetail needle={selectNeedle} contents={contents} />
        {selectNeedle !== "Coaxial" && (
          <Contents>
            <div className="bending" style={{ margin: "100px 0" }}>
              <ContentsTitle>
                <span>Bending Technology</span>
              </ContentsTitle>
              <BendingDetail contents={contents} />
            </div>
            <div className="bending" style={{ margin: "100px 0" }}>
              <ContentsTitle>
                <span>Coating Technology</span>
              </ContentsTitle>
              <CoatingDetail contents={contents} />
            </div>
          </Contents>
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Cprobe;

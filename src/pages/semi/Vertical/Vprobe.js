import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { itemsDetail } from "../../../data";
import VprobeDetail from "./VprobeDetail";

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
  text-transform: capitalize;

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
function Vprobe() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { cards, contents } = itemsDetail[`${sublink}`];
  const [selectCard, setSelectCard] = useState("Vertical");
  const [selectNeedle, setSelectNeedle] = useState("wire");

  const handleClickCard = (item, event) => {
    setSelectCard(item);
  };
  const handleClickNeedle = (item) => {
    setSelectNeedle(item);
  };

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <Table>
          <TableRow>
            <Th>Card Type</Th>
            <ItemWrapper>
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
            <ItemWrapper>
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
        <VprobeDetail needle={selectNeedle} contents={contents} />
      </Wrapper>
    </>
  );
}

export default Vprobe;

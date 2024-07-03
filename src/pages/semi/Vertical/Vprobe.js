import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { itemsDetail } from "../../../data";
import VprobeDetail from "./VprobeDetail";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { warning } from "framer-motion";
import { events } from "@react-three/fiber";

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
  margin-bottom: 100px;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  &:first-child {
    margin: 25px 0;
  }
`;

function Vprobe() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { cards, contents } = itemsDetail[`${sublink}`];
  const [selectCard, setSelectCard] = useState("vertical");
  const [selectNeedle, setSelectNeedle] = useState("wire");

  const handleClickCard = (item) => {
    setSelectCard(item);
  };
  const handleClickNeedle = (item) => {
    setSelectNeedle(item);
  };

  useEffect(() => {
    const found = cards[selectCard]?.needle.find(
      (item) => item === selectNeedle
    );
    if (found) {
      setSelectNeedle(found);
    } else {
      setSelectNeedle(cards[selectCard]?.needle[0]);
    }
  }, [selectCard]);

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <Table>
          <TableRow>
            <h2 style={{ marginBottom: 10 }}>Card Type</h2>
            {/* <ItemWrapper>
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
            </ItemWrapper> */}
            <ToggleButtonGroup
              color="primary"
              value={selectCard}
              exclusive
              aria-label="Platform"
            >
              {Object.keys(cards).map((item, index) => (
                <ToggleButton
                  sx={{ width: 200 }}
                  value={item}
                  onClick={(event) => handleClickCard(item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </TableRow>
          <TableRow>
            <h2 style={{ marginBottom: 10 }}>Probe Type</h2>
            <ToggleButtonGroup
              color="warning"
              value={selectNeedle}
              exclusive
              aria-label="Platform"
            >
              {selectCard &&
                cards[selectCard]?.needle.map((item, index) => (
                  <ToggleButton
                    key={index}
                    value={item}
                    onClick={() => handleClickNeedle(item)}
                    sx={{ width: 150 }}
                  >
                    {item}
                  </ToggleButton>
                ))}
            </ToggleButtonGroup>
            {/* <ItemWrapper>
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
            </ItemWrapper> */}
          </TableRow>
        </Table>

        <VprobeDetail needle={selectNeedle} contents={contents} />
      </Wrapper>
    </>
  );
}

export default Vprobe;

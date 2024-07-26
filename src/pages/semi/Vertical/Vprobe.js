import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { itemsDetail } from "../../../data";
import VprobeDetail from "./VprobeDetail";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ProbeType from "../../../components/headers/ProbeType";
import { Box, Collapse } from "@mui/material";
import Footer from "../../../components/Footer";

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
  const [selectNeedle, setSelectNeedle] = useState("");
  const [isNeedleChange, setIsNeedleChange] = useState(false);

  const handleProbeType = (data) => {
    setSelectNeedle(data);
  };

  // useEffect(() => {
  //   const found = cards[selectCard]?.needle.find(
  //     (item) => item === selectNeedle
  //   );
  //   if (found) {
  //     setSelectNeedle(found);
  //   } else {
  //     setSelectNeedle(cards[selectCard]?.needle[0]);
  //   }
  //   console.log(selectNeedle, isNeedleChange, "test");
  // }, [selectCard]);

  useEffect(() => {
    setIsNeedleChange(false);
    setTimeout(() => {
      setIsNeedleChange((prev) => !prev);
    }, 1000);
  }, [selectNeedle]);
  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <ProbeType
          cards={cards}
          onData={handleProbeType}
          IsNeedleChange={setIsNeedleChange}
        />

        <Collapse in={selectNeedle && isNeedleChange}>
          <Box
            sx={{
              height: isNeedleChange ? "auto" : "0",
              overflow: "hidden",
            }}
          >
            <VprobeDetail needle={selectNeedle} contents={contents} />
          </Box>
        </Collapse>
      </Wrapper>
    </>
  );
}

export default Vprobe;

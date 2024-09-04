import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { itemsDetail } from "../../../data";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CprobeDetail from "./CprobeDetail";
import BendingDetail from "./BendingDetail";
import CoatingDetail from "./CoatingDetail";

import Collapse from "@mui/material/Collapse";

import ContentsTitle from "../../../components/ContentsTitle";

import ProbeType from "../../../components/headers/ProbeType";
import { Box } from "@mui/material";
import Application from "../../../components/Application";

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
  align-items: center;
  @media (max-width: 1023px) {
    padding: 30px;
  }
`;

const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;

function Cprobe() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { cards, contents } = itemsDetail[`${sublink}`];
  const [selectNeedle, setSelectNeedle] = useState("");

  const [bendingClicked, setBendingClicked] = useState(true);
  const [coatingClicked, setCoatingClicked] = useState(true);
  const [isNeedleChange, setIsNeedleChange] = useState(false);

  const showBending = (show) => {
    setBendingClicked(show);
  };
  const showCoating = (show) => {
    setCoatingClicked(show);
  };

  const handleProbeType = (data) => {
    setSelectNeedle(data);
  };

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

        <Collapse
          in={selectNeedle && isNeedleChange}
          sx={{ width: "100%", maxWidth: "1100px" }}
        >
          <Box
            sx={{
              width: isNeedleChange ? "auto" : "0",
              overflow: "hidden",
            }}
          >
            <CprobeDetail needle={selectNeedle} contents={contents} />

            {selectNeedle !== "Coaxial" && selectNeedle !== "None" && (
              <Contents>
                <div className="bending">
                  <ContentsTitle
                    title={"Bending Technology"}
                    onData={showBending}
                  />
                  <Collapse in={bendingClicked}>
                    <BendingDetail contents={contents} />
                  </Collapse>
                </div>
                <div className="coating">
                  <ContentsTitle
                    title={"Coating Technology"}
                    onData={showCoating}
                  />
                  <Collapse in={coatingClicked}>
                    <CoatingDetail contents={contents} />
                  </Collapse>
                </div>

                <Application contents={contents} />
              </Contents>
            )}
          </Box>
        </Collapse>
      </Wrapper>
    </>
  );
}

export default Cprobe;

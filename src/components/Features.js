import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ContentsTitle from "./ContentsTitle";
import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";
import useAnimateOnInView from "../Hook/useAnimationOnInView";
import { useRecoilState } from "recoil";
import { language } from "../atoms";
import useTranslation from "../Hook/useTranslation";

const FeaturesBox = styled(motion.div)`
  margin: 150px 0;
  @media (max-width: 1023px) {
    margin: 0px 0;
  }
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    width: 65px;
    height: 65px;
  }
`;
const StyledGridContainer = styled(Grid)``;
const MotionGrid = motion(Grid);

function Features({ contents, maxWidth }) {
  const maxNumber = 12;
  const length = contents.features.length;
  const [rowNumber, setRowNumber] = useState(maxNumber / length);
  const [expendClicked, setExpendClicked] = useState(true);
  const { getText } = useTranslation();

  const {
    ref: childRef,
    controls: childControls,
    animateVariants: childVariants,
  } = useAnimateOnInView(0, 0.3);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  if (rowNumber <= 2.5) {
    setRowNumber(4);
  }
  return (
    <FeaturesBox>
      <ContentsTitle title={"Features"} onData={showContent} />
      <Collapse in={expendClicked}>
        <Box sx={{ flexGrow: 1, maxWidth, margin: "0 auto" }}>
          <StyledGridContainer container spacing={3}>
            {contents.features.map((item, index) => (
              <Grid
                xs={12 / length}
                md={rowNumber}
                key={index}
                sx={{
                  textAlign: "center",
                }}
              >
                <motion.div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  ref={childRef}
                  initial="hidden"
                  animate={childControls}
                  variants={childVariants(index * 0.5)}
                >
                  <Icon className={`img${index}`} src={item.icon} />
                  <div style={{ width: "100%" }}>
                    <span
                      style={{
                        display: "block",
                        marginTop: 0,
                        textTransform: "capitalize",
                        lineHeight: "19px",
                        fontSize: 18,
                        wordBreak: "break-word",
                      }}
                    >
                      {getText(item.text)}
                    </span>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </StyledGridContainer>
        </Box>
      </Collapse>
    </FeaturesBox>
  );
}

export default Features;

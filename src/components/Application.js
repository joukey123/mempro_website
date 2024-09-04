import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import ContentsTitle from "./ContentsTitle";
import useAnimateOnInView from "../Hook/useAnimationOnInView";
import { motion } from "framer-motion";
const ApplicationBox = styled(motion.div)`
  margin: 150px 0;
  @media (max-width: 1023px) {
    margin: 0px 0;
  }
`;
const ApplicationImg = styled.img`
  width: ${(props) => (props.$number < 3 ? "450px" : "200px")};
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 1023px) {
    width: 100px;
    height: 100px;
  }
`;
const MotionGrid = motion(Grid);

const StyledGridContainer = styled(Grid)``;
function Application({ contents }) {
  const [expendClicked, setExpendClicked] = useState(true);
  const showContent = (show) => {
    setExpendClicked(show);
  };

  const {
    ref: childRef,
    controls: childControls,
    animateVariants: childVariants,
  } = useAnimateOnInView(0, 0.3);

  return (
    <ApplicationBox>
      <ContentsTitle title={"Application"} onData={showContent} />
      <Collapse in={expendClicked}>
        <StyledGridContainer container spacing={3}>
          {contents.applications.map((item, index) => (
            <MotionGrid
              xs={6}
              md={12 / contents.applications.length}
              sx={{ textAlign: "center" }}
              key={index}
              ref={childRef}
              initial="hidden"
              animate={childControls}
              variants={childVariants(index * 0.3)}
            >
              <ApplicationImg
                src={item.img}
                $number={contents.applications.length}
              />
              <div>{item.text}</div>
            </MotionGrid>
          ))}
        </StyledGridContainer>
      </Collapse>
    </ApplicationBox>
  );
}

export default Application;

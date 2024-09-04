import { useState } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import useAnimateOnInView from "../Hook/useAnimationOnInView";

const ContentTitle = styled(motion.div)`
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 3px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  font-weight: 600;
  margin-top: 150px;
  @media (max-width: 1023px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
const StyledToggleButton = styled(ToggleButton)`
  border: 0 !important;
  transform: scale(0.8);
  background-color: transparent !important;
`;

function ContentsTitle({ title, onData }) {
  const [selected, setSelected] = useState(true);
  const handleClick = () => {
    setSelected((prev) => !prev);
    onData((prev) => !prev);
  };
  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  return (
    <ContentTitle
      ref={boxRef}
      initial="hidden"
      animate={boxControls}
      variants={boxVariants(0.25)}
    >
      <span style={{ fontSize: 18 }}>{title}</span>
      <StyledToggleButton
        value="check"
        selected={selected}
        onClick={handleClick}
      >
        {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </StyledToggleButton>
    </ContentTitle>
  );
}

export default ContentsTitle;

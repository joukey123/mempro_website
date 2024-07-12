import styled, { keyframes } from "styled-components";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { transform } from "framer-motion";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";

const move = keyframes`
from {
  transform: translateY(10px);
}
to{
  transform: translateY(30px);
}`;
const Warapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  width: 30px;
  height: 50px;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 0;
  animation: ${move} 1.5s ease-in-out infinite alternate;
`;

function WheelAnimation() {
  return (
    <Warapper>
      <Box>
        <Circle />
      </Box>
      <DoubleArrowIcon style={{ transform: "rotate(90deg) scale(1.3)" }} />
    </Warapper>
  );
}

export default WheelAnimation;

import styled from "styled-components";
import { Button } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import useAnimateOnInView from "../../Hook/useAnimationOnInView";
const BtnWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 30px;

  @media (max-width: 1023px) {
    padding: 0px;
    overflow-x: scroll;
    padding-bottom: 30px;
  }
`;

const StyledButton = styled(Button)`
  width: 200px;
  color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  border-color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  padding: 30px 20px !important;
  img {
    filter: ${(props) => props.$disabled && "grayscale(1)"};
  }
  span {
    color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  }
  margin-right: 20px !important;
  @media (max-width: 1023px) {
    width: 200px;
    padding: 5px !important;
    span {
      text-align: center !important;
      margin-bottom: 5px;
    }
    img {
      margin-bottom: 10px;
    }
  }
`;
const MotionStyledButton = motion(StyledButton);
const MachineImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
  margin-bottom: 50px;
`;
function Machines({ machinBtnArray, onModel }) {
  const [type, setType] = useState("");

  const handleType = (item, num) => {
    setType(item);
    onModel(num);
  };

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  return (
    <BtnWrapper>
      {machinBtnArray.map((item, index) => (
        <StyledButton
          variant="outlined"
          size="large"
          value={item.model}
          key={index}
          color="primary"
          onClick={() => handleType(item.model, item.num)}
          $disabled={item.model !== type}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MachineImg src={item.img} />
            <span
              style={{
                whiteSpace: "pre-line",
                textAlign: "left",
                lineHeight: 1.5,
                fontSize: "14px",
                fontWeight: 300,
                marginBottom: "5px",
                color: "black",
              }}
            >
              {item.model}
            </span>
            <span
              style={{
                whiteSpace: "pre-line",
                textAlign: "left",
                lineHeight: 1.3,
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              {item.title.replace(
                /(Sanding|Bending|Tester|Punching|Prober|Caulking|Contact|Aging)/gi,
                "\n$1"
              )}
            </span>
          </div>
        </StyledButton>
      ))}
    </BtnWrapper>
  );
}

export default Machines;

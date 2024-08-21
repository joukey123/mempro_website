import { useState } from "react";
import { itemsDetail } from "../../../data";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Img = styled(motion.img)`
  position: absolute;
  top: 60%;
  left: 45%;
`;
function CantileverAnimationMobile({ isAnimation }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink] = useState(paths[2]);
  const { images } = itemsDetail[`${sublink}`];
  return (
    <Wrapper>
      <Img
        src={images.part1}
        height={"38%"}
        style={{ transform: "translate(-20%,-150%)", zIndex: 99 }}
        initial={{ transform: "translate(-20%,-150%)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-50%, -70%)", // 최종 변환 상태
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part2}
        height={"5%"}
        style={{ transform: "translate(50%,-550%)", opacity: ".5" }}
        initial={{ transform: "translate(50%,-550%)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-35%, -185%)", // 최종 변환 상태
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part3}
        height={"38%"}
        style={{ transform: "translate(-50%,-80%)", opacity: ".5", zIndex: 1 }}
        initial={{ transform: "translate(-50%,-80%)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-50%, -70%)", // 최종 변환 상태
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part4}
        height={"19%"}
        style={{ transform: "translate(-90%,-10%)", zIndex: 0 }}
        initial={{ transform: "translate(-90%,-10%)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-60%, -40%) rotate(180deg)", // 최종 변환 상태
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
    </Wrapper>
  );
}

export default CantileverAnimationMobile;

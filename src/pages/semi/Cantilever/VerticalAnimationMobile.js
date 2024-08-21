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

function VerticalAnimationMobile({ isAnimation }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink] = useState(paths[2]);
  const { images } = itemsDetail[`${sublink}`];
  return (
    <Wrapper>
      <Img
        src={images.part1}
        height={"43%"}
        style={{
          transform: "translate(-43%,-160%) rotate(-20deg)",
          zIndex: 99,
        }}
        initial={{ transform: "translate(-43%,-160%) rotate(-20deg)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-43%,-98%) rotate(-20deg)", // 최종 변환 상태
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part2}
        height={"10%"}
        style={{
          transform: "translate(-20%,-450%)  rotate(-15deg) scale(.8)",
          opacity: ".4",
          zIndex: 98,
        }}
        initial={{
          transform: "translate(-20%,-450%) rotate(-15deg) scale(.8)",
        }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-20%,-200%)  rotate(-15deg) scale(.8)",
                zIndex: 96,
                opacity: "1",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part3}
        height={"38%"}
        style={{
          transform: "translate(-43%,-130%) scale(.25) rotate(-17deg)",
          zIndex: 97,
        }}
        initial={{
          transform: "translate(-43%,-130%) scale(.25) rotate(-17deg)",
        }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-43%,-100%) scale(.25) rotate(-17deg)",
                zIndex: 98,
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part4}
        height={"40%"}
        style={{
          transform: "translate(-43%,-90%) rotate(-17deg)",
          opacity: ".5",
          zIndex: 96,
        }}
        initial={{ transform: "translate(-43%,-90%) rotate(-17deg)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-43%,-100%) rotate(-17deg)",
                zIndex: 97,
                opacity: "1",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part5}
        height={"19%"}
        style={{
          transform: "translate(-40%,-35%) scale(.8) rotate(-25deg)",
          zIndex: 95,
        }}
        initial={{ transform: "translate(-40%,-35%) scale(.8) rotate(-25deg)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-40%,-100%) scale(.8) rotate(-25deg)",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part6}
        height={"19%"}
        style={{
          transform: "translate(-40%,10%) scale(.4) rotate(-25deg)",
          zIndex: 94,
        }}
        initial={{ transform: "translate(-40%,10%) scale(.4) rotate(-25deg)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-40%,-80%) scale(.4) rotate(-25deg)",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part7}
        height={"20%"}
        style={{
          transform: "translate(-40%,30%) rotate(-25deg) scale(.4)",
          zIndex: 93,
        }}
        initial={{
          transform: "translate(-40%,30%) rotate(-25deg) scale(.4)",
        }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-40%,-75%) rotate(-25deg) scale(.4)",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part8}
        height={"19%"}
        style={{
          transform: "translate(-40%,60%)  rotate(-25deg) scale(.5)",
          zIndex: 92,
        }}
        initial={{ transform: "translate(-40%,60%) rotate(-25deg) scale(.5)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-40%,-70%)  rotate(-25deg) scale(.5)",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
      <Img
        src={images.part9}
        height={"30%"}
        style={{
          transform: "translate(-40%,60%) rotate(-35deg) scale(.6)",
          zIndex: 91,
        }}
        initial={{ transform: "translate(-40%,60%)  rotate(-35deg) scale(.6)" }} // 애니메이션 초기 상태
        animate={
          isAnimation
            ? {
                transform: "translate(-40%,-40%) rotate(-35deg) scale(.6)",
              }
            : {}
        }
        transition={{ duration: 2 }}
      />
    </Wrapper>
  );
}

export default VerticalAnimationMobile;

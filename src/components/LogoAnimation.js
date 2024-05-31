import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const Wrapper = styled.div`
  height: 0vh; /* 예제용 높이 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled(motion.svg)`
  width: 35%;
  height: auto;
  position: absolute;
  top: -14%;
  left: 27%;
`;

const lightBlue = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
    stroke: "#0068b7",
  },
  end: {
    pathLength: 1,
    fill: "#0068b7",
    stroke: "#0068b7",
  },
};

const blue = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
    stroke: "#004da0",
  },
  end: {
    pathLength: 1,
    fill: "#004da0",
    stroke: "#004da0",
  },
};

const white = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
    stroke: "#ffffff",
  },
  end: {
    pathLength: 1,
    fill: "#ffffff",
    stroke: "#ffffff",
  },
};

const gray = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
    stroke: "#e5e5e5",
  },
  end: {
    pathLength: 1,
    fill: "#e5e5e5",
    stroke: "#e5e5e5",
  },
};

function LogoAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 1 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("end");
    }
  }, [isInView, controls]);

  return (
    <Wrapper ref={ref}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.5 63.98">
        <motion.polygon
          variants={lightBlue}
          transition={{
            default: { duration: 1.5 },
            fill: { duration: 1.5, delay: 1.5 },
          }}
          initial="start"
          animate={controls}
          points="0 16.36 27.75 31.94 27.75 63.98 0 48 0 16.36 0 16.36"
        />
        <motion.polygon
          variants={blue}
          transition={{
            default: { duration: 1.5 },
            fill: { duration: 1.5, delay: 1.5 },
          }}
          initial="start"
          animate={controls}
          points="55.5 16.36 27.75 31.94 27.75 63.98 55.5 48 55.5 16.36 55.5 16.36"
        />
        <motion.polygon
          variants={blue}
          transition={{
            default: { duration: 1.5 },
            fill: { duration: 1.5, delay: 1.5 },
          }}
          initial="start"
          animate={controls}
          points="27.81 0 55.48 16.3 55.48 16.36 27.73 31.94 .02 16.38 27.81 0 27.81 0"
        />
        <motion.polygon
          variants={white}
          transition={{
            default: { duration: 1, delay: 1.5 },
            fill: { duration: 1, delay: 1.5 },
          }}
          initial="start"
          animate={controls}
          points="27.75 31.94 27.75 45.7 17.97 40.17 17.97 58.35 7.24 52.17 7.24 20.42 27.75 31.94 27.75 31.94"
        />
        <motion.polygon
          variants={gray}
          transition={{
            default: { duration: 1, delay: 1.5 },
            fill: { duration: 1, delay: 1.5 },
          }}
          initial="start"
          animate={controls}
          points="27.75 31.94 27.75 45.7 37.53 40.17 37.53 58.35 48.26 52.17 48.26 20.42 27.75 31.94 27.75 31.94"
        />
      </Svg>
    </Wrapper>
  );
}

export default LogoAnimation;

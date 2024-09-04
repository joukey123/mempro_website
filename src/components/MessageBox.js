import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
const Wrap = styled(motion.div)`
  /* background-color: ${(props) => props.theme.colors.box}; */
  background-color: #0068b7;
  width: fit-content;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 50px;
  padding: 20px;
  color: white;
  display: ${(props) => (props.$isClosed ? "none" : "flex")};
  white-space: nowrap;
  margin-top: -300px;
  @media (max-width: 1023px) {
    margin-top: -50px;
  }
`;
const Contents = styled.span`
  font-size: 18px;
  font-weight: 300;
  border-right: 1px solid white;
  padding-right: 20px;
`;
const Btn = styled.button`
  color: white;
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  i {
    font-size: 25px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
    transition: all 0.3s ease-in-out;
  }
`;

const BtnBox = ({ type, onClose }) => {
  const [close, setClose] = useState(false);

  useEffect(() => setClose(false), []);

  const handleClose = () => {
    if (type === "close") {
      setClose(true);
      onClose(true); // Notify parent component
    } else {
      onClose(false); // Notify parent component (optional)
    }
  };
  return (
    <Btn onClick={() => handleClose(type)}>
      {type === "close" ? <CloseIcon /> : null}
    </Btn>
  );
};

function MessageBox({ text, type }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.5 });
  const [isClosed, setIsClosed] = useState(false);
  const { scrollYProgress } = useScroll();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const scale = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.3 : 0.5, 1],
    [0, isMobile ? 0.8 : 1.2, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.3 : 0.7, 0.71],
    [1, isMobile ? 1 : 1, 0]
  );
  const animateVariants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  const handleClose = (closeState) => {
    setIsClosed(closeState);
  };
  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [isInView, controls]);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const { deltaY } = event;

  //     if (sectionIndex > 1.3) {
  //       setIsClosed(true);
  //     } else {
  //       setIsClosed(false);
  //     }
  //   };
  //   window.addEventListener("wheel", handleScroll);

  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, [sectionIndex]);

  // const animateVariants = (delay) => ({
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
  //   exit: { opacity: 0, y: 50, transition: { duration: 1 } },
  // });

  return (
    <Wrap
      ref={ref}
      $isClosed={isClosed}
      initial="hidden"
      animate={controls}
      variants={animateVariants(0)}
      style={{ scale, opacity }}
    >
      <Contents>{text}</Contents>
      {type && <BtnBox type={type} onClose={handleClose} />}
    </Wrap>
  );
}

export default MessageBox;

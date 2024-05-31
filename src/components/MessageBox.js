import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.box};
  padding: 20px 70px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30%;
  margin: 0 auto;
  height: 56px;
`;
const Contents = styled.span`
  font-size: 1rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  right: 22px;
`;
const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.theme.colors.blue};
  border: 0;
  position: absolute;
  right: 3px;
  cursor: pointer;
  i {
    font-size: 25px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.lightBlue};
    transition: all 0.3s ease-in-out;
  }
`;

const BtnBox = ({ type, onClose }) => {
  const [close, setClose] = useState(false);
  useEffect(() => setClose(false), []);

  const handleClose = () => {
    if (type === "close") {
      console.log("close", type);
      setClose(true);
      onClose(true); // Notify parent component
    } else {
      console.log("plus");
      onClose(false); // Notify parent component (optional)
    }
  };
  return (
    <Btn onClick={() => handleClose(type)}>
      {type === "close" ? <i class="fa-solid fa-xmark"></i> : null}
    </Btn>
  );
};

function MessageBox({ text, type }) {
  const controls = useAnimation();
  const refInfo = useRef(null);
  const isInView = useInView(refInfo, { triggerOnce: true, threshold: 0.5 });
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;
      const sectionIndex = Math.round(window.scrollY / window.innerHeight);
      if (deltaY > 0 && sectionIndex > 0) {
        setIsClosed(true);
      } else {
        setIsClosed(false);
      }
    };
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const animateVariants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    exit: { opacity: 0, y: 50, transition: { duration: 1 } },
  });

  const location = window.innerHeight;

  const handleClose = (closeState) => {
    setIsClosed(closeState);
  };
  console.log(location);
  return (
    <Wrap
      ref={refInfo}
      $location={location}
      style={{ display: isClosed ? "none" : "flex" }}
      initial="hidden"
      animate={controls}
      variants={animateVariants(0.5)}
      exit="exit"
    >
      <Contents>{text}</Contents>
      <BtnBox type={type} onClose={handleClose} />
    </Wrap>
  );
}

export default MessageBox;

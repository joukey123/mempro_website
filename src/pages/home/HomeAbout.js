import styled from "styled-components";
import bgsemi from "../../img/bgsemi.svg";
import Btn from "../../components/Btn";
import LogoAnimation from "../../components/LogoAnimation";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef } from "react";

const Homeabout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75%;
`;
const Wraper = styled.div`
  width: 100%;
  height: 80vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
`;
const TextWrapper = styled.div`
  width: 40%;
  margin-right: 5%;
  span {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 40px 0 30px 0;
  }
  p {
    font-size: 0.8rem;
    font-weight: 100;
  }
`;
const ImgWrapper = styled.div`
  width: 40%;
  position: relative;
  transform: scale(0.8);
`;
const Bgimg = styled.img`
  width: 90%;
`;

const BtnWrapper = styled(motion.div)`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

function HomeAbout() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const animateVariants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
  });

  return (
    <Homeabout>
      <Wraper>
        <TextWrapper ref={ref}>
          <motion.span
            initial="hidden"
            animate={controls}
            variants={animateVariants(0)}
          >
            MEMPro
          </motion.span>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={animateVariants(1)}
          >
            Professional Trading Service
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={animateVariants(1.2)}
          >
            We can offer you the finest products you seek
          </motion.p>
          <BtnWrapper
            initial="hidden"
            animate={controls}
            variants={animateVariants(1.5)}
          >
            <Btn text={"About MEMPro"} />
            <Btn text={"Contact"} />
          </BtnWrapper>
        </TextWrapper>
        <ImgWrapper>
          <LogoAnimation />
          <Bgimg src={bgsemi} alt="bgImg" />
        </ImgWrapper>
      </Wraper>
    </Homeabout>
  );
}

export default HomeAbout;

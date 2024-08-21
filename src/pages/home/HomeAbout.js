import styled from "styled-components";
import bgsemi from "../../img/bgsemi.svg";
import Btn from "../../components/Btn";
import LogoAnimation from "../../components/LogoAnimation";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Homeabout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;
const Wraper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
const TextWrapper = styled.div`
  width: 40%;
  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-self: center;
  }
  span {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 10px 0 30px 0;
    width: 80%;
  }
  p {
    font-size: 0.8rem;
    font-weight: 100;
  }
  order: 2;
`;
const ImgWrapper = styled.div`
  width: 40%;
  order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  @media (max-width: 1023px) {
    width: 100%;
    transform: scale(0.7);
  }
`;
const Bgimg = styled.img`
  width: 90%;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  background: url(${(props) => props.$url}) no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
`;
const BtnWrapper = styled(motion.div)`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;
  button:first-child {
    margin-right: 15px;
  }
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
            style={{ maxWidth: "400px" }}
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
            <Link to={"/about"}>
              <Btn text={"About MEMPro"} />
            </Link>
            <Link to={"/contact"}>
              <Btn text={"Contact"} />
            </Link>
          </BtnWrapper>
        </TextWrapper>
        <ImgWrapper>
          {/* <Bgimg src={bgsemi} alt="bgImg" /> */}
          <ImgBox $url={bgsemi}>
            <LogoAnimation />
          </ImgBox>
        </ImgWrapper>
      </Wraper>
    </Homeabout>
  );
}

export default HomeAbout;

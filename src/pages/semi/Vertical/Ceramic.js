import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemsDetail } from "../../../data";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import ceramic_plus from "../../../img/vertical/ceramic_zoom.svg";
import Fab from "@mui/material/Fab";

import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;
`;

const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 1000px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 50px;
  position: relative;
  overflow: hidden;
`;
const DiagramImg = styled(motion.img)`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  object-fit: contain;
  object-position: center center;
  transform: scale(0.8);
  z-index: 99;
  filter: ${(props) => props.$isPlus && "blur(10px)"};
`;

const ImgBox = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100%;
  background: url(${(props) => props.$url}) no-repeat;
  background-position: center center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: scale(0.9) translate(-50%, -60%);
  filter: ${(props) => props.$isPlus && "blur(10px)"};
`;
const Step1 = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  position: relative;
  object-fit: contain;
  object-position: center center;
  filter: ${(props) => props.$isPlus && "blur(10px)"};
`;

// const BtnWrapper = styled.div`
//   position: absolute;
//   right: 50px;
//   bottom: 50px;
//   :nth-child(2) {
//     visibility: ${(props) => props.$isPlus && "hidden"};
//   }
// `;
const BtnWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  visibility: ${(props) => props.$isPlay && "hidden"};
  display: flex;
  flex-direction: column;
`;
const ZoomBtn = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.$isPlus ? "tan" : props.theme.colors.blue};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  border: 0;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: tan;
    transition: all 0.2s ease-in-out;
  }
`;
const ZooWrapper = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  height: 955px;
  border-radius: 25px 25px 0 0px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ZoomImg = styled.img`
  width: 100%;
  max-width: 700px;
  height: 650px;
  position: relative;
  top: -5%;
  transform: scale(0.9);
`;

const CeramicText = styled.span`
  position: absolute;
  top: 76%;
  left: 52.5%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20;
  visibility: ${(props) => props.$isPlus && "hidden"};
`;
function Ceramic() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { images, contents } = itemsDetail[`${sublink}`];
  const [animate1, setAnimate1] = useState(true);
  const [animate2, setAnimate2] = useState(true);
  const [playAnimaion, setPlayAnimation] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  // const handlePlayAnimation = () => {
  //   setPlayAnimation(false);

  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //     setAnimate1(true);
  //     setAnimate2(true);
  //   }, 0);
  // };

  const handlePlayAnimation = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
      setAnimate1(true);
      setAnimate2(true);
    }, 6000);
  };

  const handlePlusItem = () => {
    setIsPlus((prev) => !prev);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //   }, 0);
  // }, []);

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <DiagramWpper>
          <DiagramImg src={images.machine} $isPlus={isPlus} />

          <ImgBox $url={images.step1} $isPlus={isPlus}>
            {playAnimaion && (
              <>
                <Step1
                  src={images.step2}
                  initial={{
                    top: "66.5%",
                    left: "-10.5%",
                    transform: "scale(.15) translate(-100%, -100%)",
                  }}
                  animate={{
                    top: "66.5%",
                    left: "60.0%",
                    transform: "scale(.15) translate(-100%, -100%)",
                  }}
                  transition={{ duration: 5, delay: 1 }}
                />
                <Step1
                  src={images.step3}
                  style={{ maxWidth: "15px", height: "150px", opacity: 0 }}
                  initial={{
                    top: "79%",
                    left: "-42%",
                    transform: "translate(-100%, -52%)",
                    opacity: 0,
                  }}
                  animate={{
                    top: "79%",
                    left: "-31%",
                    transform: "translate(-100%, -52%)",
                    opacity: animate1 ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: animate1 ? 1.5 : -100,
                  }}
                  onAnimationComplete={() => setAnimate1(false)}
                />
                <Step1
                  src={images.step3}
                  style={{ maxWidth: "15px", height: "150px", opacity: 0 }}
                  initial={{
                    top: "79%",
                    left: "-13%",
                    transform: "translate(-100%, -52%)",
                    opacity: 0,
                  }}
                  animate={{
                    top: "79%",
                    left: "-2.5%",
                    transform: "translate(-100%, -52%)",
                    opacity: animate2 ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: animate2 ? 3.3 : -100,
                  }}
                  onAnimationComplete={() => setAnimate2(false)}
                />
                <Step1
                  src={images.step4}
                  initial={{
                    top: "73.8%",
                    left: "-33%",
                    transform: "translate(-100%, -50%) scaleX(1)",
                    width: "100px",
                  }}
                  animate={{
                    top: "73.8%",
                    left: "-33%",
                    transform: "translate(-100%, -50%) scaleX(0)",
                    transformOrigin: "right",
                    width: "100px",
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                  }}
                />
                <Step1
                  src={images.step4}
                  initial={{
                    top: "72%",
                    left: "77%",
                    transform: "translate(-100%, -50%) scaleX(1)",
                    width: "100px",
                  }}
                  animate={{
                    top: "72%",
                    left: "77%",
                    transform: "translate(-100%, -50%) scaleX(0)",
                    transformOrigin: "right",
                    width: "100px",
                  }}
                  transition={{
                    duration: 1,
                    delay: 3.3,
                  }}
                />
              </>
            )}
          </ImgBox>

          <CeramicText $isPlus={isPlus}>Ceramic</CeramicText>
          {/* <BtnWrapper $isPlus={isPlus}>
            <ZoomBtn onClick={handlePlusItem} $isPlus={isPlus}>
              <i class="fa-solid fa-plus"></i>
            </ZoomBtn>
            <ZoomBtn onClick={handlePlayAnimation}>
              <i class="fa-solid fa-play"></i>
            </ZoomBtn>
          </BtnWrapper> */}
          <BtnWrapper $isPlus={isPlus} $isPlay={playAnimaion}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={handlePlusItem}
              sx={{ marginBottom: 1 }}
            >
              {isPlus ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
            </Fab>
            {!isPlus && (
              <Fab
                color="primary"
                aria-label="replay"
                onClick={handlePlayAnimation}
              >
                <PlayArrowIcon />
              </Fab>
            )}
          </BtnWrapper>
          {isPlus && (
            <ZooWrapper
              initial={{
                top: "100%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              animate={{ top: "52%" }}
              exit={{ top: "100%" }}
              transition={{ duration: 0.1 }}
            >
              <ZoomImg src={ceramic_plus} />
            </ZooWrapper>
          )}
        </DiagramWpper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Ceramic;

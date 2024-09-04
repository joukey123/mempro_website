import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemsDetail } from "../../../data";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import ceramic_plus from "../../../img/vertical/ceramic_zoom.svg";
import Fab from "@mui/material/Fab";
import ContentsTitle from "../../../components/ContentsTitle";
import line from "../../../img/line.svg";

import {
  Stack,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ThreeModel from "../../../components/3D/ThreeModel";
import dgree from "../../../img/stiffener/dgree.svg";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;
  @media (max-width: 1023px) {
    padding: 30px;
  }
`;
const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;
const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 1000px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: relative;
  @media (max-width: 1230px) {
    height: 580px;
  }
`;
const DiagramImg = styled(motion.img)`
  height: 400px;

  transform: scale(0.8);
  z-index: 99;
  filter: ${(props) => props.$isPlus && "blur(10px)"};
  @media (max-width: 1230px) {
    height: 300px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1230px) {
    margin-top: -50px;
  }
`;
const Img = styled.img`
  width: 100%;
  max-width: 500px;
  filter: ${(props) => props.$isPlus && "blur(10px)"};
  @media (max-width: 1230px) {
    max-width: 350px;
  }
  position: absolute;
`;
const Step1 = styled(motion.img)`
  position: absolute;
  object-fit: contain;
  object-position: center center;
  filter: ${(props) => props.$isPlus && "blur(10px)"};
`;
const StructureWarpper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 900px;
  margin: 0 auto;
  border-radius: 15px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1023px) {
    padding: 0px;
    height: 500px;
  }
`;
// const BtnWrapper = styled.div`mempro123

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
  @media (max-width: 1023px) {
    right: 0;
    bottom: 0;
    flex-direction: row;
    transform: scale(0.7);
    z-index: 102;
    .btn1 {
      margin-right: 10px;
    }
  }
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
  position: relative;
  top: -5%;
  transform: scale(0.9);
`;

const CeramicText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 2000%);
  color: black;
  font-size: 20;
  visibility: ${(props) => props.$isPlus && "hidden"};
`;

const TypeImg = styled.div`
  width: 100px;
  height: 100px;
  background: url(${(props) => props.$url}) no-repeat center;
  margin: 0 20px;
  @media (max-width: 1023px) {
    width: 50px;
    height: 50px;
  }
`;

const DgreeImg = styled.div`
  width: 80px;
  height: 80px;
  background: url(${dgree}) no-repeat center;
  opacity: 0.2;
  position: absolute;
  top: 50px;
  left: 50px;
  @media (max-width: 1023px) {
    width: 50px;
    height: 50px;
    top: 25px;
    left: 25px;
  }
`;

const AssembleWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
`;
const ImgWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;
const ImgDiv = styled.div`
  width: 250px;
  height: 250px;
  background: url(${(props) => props.$url}) center no-repeat;
  @media (max-width: 1023px) {
    width: 150px;
    height: 150px;
  }
`;
const ImgText = styled.span`
  width: 100%;
  max-width: 250px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 10px;
`;

const MotionToggleButton = motion(ToggleButton);
function Ceramic() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { images, types, contents } = itemsDetail[`${sublink}`];
  const [animate1, setAnimate1] = useState(true);
  const [animate2, setAnimate2] = useState(true);
  const [playAnimaion, setPlayAnimation] = useState(false);
  const [isPlus, setIsPlus] = useState(false);

  const [modelIndex, setModelIndex] = useState();
  const [selectItem, setSelectItem] = useState(false);
  // const handlePlayAnimation = () => {
  //   setPlayAnimation(false);

  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //     setAnimate1(true);
  //     setAnimate2(true);
  //   }, 0);
  // };
  const [expendClicked, setExpendClicked] = useState(true);
  const [expendClickedAssemble, setExpendClickedAssemble] = useState(true);
  const [deviceType, setDeviceType] = useState("desktop");
  const showContent = (show) => {
    setExpendClicked(show);
    setSelectItem(false);
    setModelIndex();
  };

  const isMobile = useMediaQuery("(max-width: 1023px)");

  const showContent2Assemble = (show) => {
    setExpendClickedAssemble(show);
  };
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
    setSelectItem(true);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //   }, 0);
  // }, []);
  const handleClickType = (index) => {
    setModelIndex(index);
    setSelectItem(true);
  };

  const handleToggleChange = (event, newIndex) => {
    if (newIndex !== null) {
      setModelIndex(newIndex);
      setSelectItem(true);
    }
  };

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <DiagramWpper>
          <DiagramImg src={images.machine} $isPlus={isPlus} />

          <ImgBox className="imgBoxWhen">
            <Img src={images.step1} $isPlus={isPlus} />

            {playAnimaion && (
              <>
                <Step1
                  src={images.step2}
                  initial={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(-225%, 470%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(-285%, 608%)"
                        : "translate(-250%, 545%)",
                  }}
                  animate={{
                    top: "66.5%",
                    left: "60.0%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(80%, 485%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(90%, 612%)"
                        : "translate(90%, 545%)",
                  }}
                  transition={{ duration: 5, delay: 1 }}
                  style={{
                    willChange: "transform", // 애니메이션 성능을 향상시키기 위해 추가
                    width: isMobile ? "50px" : "80px",
                    zIndex: 99,
                  }}
                />
                <Step1
                  src={images.step3}
                  style={{
                    willChange: "transform", // 애니메이션 성능을 향상시키기 위해 추가

                    maxWidth: "15px",
                    height:
                      isMobile && deviceType === "mobile" ? "85px" : "150px",
                    opacity: 1,
                  }}
                  initial={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(-1000%, 130%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(-900%, 90%)"
                        : "translate(-1300%, 146%)",
                    opacity: 0,
                  }}
                  animate={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(-500%, 130%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(-400%, 90%)"
                        : "translate(-500%, 146%)",
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
                  style={{
                    maxWidth: "15px",
                    height:
                      isMobile && deviceType === "mobile" ? "85px" : "150px",
                    opacity: 0,
                  }}
                  initial={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(500%, 130%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(400%, 90%)"
                        : "translate(500%, 146%)",
                    opacity: 0,
                  }}
                  animate={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(1000%, 130%)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(750%, 90%)"
                        : "translate(1000%, 146%)",
                    opacity: animate2 ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: animate2 ? 3.4 : -100,
                  }}
                  onAnimationComplete={() => setAnimate2(false)}
                />
                <Step1
                  src={images.step4}
                  initial={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(-120%, 2055%) scaleX(1)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(-150%, 2655%) scaleX(1)"
                        : "translate(-180%, 3850%) scaleX(1)",

                    width: "60px",
                  }}
                  animate={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(-120%, 2055%) scaleX(0)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(-150%, 2655%) scaleX(0)"
                        : "translate(-180%, 3850%) scaleX(0)",
                    transformOrigin: "right bottom",
                    WebkitTransformOrigin: "right bottom", // 사파리 벤더 프리픽스
                    width: "60px",
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                  }}
                />
                <Step1
                  src={images.step4}
                  initial={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(40%, 2055%) scaleX(1)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(60%, 2655%) scaleX(1)"
                        : "translate(85%, 3850%) scaleX(1)",
                    width: "60px",
                  }}
                  animate={{
                    top: "50%",
                    left: "50%",
                    transform:
                      isMobile && deviceType === "mobile"
                        ? "translate(40%, 2055%) scaleX(0)"
                        : isMobile && deviceType === "desktop"
                        ? "translate(60%, 2655%) scaleX(0)"
                        : "translate(85%, 3850%) scaleX(0)",
                    transformOrigin: "right bottom",
                    WebkitTransformOrigin: "right bottom", // 사파리 벤더 프리픽스

                    width: "60px",
                  }}
                  transition={{
                    duration: 1,
                    delay: 3.3,
                  }}
                />
              </>
            )}
            {/* <CeramicText $isPlus={isPlus}>Ceramic</CeramicText> */}
          </ImgBox>

          {/* <BtnWrapper $isPlus={isPlus}>
            <ZoomBtn onClick={handlePlusItem} $isPlus={isPlus}>
              <i class="fa-solid fa-plus"></i>
            </ZoomBtn>
            <ZoomBtn onClick={handlePlayAnimation}>
              <i class="fa-solid fa-play"></i>
            </ZoomBtn>
          </BtnWrapper> */}
          <BtnWrapper $isPlay={playAnimaion}>
            {
              <Fab
                className="btn1"
                color="primary"
                aria-label="add"
                onClick={handlePlusItem}
                sx={{ marginBottom: 1 }}
              >
                {isPlus ? (
                  <ExpandMoreOutlinedIcon />
                ) : (
                  <ExpandLessOutlinedIcon />
                )}
              </Fab>
            }
            {!isPlus && (
              <Fab
                color="primary"
                aria-label="replay"
                onClick={handlePlayAnimation}
                sx={{ marginBottom: 1 }}
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
        <Contents>
          <div className="shape">
            <ContentsTitle title={"Shape"} onData={showContent} />

            <Collapse in={expendClicked}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <ToggleButtonGroup
                  value={modelIndex}
                  onChange={handleToggleChange}
                  exclusive
                  sx={{
                    display: isMobile && "grid",
                    gridTemplateColumns: isMobile && "repeat(3,1fr)",
                    gap: isMobile && "10px",
                  }}
                >
                  {types["shape"].map((item, index) => (
                    <MotionToggleButton
                      value={index}
                      sx={{
                        borderLeft:
                          isMobile &&
                          "1px solid rgba(0, 0, 0, 0.12) !important",
                      }}
                      ref={boxRef}
                      initial="hidden"
                      animate={boxControls}
                      variants={boxVariants(index * 0.3)}
                    >
                      <TypeImg
                        $url={item.img}
                        onClick={() => handleClickType(index)}
                      ></TypeImg>
                    </MotionToggleButton>
                  ))}
                </ToggleButtonGroup>
                <Collapse
                  in={selectItem}
                  sx={{ width: "100%", maxWidth: "900px" }}
                >
                  <StructureWarpper>
                    <ThreeModel
                      types={types}
                      number={modelIndex}
                      type="shape"
                    />
                    <DgreeImg />
                  </StructureWarpper>
                </Collapse>
              </div>
            </Collapse>
          </div>

          <div className="Assemble">
            <ContentsTitle title={"Assemble"} onData={showContent2Assemble} />
            <Collapse in={expendClickedAssemble}>
              <AssembleWrapper>
                {contents["assemble"].map((item, index) => (
                  <ImgWrapper
                    ref={boxRef}
                    initial="hidden"
                    animate={boxControls}
                    variants={boxVariants(index * 0.5)}
                  >
                    <ImgDiv $url={item.img} />
                    <ImgText>{item.text}</ImgText>
                  </ImgWrapper>
                ))}
              </AssembleWrapper>
            </Collapse>
          </div>
        </Contents>
      </Wrapper>
    </>
  );
}

export default Ceramic;

import styled, { keyframes } from "styled-components";
import { useCategory } from "../../Hook/useCategory";
import { itemsDetail } from "../../data";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import zoomImg from "../../img/diamond/diamond_zoom.svg";
import { motion, useAnimate } from "framer-motion";

import step1 from "../../img/diamond/step1.svg";
import step3 from "../../img/diamond/step3.svg";
import Headline from "../../components/article/Headline";
import { Collapse, Fab } from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ContentsTitle from "../../components/ContentsTitle";
import Carousel from "../../components/Carousel";
import Application from "../../components/Application";
import Features from "../../components/Features";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 600px;
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
  transform: scale(0.9);
  z-index: 99;
  margin-top: 50px;
  animation: ${(props) => props.$isZoom && "zoomin .3s ease forwards"};

  @keyframes zoomin {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(3) translateX(20%) translateY(10%);
    }
  }
  @keyframes zoomout {
    from {
      transform: scale(3);
    }
    to {
      transform: scale(0.9);
    }
  }
`;

const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;

// const ContentsTitle = styled.div`
//   border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
//   padding-bottom: 3px;
//   max-width: 1100px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 30px;
//   font-size: 18px;
//   font-weight: 600;
// `;

const ImgSlider = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgSliderWrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0 -10px;
`;
const ImgSliderBox = styled.img`
  max-width: 900px;
  width: 80%;
  height: 250px;
  object-fit: contain;
`;
const ImgSliderBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

const ContentsWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(${(props) => props.$length}, auto);
  font-size: 14px;
  text-align: center;
  gap: 50px;
  text-transform: capitalize;
`;
const ApplicationImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;
const IconWrapper = styled.div`
  .img0 {
    transform: scale(0.8);
  }
`;
const Icon = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
const CircleBox = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.blue : "#d9d9d9"};
  margin: 0 5px;
  animation: ${(props) => props.$isActive && grow} 0.3s forwards;
`;
const grow = keyframes`
  from {
    width: 10px;
  }  
  to {
    width: 30px;
    border-radius: 5px;
  }
`;

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
    props.$isZoom ? "tan" : props.theme.colors.blue};
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

const ZoomImg = styled(motion.img)`
  position: absolute;
  top: 320px;
  left: 260px;
  width: 150px;
  height: 150px;
`;

const Step1 = styled(motion.img)`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 320px;
  visibility: ${(props) => props.$isZoom && "hidden"};
`;
const Step2 = styled(motion.img)`
  width: 40%;
  height: 40%;
  position: absolute;
  top: 80px;
  left: 320px;
  visibility: ${(props) => props.$isZoom && "hidden"};
`;

function DiamondWire() {
  const sublink = "diamond";
  const { images, contents } = itemsDetail[`${sublink}`];
  const [index, setIndex] = useState(0);
  const [isZoom, setIsZoom] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const length = contents.sem.length;
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  const handleImgSlider = (text) => {
    if (text === "prev") {
      setIndex((prev) => (prev === 0 ? (prev = length - 1) : prev - 1));
    } else if ((text = "next")) {
      setIndex((prev) => (prev === length - 1 ? (prev = 0) : prev + 1));
    }
  };

  const handleZoomDiagram = () => {
    setIsZoom((prev) => !prev);
  };

  const handlePlayAnimtion = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 5000);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //   }, 1000);
  //   setTimeout(() => {
  //     setPlayAnimation(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />

        <DiagramWpper>
          <DiagramImg
            src={images}
            $isZoom={isZoom}
            initial={{ scale: 0.9 }}
            animate={{ scale: 0.9 }}
          />
          {playAnimation && (
            <>
              <Step1
                src={step1}
                initial={{ top: "5%", opacity: 1 }}
                animate={{ top: "50%", opacity: 0 }}
                transition={{ duration: 2, delay: 1 }}
                $isZoom={isZoom}
              />

              <Step2
                src={step3}
                initial={{ top: "46%", opacity: 0, zIndex: 98 }}
                animate={{ top: "46%", opacity: 1, zIndex: 98 }}
                transition={{ duration: 1, delay: 2.2 }}
                $isZoom={isZoom}
              />
            </>
          )}

          <BtnWrapper $isPlay={playAnimation}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={handleZoomDiagram}
              sx={{ marginBottom: 1 }}
            >
              {isZoom ? <ZoomOutIcon /> : <ZoomInIcon />}
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              onClick={handlePlayAnimtion}
              sx={{ marginBottom: 1 }}
            >
              <PlayArrowIcon />
            </Fab>

            {/* <ZoomBtn onClick={handlePlayAnimtion}>
              <i class="fa-solid fa-arrows-rotate"></i>
            </ZoomBtn>
            <ZoomBtn onClick={handleZoomDiagram} $isZoom={isZoom}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </ZoomBtn> */}
          </BtnWrapper>
          {isZoom && (
            <ZoomImg
              src={zoomImg}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          )}
        </DiagramWpper>
        <Contents>
          <Features contents={contents} />
          <Carousel contents={contents} />
          <Application contents={contents} />
        </Contents>
      </Wrapper>
    </>
  );
}

export default DiamondWire;

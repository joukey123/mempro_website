import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { itemsDetail } from "../../../data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import line from "../../../img/line.svg";
import Tap from "../../../components/headers/Tap";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplayIcon from "@mui/icons-material/Replay";
import Cards from "../../../components/article/Cards";
import Chip from "@mui/material/Chip";
import Probe from "../Probe";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useMediaQuery } from "@mui/material";
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
    padding: 0 30px;
  }
`;
const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 800px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const DiagramImg = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  object-position: center center;
  z-index: 99;
  position: absolute;
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;
const Step1 = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 100;
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;
const BtnWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  visibility: ${(props) => props.$isPlay && "hidden"};
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    transform: scale(0.7);
    flex-direction: row;
    z-index: 999;
    right: 10px;
    bottom: 10px;
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
  visibility: ${(props) => props.$isPlay && "hidden"};
  &:hover {
    background-color: tan;
    transition: all 0.2s ease-in-out;
  }
`;

const ZooWrapper = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  height: 750px;
  border-radius: 25px 25px 0 0px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Cards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -70%);
//   color: white;
// `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 180px;
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 1px 5px black;
`;

const CardImg = styled.img`
  width: 170px;
  height: 150px;
  object-fit: contain;
  object-position: center center;
  padding: 5px;
  transform: scale(0.8);
`;

const CardText = styled.span`
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  width: 170px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  text-transform: capitalize;
`;

const ProbeName = styled.span`
  margin-right: 15px;
  cursor: pointer;
  border-top: ${(props) =>
    props.$isClick && `3px solid ${props.theme.colors.blue}`};
`;

const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 15px;
  background: url(${line}) center center;
  background-size: contain;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  @media (max-width: 1023px) {
  }
`;

const Part = styled(motion.img)`
  width: 100%;
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;

const StyledChip = styled(Chip)({
  "&:hover": {
    backgroundColor: "#1976D2", // 원하는 색상으로 변경
    color: "#fff", // 원하는 텍스트 색상으로 변경
  },
});

const Line = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.$isPlay || props.$isZoom) && "hidden"};
`;

const SpanDiv = styled.div`
  opacity: ${(props) => (props.$isPlay ? 0 : 1)};
`;

const Svg = styled.svg`
  visibility: ${(props) => (props.$isPlay || props.$isZoom) && "hidden"};
`;

function Cantilever() {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split("/").filter(Boolean);
  const porbeArray = ["probe", "cantilever", "vertical"];
  const [sublink, setSublink] = useState(paths[2]);
  const { images, contents, item, warning } = itemsDetail[`${sublink}`];
  const [isZoom, setIsZoom] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  useEffect(() => {
    setTriggerAnimation(false);
    const timeout = setTimeout(() => {
      setTriggerAnimation(true);
    }, 10); // Small delay to allow state to reset

    return () => clearTimeout(timeout);
  }, [isMobile]);
  const handleZoomDiagram = () => {
    setIsZoom((prev) => !prev);
  };

  const handleClickProbe = (item) => {
    setSublink(item);
    if (item === "probe") {
      setSublink("probe");
    } else {
      navigate(`/semi/parts/${item}`);
    }
  };
  const handlePlayAnimation = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 4000);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlayAnimation(true);
  //   }, 1000);
  //   setTimeout(() => {
  //     setPlayAnimation(false);
  //   }, 5000);
  // }, []);

  const lines = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <>
      <Wrapper>
        {/* <Tap
          data={porbeArray}
          handleClickProbe={handleClickProbe}
          sublink={sublink}
        /> */}
        <Headline
          item={{ ...itemsDetail[`${sublink}`] }}
          text="
        We provide the necessary parts for the probe card."
        />
        {sublink === "probe" && <Probe images={images} item={item} />}
        {/* {sublink === "probe" && (
          <DiagramWpper>
            <DiagramImg src={images.machine} $isZoom={isZoom} />
            <Step1 src={images.diagram} $isZoom={isZoom} />
            <BtnWrapper $isPlay={playAnimation}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={handleZoomDiagram}
                sx={{ marginBottom: 1 }}
              >
                {isZoom ? <RemoveIcon /> : <AddIcon />}
              </Fab>
              {!isZoom && (
                <Fab
                  color="primary"
                  aria-label="replay"
                  onClick={handlePlayAnimation}
                >
                  <ReplayIcon />
                </Fab>
              )}
            </BtnWrapper>

            <AnimatePresence>
              {isZoom && (
                <ZooWrapper
                  initial={{
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                  }}
                  animate={{ top: "6%" }}
                  exit={{ top: "100%" }}
                  transition={{ duration: 0.1 }}
                >
                  <Cards class="cards">
                    <h1
                      style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 4,
                        textAlign: "center",
                      }}
                    >
                      MEMPro Products
                    </h1>
                    <span
                      style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 4,
                        textAlign: "center",
                        marginTop: -15,
                        marginBottom: 50,
                      }}
                    >
                      {sublink}에 들어가는 부품을 멤프로가 관리하고 있습니다.
                    </span>
                    {item.map((item, index) => (
                      <Card class="card" key={index}>
                        <CardImg src={item.img} />
                        <CardText>{item.title}</CardText>
                      </Card>
                    ))}
                  </Cards>
                </ZooWrapper>
              )}
            </AnimatePresence>
          </DiagramWpper>
        )} */}

        {/* cantilever start */}
        {sublink === "cantilever" && (
          <StructureWarpper>
            <motion.div
              className="part1"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              animate={{
                translateX: playAnimation
                  ? isMobile
                    ? "-50px"
                    : "-200px"
                  : "0",
                translateY: playAnimation
                  ? isMobile
                    ? "100px"
                    : "200px"
                  : "0",
              }}
              transition={{ duration: 2 }}
            >
              {/* <Part
                src={images.part1}
                $isZoom={isZoom}
                initial={false} // Prevents Framer Motion from applying the initial prop on mount
              /> */}
              <Svg
                viewBox="0 0 100 100"
                style={{
                  width: "100%",
                  position: "relative",
                }}
                $isPlay={playAnimation}
                $isZoom={isZoom}
              >
                <motion.line
                  x1={"100"}
                  y1={"50"}
                  x2={"80"}
                  y2={"50"}
                  stroke="black"
                  strokeWidth=".3"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                  className="line"
                />
                <motion.rect
                  x={isMobile ? "10" : "60"}
                  y={isMobile ? "40" : "46"}
                  rx={isMobile ? "5" : "2"} // x 방향의 모서리 반경
                  ry={isMobile ? "5" : "2"} // y 방향의 모서리 반경
                  width={isMobile ? "70" : "20"}
                  height={isMobile ? "20" : "8"}
                  fill="rgba(0,0,0,0.5)" // 배경색 지정
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="rec"
                  onClick={() => navigate("/semi/parts/stiffener")}
                  style={{ cursor: "pointer" }} // 클릭 가능하게 커서 변경
                />
                <motion.text
                  x={isMobile ? "22" : "64"} // SVG 좌표계에서의 x 위치
                  y={isMobile ? "55" : "51"} // SVG 좌표계에서의 y 위치
                  fontSize={isMobile ? 12 : 3}
                  fill="white" // 텍스트 색상
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Stiffener
                </motion.text>
              </Svg>
              <img
                src={images.part1}
                style={{ width: "70%", maxWidth: "600px" }}
              />
            </motion.div>
            <motion.div
              className="part2"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: 100,
                position: "relative",
              }}
              animate={{
                translateX: playAnimation
                  ? isMobile
                    ? "-50px"
                    : "-50px"
                  : "0",
                translateY: playAnimation ? (isMobile ? "100px" : "50px") : "0",
              }}
              transition={{ duration: 2 }}
            >
              {/* <Part
                src={images.part1}
                $isZoom={isZoom}
                initial={false} // Prevents Framer Motion from applying the initial prop on mount
              /> */}

              <img
                src={images.part2}
                style={{
                  width: "100%",
                  height: "100px",
                  maxWidth: "600px",
                  opacity: 0.5,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: isMobile
                    ? "translate(-45%,-100%) scale(.4)"
                    : "translate(-30%,-150%)",
                }}
              />
            </motion.div>
            <motion.div
              className="part3"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: 600,
                position: "relative",
              }}
              animate={{
                translateX: playAnimation
                  ? isMobile
                    ? "-50px"
                    : "-50px"
                  : "0",
                translateY: playAnimation ? (isMobile ? "100px" : "50px") : "0",
              }}
              transition={{ duration: 2 }}
            >
              {/* <Part
                src={images.part1}
                $isZoom={isZoom}
                initial={false} // Prevents Framer Motion from applying the initial prop on mount
              /> */}

              <img
                src={images.part3}
                style={{
                  width: "100%",
                  height: "600px",
                  maxWidth: "600px",
                  opacity: 0.5,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: isMobile
                    ? "translate(-55%,-100%) scale(.7)"
                    : "translate(-50%,-95%)",
                }}
              />
            </motion.div>
            <motion.div
              className="part4"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              animate={{
                translateX: isMobile
                  ? playAnimation
                    ? "200px "
                    : "-20px"
                  : "100px",
                translateY: isMobile
                  ? playAnimation
                    ? "200px "
                    : "-600px"
                  : "-630px",
              }}
              transition={{ duration: 2 }}
            >
              {/* <Part
                src={images.part1}
                $isZoom={isZoom}
                initial={false} // Prevents Framer Motion from applying the initial prop on mount
              /> */}
              <Svg
                viewBox="0 0 100 100"
                style={{
                  width: "100%",
                  position: "relative",
                  order: 2,
                }}
                $isPlay={playAnimation}
                $isZoom={isZoom}
              >
                <motion.line
                  x1={"0"}
                  y1={"60"}
                  x2={"20"}
                  y2={"60"}
                  stroke="black"
                  strokeWidth=".3"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                  className="line"
                />
                <motion.rect
                  x={isMobile ? "20" : "20"}
                  y={isMobile ? "50" : "56"}
                  rx={isMobile ? "5" : "2"} // x 방향의 모서리 반경
                  ry={isMobile ? "5" : "2"} // y 방향의 모서리 반경
                  width={isMobile ? "70" : "20"}
                  height={isMobile ? "20" : "8"}
                  fill="rgba(0,0,0,0.5)" // 배경색 지정
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="rec"
                  onClick={() => navigate("/semi/parts/stiffener")}
                  style={{ cursor: "pointer" }} // 클릭 가능하게 커서 변경
                />
                <motion.text
                  x={isMobile ? "36" : "26"} // SVG 좌표계에서의 x 위치
                  y={isMobile ? "63" : "61"} // SVG 좌표계에서의 y 위치
                  fontSize={isMobile ? 12 : 3}
                  fill="white" // 텍스트 색상
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Probe
                </motion.text>
                <motion.rect
                  x={isMobile ? "20" : "20"}
                  y={isMobile ? "75" : "66"}
                  rx={isMobile ? "5" : "2"} // x 방향의 모서리 반경
                  ry={isMobile ? "5" : "2"} // y 방향의 모서리 반경
                  width={isMobile ? "70" : "20"}
                  height={isMobile ? "20" : "8"}
                  fill="rgba(0,0,0,0.5)" // 배경색 지정
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="rec"
                  onClick={() => navigate("/semi/parts/stiffener")}
                  style={{ cursor: "pointer" }} // 클릭 가능하게 커서 변경
                />
                <motion.text
                  x={isMobile ? "33" : "25"} // SVG 좌표계에서의 x 위치
                  y={isMobile ? "89" : "71"} // SVG 좌표계에서의 y 위치
                  fontSize={isMobile ? 12 : 3}
                  fill="white" // 텍스트 색상
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  PI-Tube
                </motion.text>
              </Svg>
              <img
                src={images.part4}
                style={{ width: "70%", maxWidth: "600px" }}
              />
            </motion.div>
            {/* <Part
              src={images.part2}
              $isPlay={playAnimation}
              animate={
                triggerAnimation
                  ? {
                      translateX: isMobile ? 10 : 60 + 50,
                      translateY: isMobile ? 50 : 100,
                      scale: 0.15,
                      opacity: 0.2,
                    }
                  : {}
              }
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            /> */}
            {/* <Part
              src={images.part3}
              $isPlay={playAnimation}
              animate={
                triggerAnimation
                  ? {
                      translateX: isMobile ? 0 : -50 + 50,
                      translateY: isMobile ? 100 : 220,
                      scale: isMobile ? 0.7 : 0.8,
                      opacity: 0.2,
                    }
                  : {}
              }
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            /> */}
            {/* <Part
              src={images.part4}
              $isPlay={playAnimation}
              animate={
                triggerAnimation
                  ? {
                      translateX: isMobile ? -60 : -180 + 50,
                      translateY: isMobile ? 210 : 400,
                      scale: isMobile ? 0.4 : 0.5,
                      rotate: 5,
                    }
                  : {}
              }
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            /> */}

            {/* LINE */}
            {/* <Line style={{}} $isPlay={playAnimation} $isZoom={isZoom}>
              <svg
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.line
                  x1={isMobile ? "48%" : "33%"}
                  y1={isMobile ? "80%" : "600"}
                  x2={isMobile ? "70%" : "20%"}
                  y2={isMobile ? "80%" : "600"}
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
                {isMobile ? null : (
                  <motion.line
                    x1="31%"
                    y1="550"
                    x2="22%"
                    y2="550"
                    stroke="black"
                    stroke-width="1"
                    variants={lines}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                  />
                )}
              </svg>
              <SpanDiv $isPlay={playAnimation}>
                <motion.span
                  style={{
                    position: "absolute",
                    top: isMobile ? "48%" : "73%",
                    left: isMobile ? "70%" : "14%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/cprobe`}>
                    <StyledChip label="Probe" />
                  </Link>
                </motion.span>

                <motion.span
                  style={{
                    position: "absolute",
                    top: isMobile ? "53%" : "67%",
                    left: isMobile ? "70%" : "15%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/tube`}>
                    <StyledChip label="PI-Tube" />
                  </Link>
                </motion.span>
              </SpanDiv>
            </Line> */}

            {/* cantilever animation start */}

            <BtnWrapper $isPlay={playAnimation}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={handleZoomDiagram}
                sx={{ marginBottom: 1 }}
                className="btn1"
              >
                {isZoom ? (
                  <ExpandMoreOutlinedIcon />
                ) : (
                  <ExpandLessOutlinedIcon />
                )}
              </Fab>
              {!isZoom && (
                <Fab
                  color="primary"
                  aria-label="replay"
                  onClick={handlePlayAnimation}
                >
                  <PlayArrowIcon />
                </Fab>
              )}
            </BtnWrapper>

            <AnimatePresence>
              {isZoom && (
                <ZooWrapper
                  initial={{
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                  }}
                  animate={{ top: "6%" }}
                  exit={{ top: "100%" }}
                  transition={{ duration: 0.1 }}
                >
                  {/* <Cards class="cards">
                    <h1
                      style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 4,
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    >
                      MEMPro Products
                    </h1>
                    <span
                      style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 4,
                        textAlign: "center",
                        marginTop: -15,
                        marginBottom: 50,
                        fontSize: 16,
                      }}
                    >
                      {sublink}에 들어가는 부품을 멤프로가 관리하고 있습니다.
                    </span>

                    {item.map((item, index) => (
                      <Card class="card" key={index}>
                        <CardImg src={item.img} />
                        <CardText>{item.title}</CardText>
                      </Card>
                    ))}
                  </Cards> */}
                  {item.map((item, index) => (
                    <Cards title={item.title} img={item.img} link={item.link} />
                  ))}
                </ZooWrapper>
              )}
            </AnimatePresence>
          </StructureWarpper>
        )}

        {/* cantilever end */}
      </Wrapper>
    </>
  );
}

export default Cantilever;

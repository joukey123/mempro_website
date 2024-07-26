import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { itemsDetail } from "../../../data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
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
  height: 800px;
  margin: 0 auto;
  border-radius: 15px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Part = styled(motion.img)`
  position: absolute;
  width: 100%;
  max-width: 500px;
  visibility: ${(props) => props.$isPlay && "hidden"};
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;

const StyledChip = styled(Chip)({
  "&:hover": {
    backgroundColor: "#1976D2", // 원하는 색상으로 변경
    color: "#fff", // 원하는 텍스트 색상으로 변경
  },
});
function Cantilever() {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split("/").filter(Boolean);
  const porbeArray = ["probe", "cantilever", "vertical"];
  const [sublink, setSublink] = useState(paths[2]);
  const { images, contents, item, warning } = itemsDetail[`${sublink}`];
  const [isZoom, setIsZoom] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

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

  return (
    <>
      <Wrapper>
        <Tap
          data={porbeArray}
          handleClickProbe={handleClickProbe}
          sublink={sublink}
        />
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
            <DiagramImg src={images.machine} $isZoom={isZoom} />

            <Part
              src={images.part1}
              $isPlay={playAnimation}
              initial={{
                translateX: 150 + 50,
                translateY: -20,
                scale: 0.8,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />

            <Part
              src={images.part2}
              $isPlay={playAnimation}
              initial={{
                translateX: 60 + 50,
                translateY: 100,
                scale: 0.15,
                opacity: 0.2,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part3}
              $isPlay={playAnimation}
              initial={{
                translateX: -50 + 50,
                translateY: 220,
                scale: 0.8,
                opacity: 0.2,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part4}
              $isPlay={playAnimation}
              initial={{
                translateX: -180 + 50,
                translateY: 400,
                scale: 0.5,
                rotate: 5,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Line style={{}} $isPlay={playAnimation} $isZoom={isZoom}>
              <svg
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.line
                  x1="53%"
                  y1="200"
                  x2="40%"
                  y2="200"
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
                <motion.line
                  x1="33%"
                  y1="600"
                  x2="20%"
                  y2="600"
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
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
              </svg>
              <SpanDiv $isPlay={playAnimation}>
                <motion.span
                  style={{
                    position: "absolute",
                    top: 185,
                    left: "32.5%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/stiffener`}>
                    <StyledChip label="Stiffener" />
                  </Link>
                </motion.span>
                <motion.span
                  style={{
                    position: "absolute",
                    top: 585,
                    left: "14%",
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
                    top: 535,
                    left: "15%",
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
            </Line>
            {/* cantilever animation start */}
            {playAnimation && (
              <>
                <Part
                  src={images.part1}
                  $isZoom={isZoom}
                  initial={{
                    translateX: 150 + 50,
                    translateY: -20,
                    scale: 0.8,
                  }}
                  animate={{
                    translateX: 50 - 60 + 50,
                    translateY: 80 + 50,
                    scale: 0.8,
                    zIndex: 99,
                  }}
                  transition={{ duration: 2 }}
                />
                <Part
                  src={images.part2}
                  $isZoom={isZoom}
                  initial={{
                    translateX: 60 + 50,
                    translateY: 100,
                    scale: 0.15,
                  }}
                  animate={{
                    translateX: 50 - 60 + 50,
                    translateY: 90 + 50,
                    scale: 0.15,
                    rotate: -4,
                    zIndex: 98,
                  }}
                  transition={{ duration: 2 }}
                />
                <Part
                  src={images.part3}
                  $isZoom={isZoom}
                  initial={{
                    translateX: -50 + 50,
                    translateY: 220,
                    scale: 0.8,
                  }}
                  animate={{
                    translateX: 50 - 60 + 50,
                    translateY: 90 + 50,
                    scale: 0.8,
                    zIndex: 97,
                  }}
                  transition={{ duration: 2 }}
                />
                <Part
                  src={images.part4}
                  $isZoom={isZoom}
                  initial={{
                    translateX: -180 + 50,
                    translateY: 400,
                    scale: 0.5,
                    rotate: 5,
                  }}
                  animate={{
                    translateX: -30 - 60 + 50 + 20,
                    translateY: 220 + 50 - 20,
                    scale: 0.5,
                    rotate: 10,
                    zIndex: 96,
                  }}
                  transition={{ duration: 2 }}
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

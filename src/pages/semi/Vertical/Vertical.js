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
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Background from "three/examples/jsm/renderers/common/Background.js";
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
  max-width: 750px;
  height: 850px;
  border-radius: 8px 8px 0 0px;
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

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 170px;
//   height: 180px;
//   background-color: ${(props) => props.theme.colors.white};
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 1px 1px 5px black;
// `;

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
const SpanDiv = styled.div`
  opacity: ${(props) => (props.$isPlay ? 0 : 1)};
`;
function Vertical() {
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
  const CardsWarpper = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    background-color: aqua;
  `;
  return (
    <>
      <Wrapper>
        {/* <div
          style={{
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            marginBottom: 30,
          }}
        >
          {porbeArray.map((item, index) => (
            <ProbeName
              key={index}
              onClick={() => handleClickProbe(item)}
              $isClick={sublink === item}
            >
              {item !== "probe" ? (
                <Link to={`/semi/parts/${porbeArray[index]}`}>{item}</Link>
              ) : (
                item
              )}
            </ProbeName>
          ))}
        </div> */}

        <Tap
          data={porbeArray}
          handleClickProbe={handleClickProbe}
          sublink={sublink}
        />
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        {sublink === "probe" && <Probe images={images} item={item} />}
        {/* vertical start */}
        {sublink === "vertical" && (
          <StructureWarpper>
            <DiagramImg src={images.machine} $isZoom={isZoom} />
            <Part
              src={images.part1}
              $isPlay={playAnimation}
              initial={{
                translateX: 200,
                translateY: -100 + 50,
                scale: 0.8,
                zIndex: 10,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part2}
              $isPlay={playAnimation}
              initial={{
                translateX: 120,
                translateY: 20 + 50,
                scale: 0.2,
                opacity: 0.2,
                zIndex: 9,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part3}
              $isPlay={playAnimation}
              initial={{
                translateX: 100,
                translateY: 40 + 50,
                scale: 0.15,
                opacity: 1,
                zIndex: 8,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part4}
              $isPlay={playAnimation}
              initial={{
                translateX: 30,
                translateY: 120 + 50,
                rotate: 5,
                scale: 0.85,
                zIndex: 7,
                opacity: 0.2,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part5}
              $isPlay={playAnimation}
              initial={{
                translateX: -80,
                translateY: 300 + 50,
                scale: 0.4,
                zIndex: 6,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part6}
              $isPlay={playAnimation}
              initial={{
                translateX: -120,
                translateY: 350 + 50,
                scale: 0.3,
                opacity: 0.2,

                zIndex: 6,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part7}
              $isPlay={playAnimation}
              initial={{
                translateX: -150,
                translateY: 380 + 50,
                scale: 0.24,
                opacity: 1,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part8}
              $isPlay={playAnimation}
              initial={{
                translateX: -180,
                translateY: 430 + 50,
                scale: 0.3,
                opacity: 1,
              }}
              transition={{ duration: 2 }}
              $isZoom={isZoom}
            />
            <Part
              src={images.part9}
              $isPlay={playAnimation}
              initial={{
                translateX: -250,
                translateY: 410 + 50,
                scale: 0.3,
                opacity: 1,
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
                  x1="55%"
                  y1="150"
                  x2="39%"
                  y2="150"
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
                <motion.line
                  x1="35%"
                  y1="490"
                  x2="25%"
                  y2="490"
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
                <motion.line
                  x1="31%"
                  y1="590"
                  x2="21%"
                  y2="590"
                  stroke="black"
                  stroke-width="1"
                  variants={lines}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                />
                <motion.line
                  x1="30%"
                  y1="750"
                  x2="50%"
                  y2="750"
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
                    top: 135,
                    left: "31.5%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/vstiffener`}>
                    <StyledChip label="Stiffener" />
                  </Link>
                </motion.span>

                <motion.span
                  style={{
                    position: "absolute",
                    top: 475,
                    left: "14%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/ceramic`}>
                    <StyledChip label="Ceramic Hole" />
                  </Link>
                </motion.span>
                <motion.span
                  style={{
                    position: "absolute",
                    top: 575,
                    left: "6%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/ceramic`}>
                    <StyledChip label="Ceramic Guide Plate" />
                  </Link>
                </motion.span>
                <motion.span
                  style={{
                    position: "absolute",
                    top: 735,
                    left: "50%",
                    fontSize: 18,
                  }}
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible" }}
                  transition={{ delay: 1.5 }}
                >
                  <Link to={`/semi/parts/vprobe`}>
                    <StyledChip label="Cobra, Wire, Short, PEMS" />
                  </Link>
                </motion.span>
              </SpanDiv>
            </Line>
            {/* vertical animation start */}
            {playAnimation && (
              <>
                <Part
                  src={images.part1}
                  initial={{
                    translateX: 200,
                    translateY: -100 + 50,
                    scale: 0.8,
                    zIndex: 10,
                  }}
                  animate={{
                    translateX: 200 - 150,
                    translateY: -100 + 230 + 50,
                    scale: 0.8,
                    zIndex: 10,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />

                <Part
                  src={images.part2}
                  initial={{
                    translateX: 120,
                    translateY: 20 + 50,
                    scale: 0.2,
                    opacity: 1,
                    zIndex: 9,
                  }}
                  animate={{
                    translateX: 120 - 85,
                    translateY: 15 + 165 + 50,
                    scale: 0.2,
                    opacity: 1,
                    zIndex: 9,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part3}
                  initial={{
                    translateX: 100,
                    translateY: 40 + 50,
                    scale: 0.15,
                    opacity: 1,
                    zIndex: 8,
                  }}
                  animate={{
                    translateX: 100 - 70,
                    translateY: 40 + 135 + 50,
                    scale: 0.15,
                    opacity: 1,
                    zIndex: 8,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part4}
                  initial={{
                    translateX: 30,
                    translateY: 120 + 50,
                    rotate: 5,
                    scale: 0.85,
                    zIndex: 7,
                  }}
                  animate={{
                    translateX: 30,
                    translateY: 120 + 20 + 50,
                    rotate: 5,
                    scale: 0.85,
                    zIndex: 7,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part5}
                  initial={{
                    translateX: -80,
                    translateY: 300 + 50,
                    scale: 0.4,
                    zIndex: 6,
                  }}
                  animate={{
                    translateX: -80 + 50,
                    translateY: 300 - 20 + 50,
                    scale: 0.4,
                    zIndex: 6,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part6}
                  initial={{
                    translateX: -120,
                    translateY: 350 + 50,
                    scale: 0.3,
                    opacity: 1,
                    zIndex: 5,
                  }}
                  animate={{
                    translateX: -120 + 80,
                    translateY: 350 - 50 + 50,
                    scale: 0.3,
                    opacity: 1,
                    zIndex: 5,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part7}
                  initial={{
                    translateX: -150,
                    translateY: 380 + 50,
                    scale: 0.24,
                    opacity: 1,
                    zIndex: 3,
                  }}
                  animate={{
                    translateX: -150 + 110,
                    translateY: 380 - 80 + 50,
                    scale: 0.24,
                    opacity: 1,
                    zIndex: 3,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part8}
                  initial={{
                    translateX: -180,
                    translateY: 430 + 50,
                    scale: 0.3,
                    opacity: 1,
                    zIndex: 2,
                  }}
                  animate={{
                    translateX: -180 + 140,
                    translateY: 430 - 110 + 40,
                    scale: 0.3,
                    opacity: 1,
                    zIndex: 2,
                  }}
                  transition={{ duration: 2 }}
                  $isZoom={isZoom}
                />
                <Part
                  src={images.part9}
                  initial={{
                    translateX: -250,
                    translateY: 410 + 50,
                    scale: 0.3,
                    opacity: 1,
                  }}
                  animate={{
                    translateX: -250 + 150,
                    translateY: 410 - 140 + 40,
                    scale: 0.3,
                    opacity: 1,
                  }}
                  transition={{ duration: 2 }}
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

        {/* vertical end */}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Vertical;

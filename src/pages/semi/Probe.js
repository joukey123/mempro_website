import styled from "styled-components";
import Headline from "../../components/article/Headline";
import { itemsDetail } from "../../data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import line from "../../img/line.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplayIcon from "@mui/icons-material/Replay";
import Cards from "../../components/article/Cards";

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
// const BtnWrapper = styled.div`
//   position: absolute;
//   right: 50px;
//   bottom: 50px;
// `;
const BtnWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
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
  height: 750px;
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
  margin-bottom: 80px;
`;

const Part = styled(motion.img)`
  position: absolute;
  width: 100%;
  max-width: 500px;
  visibility: ${(props) => props.$isPlay && "hidden"};
  filter: ${(props) => props.$isZoom && "blur(10px)"};
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

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Probe({ images, item }) {
  const [isZoom, setIsZoom] = useState(false);

  const handleZoomDiagram = () => {
    setIsZoom((prev) => !prev);
  };

  return (
    <>
      <DiagramWpper>
        <DiagramImg src={images.machine} $isZoom={isZoom} />
        <Step1 src={images.diagram} $isZoom={isZoom} />
        <BtnWrapper>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleZoomDiagram}
            sx={{ marginBottom: 1 }}
          >
            {isZoom ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
          </Fab>
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
                  </Cards> */}
              <CardWrapper>
                {item.map((item, index) => (
                  <Cards title={item.title} img={item.img} link={item.link} />
                ))}
              </CardWrapper>
            </ZooWrapper>
          )}
        </AnimatePresence>
      </DiagramWpper>
    </>
  );
}

export default Probe;

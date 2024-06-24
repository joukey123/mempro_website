import styled from "styled-components";
import Headline from "../../components/article/Headline";
import { itemsDetail } from "../../data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import line from "../../img/line.svg";

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
  margin-bottom: 80px;
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
  height: 850px;
  border-radius: 25px 25px 0 0px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  color: white;
`;

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
function Probe() {
  const location = useLocation();
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
  };
  const handlePlayAnimation = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => {
      setPlayAnimation(true);
    }, 1000);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 5000);
  }, []);

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

  return (
    <>
      <Wrapper>
        <div
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
              <Link to={`/semi/parts/${sublink}`}>{item}</Link>
            </ProbeName>
          ))}
        </div>
        <Headline
          item={{ ...itemsDetail[`${sublink}`] }}
          text="
        We provide the necessary parts for the probe card."
        />

        {sublink === "probe" && (
          <DiagramWpper>
            <DiagramImg src={images.machine} $isZoom={isZoom} />
            <Step1 src={images.diagram} $isZoom={isZoom} />
            <BtnWrapper>
              <ZoomBtn onClick={handleZoomDiagram} $isZoom={isZoom}>
                <i class="fa-solid fa-plus"></i>
              </ZoomBtn>
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
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Probe;

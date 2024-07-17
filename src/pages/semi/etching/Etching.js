import styled, { keyframes } from "styled-components";
import { itemsDetail } from "../../../data";
import Headline from "../../../components/article/Headline";
import Footer from "../../../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import zoomImg from "../../../img/etching/etching_3d.svg";
import circle_ex from "../../../img/ circle_ex.svg";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Fab from "@mui/material/Fab";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ContentsTitle from "../../../components/ContentsTitle";
import Features from "../../../components/Features";
import { Collapse, Button, ButtonGroup, Box } from "@mui/material";

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
  height: 850px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const DiagramImg = styled(motion.img)`
  width: 100%;
  max-width: 450px;
  object-fit: contain;
  object-position: center center;
  z-index: 99;
  position: absolute;
  animation-duration: 0.5s;
  filter: ${(props) => props.$isZoom && "blur(10px)"};
  top: 30px;
`;
const Step1 = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 1000px;
  height: 600px;
  background: url(${(props) => props.$src}) no-repeat center;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;

const Step2 = styled.img`
  width: 100%;
  max-width: 400px;
  height: 50px;
  z-index: 1000;
  top: 70%;
  left: 50%;
  opacity: 1;
  position: absolute;
  animation: moving 1s ease-in-out infinite;
  animation-delay: 2s;
  visibility: ${(props) => props.$isZoom && "hidden"};
  transform: translate(-50%, -60%) scale(1.1);
  @keyframes moving {
    from {
      opacity: 0;
      transform: translate(-50%, -60%) scale(1.1);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -20%) scale(1.1);
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
const IconWrapper = styled.div`
  .img0 {
    transform: scale(0.8);
  }
`;
const Icon = styled.img`
  width: 150px;
  height: 150px;
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
const ContentsWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(${(props) => props.$length}, auto);
  font-size: 14px;
  text-align: center;
  gap: 120px;
  text-transform: capitalize;
`;
const MaterialTextWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const MaterialText = styled.span`
  color: ${(props) =>
    props.$isClick ? props.theme.colors.blue : props.theme.colors.gray};
  font-weight: ${(props) => (props.$isClick ? "bold" : "300")};
  cursor: pointer;
  padding: 0 20px;
  &:not(:last-child) {
    border-right: 0.5px solid black;
  }
`;

const MaterialImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
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
const ZoomImg = styled.img`
  width: 100%;
  max-width: 700px;
  height: 650px;
  position: relative;
  top: -5%;
`;

const StyledButton = styled(Button)``;
function Etching() {
  const sublink = "etching";
  const { images, contents } = itemsDetail[`${sublink}`];
  const [selectMaterial, setSelectMaterial] = useState(0);
  const [isZoom, setIsZoom] = useState(false);
  const [selectImg, setSelectImg] = useState(
    contents.material[selectMaterial].images
  );
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };

  const handleClickMaterial = (text, index) => {
    setSelectMaterial(index);
    const selectArray = contents.material.find((item) => item.text === text);
    setSelectImg(selectArray ? selectArray.images : []);
  };

  const handleZoomDiagram = () => {
    setIsZoom((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <DiagramWpper>
          <DiagramImg
            src={images.machine}
            $isZoom={isZoom}
            initial={{ scale: 0.8 }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              transform: " translate(-50%,-50%) scale(.9)",
              zIndex: 99,
            }}
          >
            <Step1
              $src={images.diagram}
              // initial={{
              //   opacity: 0,
              //   transform: "translate(-50%,-50%) scale(0)",
              // }}
              // animate={{
              //   opacity: 1,
              //   transform: "translate(-50%,-50%) scale(1.3)",
              // }}
              $isZoom={isZoom}
            >
              <Step2 src={images.step1} $isZoom={isZoom} />
            </Step1>
          </div>

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
                <ZoomImg src={zoomImg} />
              </ZooWrapper>
            )}
          </AnimatePresence>
        </DiagramWpper>
        <Alert
          severity="info"
          sx={{ width: "100%", maxWidth: 1100, margin: "20px auto" }}
        >
          <AlertTitle>Info</AlertTitle>
          We are able to produce the product based on drawings or actual
          measurements.
        </Alert>
        <Contents>
          <Features contents={contents} maxWidth={600} />

          <div className="material" style={{ marginTop: "150px" }}>
            <ContentsTitle title={"Material"} onData={showContent} />
            <Collapse in={expendClicked}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonGroup
                  variant="text"
                  aria-label="Basic button group"
                  sx={{ marginBottom: 5 }}
                >
                  {contents.material.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => handleClickMaterial(item.text, index)}
                      $isClick={index === selectMaterial}
                      disabled={index === selectMaterial}
                    >
                      {item.text}
                    </Button>
                  ))}
                </ButtonGroup>
                <ContentsWrapper
                  $length={selectImg.length}
                  style={{ rowGap: 1, columnGap: 30 }}
                >
                  {selectImg.map((item) => (
                    <div style={{ position: "relative" }}>
                      <MaterialImg src={item.img} />
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          color: "white",
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  ))}
                </ContentsWrapper>
              </Box>
            </Collapse>
          </div>
        </Contents>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Etching;

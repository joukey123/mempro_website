import styled, { keyframes } from "styled-components";
import growth from "../../img/growth.svg";
import award from "../../img/award.svg";
import output from "../../img/output.svg";
import CountUp from "react-countup/";
import commit from "../../img/commitment.svg";
import trust from "../../img/trust.svg";
import Footer from "../../components/Footer";
import Ci0 from "../../img/0.svg";
import Ci1 from "../../img/1.svg";
import Ci2 from "../../img/2.svg";
import Ci3 from "../../img/3.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 8%;
`;
const Img = styled.div`
  background: url(${(props) => props.$url}) no-repeat center bottom;
  width: 150px;
  height: 150px;
  margin-bottom: 40px;
`;
const Title = styled.h1`
  width: 220px;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 5px;
  color: ${(props) => props.$color};
`;
const Text = styled.span`
  font-size: 1rem;
`;
const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;
const BlackBox = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50px;
  color: white;
  padding: 0px 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 35px;
`;
const StyleTitle = styled.h1`
  font-size: 3rem;
  font-family: "Abril Fatface", cursive;
  margin-bottom: 20px;
`;
const Dec = styled.p`
  width: 45%;
  text-align: center;
  letter-spacing: -0.5px;
`;
const ValueImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const ValueBox = styled.div`
  width: 100%;
  max-width: 900px;
  height: 250px;
  background: linear-gradient(to right, #6698fa, #004ea2);
  border-radius: 35px;
  position: relative;
  &:last-child {
    margin-top: 30px;
  }
`;
const Illust = styled.div`
  width: 50%;
  height: 100%;
  border-radius: ${(props) =>
    props.$left ? "0 35px 35px 0" : "35px 0 0px 35px"};
  background: url(${(props) => props.$url}) no-repeat center center;
  background-size: cover;
  background-color: white;
  position: absolute;
  ${(props) => (props.$left ? `right:0` : `left:0`)}
`;
const TextBox = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  width: 50%;
  height: 100%;
  font-size: 1.5rem;
  span {
    margin: 3% 0;
    font-weight: 400;
  }
`;

const CiWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 150px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const CiImgWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 1%;
`;
const CiImgBox = styled.div`
  width: 100%;
  max-width: 900px;
  height: 350px;
  border-radius: 50px;
  border: 0.7px solid #a1a1a1;
  background: url(${(props) => props.$url});
`;
const CiImgNav = styled.div`
  width: 100%;
  max-width: 900px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CiBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.blue : "#d9d9d9"};
  margin: 0 0.5%;
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
const ColorBoxWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const ColorBox = styled.div`
  width: 250px;
  height: 100px;
  background-color: ${(props) => props.$bg};
  border-radius: 25px;
  position: relative;
  color: white;
  border: 0.5px solid #a1a1a1;
  cursor: pointer;
`;
const CopyMessage = styled(motion.div)`
  position: absolute;
  top: 55%;
  left: 50%;
  background-color: ${(props) =>
    props.$number === 3 || props.$number === 4
      ? "rgba(0,0,0,0.5)"
      : "rgba(255, 255, 255, 0.5)"};
  text-align: center;
  padding: 10px 0;
  width: 40%;
  border-radius: 15px;
  font-size: 0.8rem;
`;
function Brand() {
  const CiImages = [Ci0, Ci1, Ci2, Ci3];
  const Color = [
    "#004EA2",
    "#0068B7",
    "#A99800",
    "#FFFFFF",
    "#D5D5D6",
    "#303030",
  ];
  const [index, setIndex] = useState(0);
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);
  const copyColorNumber = (item) => {
    navigator.clipboard.writeText(item);
  };
  return (
    <>
      <Wrapper>
        <Info>
          <Box>
            <Img $url={growth} />
            <Title $color={"#EE7D19"}>
              <CountUp end={70} duration={3} />% +
            </Title>
            <Text>Growth rate</Text>
          </Box>
          <Box>
            <Img $url={award} style={{ transform: "scale(1.2)" }} />
            <Title $color={"#024D91"}>
              <CountUp end={4000000} duration={3} /> +
            </Title>
            <Text>Export Achievement</Text>
          </Box>
          <Box>
            <Img $url={output} style={{ transform: "translateX(20px)" }} />
            <Title $color={"#008B3E"}>
              <CountUp end={9000000} duration={3} /> +
            </Title>
            <Text>Probe Output</Text>
          </Box>
        </Info>
        <ValueWrapper>
          <BlackBox>핵심가치</BlackBox>
          <StyleTitle>Commitment & Trust</StyleTitle>
          <Dec>
            주식회사 멤프로는 반도체 & 무역 산업의 선두주자로서, 고객과 신뢰의
            바탕으로 최고의 품질과 서비스를 약속드립니다. 혁식을 통해 미래를
            함께 열어갑니다.
          </Dec>

          <ValueImgWrapper>
            <ValueBox>
              <Illust $url={commit} />
              <TextBox>
                <span>약속</span>
                <span>Commitment</span>
                <span>承诺</span>
              </TextBox>
            </ValueBox>
            <ValueBox>
              <TextBox style={{ left: "0" }}>
                <span>신뢰</span>
                <span>Trust</span>
                <span>相信</span>
              </TextBox>
              <Illust $url={trust} $left={true} />
            </ValueBox>
          </ValueImgWrapper>
        </ValueWrapper>
        <CiWrapper>
          <BlackBox>CI</BlackBox>
          <SliderWrapper>
            <CiBtn
              onClick={() => {
                setIndex((prev) =>
                  prev === 0 ? CiImages.length - 1 : prev - 1
                );
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </CiBtn>
            <CiImgWrapper>
              <CiImgBox $url={CiImages[index]}></CiImgBox>
              <CiImgNav>
                {CiImages.map((item, itemIndex) => (
                  <Circle key={item} $isActive={itemIndex === index} />
                ))}
              </CiImgNav>
            </CiImgWrapper>
            <CiBtn
              onClick={() => {
                setIndex((prev) =>
                  prev === CiImages.length - 1 ? 0 : prev + 1
                );
              }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </CiBtn>
          </SliderWrapper>
          <Dec style={{ width: "650px" }}>
            약속과 신뢰를 시각적으로 나타내며, 정육각형을 통해 고객사와의 균형과
            조화를 상징하며 글로벌 비즈니스와 다양한 거래를 조화롭게 관리하는
            능력을 표현합니다. <br></br> 로고에 포함된 'M'자는 멤프로가 글로벌
            무대에서 중심적인 역할을 하는 리더십을 상징합니다.
          </Dec>
          <ColorBoxWrapper>
            {Color.map((item, index) => (
              <ColorBox
                key={index}
                $bg={item}
                onMouseOver={() => setHoveredColorIndex(index)}
                onMouseLeave={() => setHoveredColorIndex(null)}
                onClick={() => copyColorNumber(item)}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "20px",
                    color:
                      item === "#FFFFFF" || item === "#D5D5D6"
                        ? "black"
                        : "white",
                  }}
                >
                  {item}
                </span>
                <AnimatePresence>
                  {hoveredColorIndex === index && (
                    <CopyMessage
                      initial={{
                        scale: 0,
                        translateX: -50,
                        translateY: -20,
                        opacity: 0,
                      }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{
                        scale: 0,
                        translateX: -50,
                        translateY: -20,
                        opacity: 0,
                      }}
                      $number={index}
                    >
                      색상 복사
                    </CopyMessage>
                  )}
                </AnimatePresence>
              </ColorBox>
            ))}
          </ColorBoxWrapper>
        </CiWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Brand;

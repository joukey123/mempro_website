import styled, { keyframes } from "styled-components";
import growth from "../../img/growth.svg";
import expor from "../../img/export.svg";
import trade from "../../img/trade.svg";
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
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Snackbar from "@mui/material/Snackbar";
import { useSwipeable } from "react-swipeable";
import Clipboard from "clipboard";
import useAnimateOnInView from "../../Hook/useAnimationOnInView";
import useTranslation from "../../Hook/useTranslation";

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

  @media (max-width: 1023px) {
    overflow: hidden;
    width: 100%;
    margin-bottom: 0px;
    margin: 50px 0;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 8%;
  @media (max-width: 1023px) {
    margin: 0;
    width: 33%;
    transform: scale(0.55);
  }
`;
const Img = styled.div`
  background: url(${(props) => props.$url}) no-repeat center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background-size: contain;
`;
const Title = styled.h1`
  width: 220px;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 5px;
  color: ${(props) => props.$color};
  span {
    font-size: 32px;
  }
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: lighter;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 24px;
    text-align: center;
    margin-top: 5px;
  }
`;
const ValueWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
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
  margin-bottom: 15px;
  @media (max-width: 1023px) {
    margin-bottom: 18px;
  }
`;
const StyleTitle = styled.h1`
  font-size: 3rem;
  font-family: "Abril Fatface", cursive;
  src: url("path-to-font.woff2") format("woff2"),
    url("path-to-font.woff") format("woff");
  font-display: swap;
  margin-bottom: 20px;
  @media (max-width: 1023px) {
    width: 100%;
    text-align: center;
    letter-spacing: -3px;
    font-size: 38px;
  }
`;
const Dec = styled.p`
  width: 50%;
  text-align: center;
  font-size: 18px;

  @media (max-width: 1023px) {
    width: 90%;
  }
`;
const ValueImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 1023px) {
    transform: scale(0.8);
    margin-top: 0px;
  }
`;
const ValueBox = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  height: 250px;
  background: linear-gradient(to right, #6698fa, #004ea2);
  border-radius: 15px;
  position: relative;
  &:last-child {
    margin-top: 30px;
  }
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 1023px) {
    height: 180px;
  }
`;
const Illust = styled.div`
  width: 50%;
  height: 100%;
  border-radius: ${(props) =>
    props.$left ? "0 15px 15px 0" : "15px 0 0px 15px"};
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
    font-size: 24px;
  }
`;

const CiWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
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
  border-radius: 15px;
  border: 0.7px solid #a1a1a1;
  background: url(${(props) => props.$url}) no-repeat center;
  background-size: cover;
  @media (max-width: 1023px) {
    width: 80%;
    height: 180px;
    border-radius: 15px;
  }
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
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
  @media (max-width: 1023px) {
    display: none;
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
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    gap: 10px;
  }
`;

const ColorBox = styled(motion.div)`
  width: 250px;
  height: 100px;
  background-color: ${(props) => props.$bg};
  border-radius: 12px;
  position: relative;
  color: white;
  border: 0.5px solid #a1a1a1;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 150px;
    border-radius: 12px;
    height: 80px;
  }
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
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 0.8rem;
  transform: translate(-50%, -50%) !important;
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
  const [snakBarOpen, setSnakBarOpen] = useState(false);

  // const copyColorNumber = async (item) => {
  //   try {
  //     await navigator.clipboard.writeText(item);
  //     console.log(item);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setSnakBarOpen(true);
  // };
  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  const {
    ref: childRef,
    controls: childControls,
    animateVariants: childVariants,
  } = useAnimateOnInView(0, 0.3);
  const copyColorNumber = (item) => {
    const clipboard = new Clipboard(".copy-btn", {
      text: () => item,
    });
    clipboard.on("success", () => {
      setSnakBarOpen(true);
      clipboard.destroy();
    });
    clipboard.on("error", (e) => {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
      clipboard.destroy();
    });
  };
  const handleClose = () => {
    setSnakBarOpen(false);
  };
  const handleSwipedLeft = () => {
    setIndex((prev) => (prev === 0 ? CiImages.length - 1 : prev - 1));
  };
  const handleSwipedRight = () => {
    setIndex((prev) => (prev === CiImages.length - 1 ? 0 : prev + 1));
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // 마우스로도 슬라이드할 수 있도록 함
  });
  const { selectedLanguage } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  const valuesMessage = {
    eng: " We lead in semiconductor and trade industries, delivering top quality and service with customer trust. Through innovation, we shape the future with our clients.",
    kor: "우리는 반도체 및 무역 산업에서 선도하며, 고객 신뢰와 함께 최고의 품질과 서비스를 제공합니다. 혁신을 통해 우리는 고객과 함께 미래를 형성합니다.",
    cn: "我们在半导体和贸易行业中处于领先地位，通过客户信任提供卓越的质量和服务。通过创新，我们与客户共同塑造未来。",
    jp: "私たちは半導体および貿易業界でリードしており、顧客の信頼をもとに最高の品質とサービスを提供しています。革新を通じて、私たちは顧客とともに未来を形作ります。",
  };

  const logoMessage = {
    eng: "The logo visually represents commitment and trust, symbolizing balance and harmony with clients through a hexagon. The ‘M’ signifies Mempro’s leadership on the global stage.",
    kor: "로고는 헥사곤을 통해 고객과의 균형과 조화를 상징하며, 헌신과 신뢰를 시각적으로 표현합니다. ‘M’은 Mempro의 글로벌 무대에서의 리더십을 나타냅니다.",
    cn: "该标志通过六边形象征与客户之间的平衡与和谐，直观地代表了承诺与信任。‘M’代表了Mempro在全球舞台上的领导地位。",
    jp: "ロゴはヘキサゴンを通じて、顧客とのバランスと調和を象徴し、コミットメントと信頼を視覚的に表現しています。‘M’はMemproのグローバルな舞台でのリーダーシップを意味しています。",
  };
  return (
    <>
      <Wrapper>
        <Info>
          <Box>
            <Img $url={growth} />
            <Title $color={"#46CC6B"}>
              <CountUp end={70} duration={3} />% +
            </Title>
            <Text>Growth</Text>
          </Box>
          <Box>
            <Img $url={trade} />
            <Title $color={"#FFD63D"}>
              <CountUp end={4000000} duration={3} /> +
            </Title>
            <Text>Export</Text>
          </Box>
          <Box>
            <Img $url={expor} />
            <Title $color={"#FF5A55"}>
              <CountUp end={9000000} duration={3} /> +
            </Title>
            <Text>Output</Text>
          </Box>
        </Info>
        <ValueWrapper
          ref={boxRef}
          initial="hidden"
          animate={boxControls}
          variants={boxVariants(0.5)}
        >
          <BlackBox>Values</BlackBox>
          <StyleTitle>Commitment & Trust</StyleTitle>
          <Dec>
            {/* 주식회사 멤프로는 반도체 & 무역 산업의 선두주자로서, 고객과 신뢰의
            바탕으로 최고의 품질과 서비스를 약속드립니다. 혁식을 통해 미래를
            함께 열어갑니다. */}
            {valuesMessage[lang] ?? valuesMessage["eng"]}
          </Dec>

          <ValueImgWrapper>
            <ValueBox
              ref={boxRef}
              initial="hidden"
              animate={boxControls}
              variants={boxVariants(0.8)}
            >
              <Illust $url={commit} />
              <TextBox>
                <span>약속</span>
                <span>Commitment</span>
                <span>承诺</span>
              </TextBox>
            </ValueBox>
            <ValueBox
              ref={boxRef}
              initial="hidden"
              animate={boxControls}
              variants={boxVariants(1.2)}
            >
              <TextBox style={{ left: "0" }}>
                <span>신뢰</span>
                <span>Trust</span>
                <span>相信</span>
              </TextBox>
              <Illust $url={trust} $left={true} />
            </ValueBox>
          </ValueImgWrapper>
        </ValueWrapper>
        <CiWrapper
          ref={childRef}
          initial="hidden"
          animate={childControls}
          variants={childVariants(0.5)}
        >
          <BlackBox>CI</BlackBox>
          <SliderWrapper>
            <CiBtn onClick={handleSwipedLeft}>
              <NavigateBeforeIcon />
            </CiBtn>
            <CiImgWrapper {...handlers}>
              <CiImgBox $url={CiImages[index]}></CiImgBox>
              <CiImgNav>
                {CiImages.map((item, itemIndex) => (
                  <Circle key={item} $isActive={itemIndex === index} />
                ))}
              </CiImgNav>
            </CiImgWrapper>
            <CiBtn onClick={handleSwipedRight}>
              <NavigateNextIcon />
            </CiBtn>
          </SliderWrapper>
          <Dec>
            {/* 약속과 신뢰를 시각적으로 나타내며, 정육각형을 통해 고객사와의 균형과
            조화를 상징하며 글로벌 비즈니스와 다양한 거래를 조화롭게 관리하는
            능력을 표현합니다. 로고에 포함된 'M'자는 멤프로가 글로벌 무대에서
            중심적인 역할을 하는 리더십을 상징합니다. */}
            {logoMessage[lang] ?? logoMessage["eng"]}
          </Dec>
          <ColorBoxWrapper>
            {Color.map((item, index) => (
              <ColorBox
                key={index}
                $bg={item}
                onMouseOver={() => setHoveredColorIndex(index)}
                onMouseLeave={() => setHoveredColorIndex(null)}
                onClick={() => copyColorNumber(item)}
                className="copy-btn"
                ref={childRef}
                initial="hidden"
                animate={childControls}
                variants={childVariants(index * 0.25)}
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

                        opacity: 0,
                      }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{
                        scale: 0,

                        opacity: 0,
                      }}
                      $number={index}
                    >
                      copyed!
                    </CopyMessage>
                  )}
                </AnimatePresence>
              </ColorBox>
            ))}
          </ColorBoxWrapper>
        </CiWrapper>
        <Snackbar
          open={snakBarOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Copied to Clipboard!"
        />
      </Wrapper>
      <Footer />
    </>
  );
}
export default Brand;

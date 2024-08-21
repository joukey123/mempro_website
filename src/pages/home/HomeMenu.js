import styled from "styled-components";
import map from "../../img/map.svg";
import gif from "../../img/GIF.gif";
import { React, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { items } from "../../data";
import MessageBox from "../../components/MessageBox";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgWrapper = styled(motion.div)`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10%;
`;

const Img = styled.img`
  filter: ${(props) => (props.$mobile ? "grayscale(0)" : "grayscale(1)")};
  transform: ${(props) => (props.$mobile ? "scale(1.3)" : "scale(1)")};
  max-width: 1200px;
  position: absolute;
  top: 50px;
`;

const MaskImg = styled.img`
  width: 100%;
  max-width: 1200px;
  mask: ${(props) =>
    props.$isMouseOver
      ? props.$categoies === "led"
        ? "url(#ledMask)"
        : props.$categoies === "semiconductor"
        ? "url(#semiMask)"
        : props.$categoies === "substrate"
        ? "url(#subMask)"
        : props.$categoies === "BBT"
        ? "url(#bbtMask)"
        : props.$categoies === "capted"
        ? "url(#captedMask)"
        : "none"
      : "none"};
  position: absolute;
  top: 50px;
`;
const Svg = styled.svg`
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  top: -250px;
  opacity: 0;
  z-index: 999;
  path {
    pointer-events: fill;
  }
  a {
    display: flex;
  }
`;
const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  transform: scale(1.5);
`;
function HomeMenu() {
  const [mouseover, setMouseover] = useState(false);
  const [selectCategory, setSelectCategoty] = useState();
  const [viewScale, setviewScale] = useState(
    Math.min(
      (Math.ceil((window.innerWidth / 1100) * 10000) / 10000).toFixed(4),
      (Math.ceil((1220 / 1100) * 10000) / 10000).toFixed(4)
    )
  );

  const gifImg = useRef(null);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1220) {
        setviewScale(1.11);
      } else {
        setviewScale(
          (Math.ceil((window.innerWidth / 1100) * 10000) / 10000).toFixed(4)
        );
      }
    };

    // 컴포넌트가 마운트될 때와 창 크기가 변경될 때 이벤트를 감지
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = (item) => {
    setMouseover(true);
    setSelectCategoty(item);
  };
  const handleMouseLeave = () => {
    setMouseover(false);
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
  const ref = useRef(null);

  return (
    <Wrapper ref={ref}>
      <ImgWrapper style={{ scale }}>
        <Img src={map} $mobile={isMobile} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "1200px",
            top: "300px",
          }}
        >
          {items.map(
            (item) =>
              item.tag && (
                <Svg
                  key={item.category}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1084.72 735.96"
                  onMouseOver={() => handleMouseOver(item.category)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={`/${item.link}`}>{item.tag}</Link>
                </Svg>
              )
          )}
        </div>

        {mouseover && !isMobile && (
          <>
            {/* <MaskImg $isMouseOver={mouseover} $categoies={"led"}>
              <Lottie
                animationData={gifjson}
                loop={true}
                autoplay={true}
                style={{ transform: "scale(1.2)" }}
              />
            </MaskImg> */}
            <MaskImg
              src={gif}
              $categoies={selectCategory}
              $isMouseOver={mouseover}
              ref={gifImg}
            />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1081.3 626.46">
              <defs>
                <mask id="semiMask">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M924.29,143.44l-377.51,215.2-35.12,20.02L213.67,210.14l-.24-.15-22.3-12.87c-16.04-9.26-16.15-24.29-.19-33.57l121.7-70.72c15.96-9.27,41.91-9.26,57.95,0l22.3,12.87c16.06,9.28,42.01,9.26,57.97-.01l25.55-14.85c15.96-9.28,41.93-9.28,58,0l47.7,27.54c16.06,9.27,42.01,9.26,57.97-.01l91.1-52.95c15.96-9.27,41.93-9.27,57.99,0l135.12,78.02Z"
                  />
                </mask>
              </defs>

              <defs>
                <mask id="ledMask">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M331.9,476.36l167.16,95.02-102.02,64.15-28.39-16.39c-16.06-9.28-42.01-9.27-57.97.01l-19.38,11.26c-15.96,9.28-41.93,9.28-58,0L12.1,502.7c-16.07-9.27-16.13-24.3-.17-33.58l77.17-44.84c15.96-9.28,15.87-24.32-.19-33.6l-36.38-21c-16.06-9.27-16.15-24.32-.19-33.59l160.55-93.3c15.87-9.22,15.89-24.15.07-33.43l297.99,168.52-179.05,98.48Z"
                  />
                </mask>
              </defs>

              <defs>
                <mask id="subMask">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M870.93,547.21l-225.01,130.76c-15.96,9.28-41.93,9.28-57.99.01l-9.41-5.43c-16.06-9.28-42.03-9.28-57.99,0-15.94,9.26-41.91,9.26-57.97-.01l-64.45-37.21,102.02-64.15-167.16-95.02,179.05-98.48,35.12-20.02,218.07,127.66,105.72,61.89Z"
                  />
                </mask>
              </defs>
              <defs>
                <mask id="bbtMask">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M1026.94,311.09l-25.67,14.92c-11.52,6.7-14.69,16.39-9.52,24.75l-226,135.17-218.07-127.66,377.51-215.2,86.09,49.7c16.06,9.27,16.13,24.3.17,33.58l-7.65,4.44c-15.96,9.28-15.85,24.31.21,33.58l22.74,13.13c16.07,9.28,16.15,24.32.19,33.59Z"
                  />
                </mask>
              </defs>
              <defs>
                <mask id="captedMask">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M1069.39,431.59l-198.35,115.27-105.72-61.89,226-135.17c1.99,3.23,5.22,6.25,9.69,8.83l68.19,39.37c16.07,9.28,16.15,24.32.19,33.59Z"
                  />
                </mask>
              </defs>
            </svg>
          </>
        )}
        <MessageWrapper>
          <MessageBox text={"궁금한 제품을 선택해 보세요."} type={"close"} />
        </MessageWrapper>
      </ImgWrapper>
    </Wrapper>
  );
}

export default HomeMenu;

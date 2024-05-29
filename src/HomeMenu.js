import styled from "styled-components";
import map from "./img/1.png";
import gif from "./img/GIF.gif";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import gifjson from "./img/GIF.mp4.lottie.json";

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(0.8);
`;

const Img = styled.img`
  filter: grayscale(1);
  max-width: 1600px;
  width: 100%;
`;

const MaskImg = styled.img`
  width: 100%;
  max-width: 1600px;
  mask: ${(props) =>
    props.$isMouseOver
      ? props.$categoies === "led"
        ? "url(#ledMask)"
        : props.$categoies === "semiconductor"
        ? "url(#semiMask)"
        : props.$categoies === "substrate"
        ? "url(#subMask)"
        : props.$categoies === "bbt"
        ? "url(#bbtMask)"
        : props.$categoies === "capted"
        ? "url(#captedMask)"
        : "none"
      : "none"};
  position: absolute;
  cursor: pointer;
`;

const Svg = styled.svg`
  position: absolute;
  max-width: 1600px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  cursor: pointer;
  opacity: 0;
  z-index: 999;
  path {
    pointer-events: fill;
  }
`;

function HomeMenu() {
  const [mouseover, setMouseover] = useState(false);
  const [selectCategory, setSelectCategoty] = useState();
  const [viewScale, setviewScale] = useState(
    Math.min(
      (Math.ceil((window.innerWidth / 1100) * 10000) / 10000).toFixed(4),
      (Math.ceil((1620 / 1100) * 10000) / 10000).toFixed(4)
    )
  );

  useEffect(() => {
    const handleResize = () => {
      // 브라우저 창의 가로 세로 비율을 계산하여 scale 값 설정
      let windowWidth;
      if (window.innerWidth > 1620) {
        windowWidth = 1620;
      } else {
        windowWidth = window.innerWidth;
      }
      const ratio = Math.ceil((windowWidth / 1100) * 10000) / 10000;
      setviewScale(ratio.toFixed(4));
    };

    // 컴포넌트가 마운트될 때와 창 크기가 변경될 때 이벤트를 감지
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapPath = [
    {
      category: "semiconductor",
      tag: (
        <path d="M841.69,95.75l2.32-2.22-3-1.73.07-6.31-4.33-3.48,8.23-5.23-3.89-2.22v-8.23s-47.39-28.77-47.39-28.77l-7.71-.98-9.73,6.11-.21-5.13-1.84-1.07-3.48,1.77-.03,7.39-5.29,2.81v7.89l-2.86,2.17c-7.39-.25-14.87.65-21.57,2.71l-.91-36.16-30.46-18.52-27.45,14.87.07,4.34-3.25-1.98-27.45,14.87,2.5,71.63-13.95,8.11c-15.96,9.27-41.91,9.28-57.97.01l-47.7-27.54c-8.26-4.77-19.13-7.08-29.91-6.95-2.07-2.55-5.77-5.56-11.04-4.11-8.13,2.25-6.64,6.2-6.46,6.62-3.82,1.11-7.4,2.59-10.58,4.44l-25.55,14.85c-15.96,9.27-41.91,9.29-57.97.01l-12.15-7.01c-.76-2.97-1.99-5.92-3.97-8.33-6.94-8.43-12.33-1.84-12.33-1.84l-.69,1.12c-4.01-1.49-8.36-2.54-12.86-3.14l1.7-54.31L296.91,0l-55.68,32.16.31,101.98-2.5,1.45-48.1,27.95c-15.96,9.28-15.85,24.31.19,33.57l22.3,12.87.24.15,297.99,168.52,35.12-20.02,377.51-215.2-82.6-47.69Z" />
      ),
    },
    {
      category: "led",
      tag: (
        <path d="M331.9,476.36l167.16,95.02-102.02,64.15-28.39-16.39c-16.06-9.28-42.01-9.27-57.97.01l-19.38,11.26c-15.96,9.28-41.93,9.28-58,0L12.1,502.7c-16.07-9.27-16.13-24.3-.17-33.58l77.17-44.84c15.96-9.28,15.87-24.32-.19-33.6l-36.38-21c-16.06-9.27-16.15-24.32-.19-33.59l160.55-93.3c15.87-9.22,15.89-24.15.07-33.43l297.99,168.52-179.05,98.48Z" />
      ),
    },
    {
      category: "substrate",
      tag: (
        <path d="M870.93,547.21l-225.01,130.76c-15.96,9.28-41.93,9.28-57.99.01l-9.41-5.43c-16.06-9.28-42.03-9.28-57.99,0-15.94,9.26-41.91,9.26-57.97-.01l-64.45-37.21,102.02-64.15-167.16-95.02,179.05-98.48,35.12-20.02,218.07,127.66,105.72,61.89Z" />
      ),
    },
    {
      category: "bbt",
      tag: (
        <path d="M1026.94,311.09l-25.67,14.92c-11.52,6.7-14.69,16.39-9.52,24.75l-226,135.17-218.07-127.66,377.51-215.2,86.09,49.7c16.06,9.27,16.13,24.3.17,33.58l-7.65,4.44c-15.96,9.28-15.85,24.31.21,33.58l22.74,13.13c16.07,9.28,16.15,24.32.19,33.59Z" />
      ),
    },
    {
      category: "capted",
      tag: (
        <path d="M1069.39,431.59l-198.35,115.27-105.72-61.89,226-135.17c1.99,3.23,5.22,6.25,9.69,8.83l68.19,39.37c16.07,9.28,16.15,24.32.19,33.59Z" />
      ),
    },
  ];
  const handleMouseOver = (item) => {
    console.log(mapPath.map((item) => item.category));
    setMouseover(true);
    setSelectCategoty(item);
    console.log(item);
    console.log(selectCategory);
  };
  const handleMouseLeave = () => {
    setMouseover(false);
  };
  return (
    <>
      <ImgBox>
        <Img src={map} />
        {mapPath.map((item) => (
          <Svg
            key={item.category}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1084.72 735.96"
            onMouseOver={() => handleMouseOver(item.category)}
            onMouseLeave={handleMouseLeave}
          >
            {item.tag}
          </Svg>
        ))}
        {mouseover && (
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
              $isMouseOver={mouseover}
              $categoies={selectCategory}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1084.72 735.96"
              style={{
                position: "absolute",
                maxWidth: "1600px",
                width: "100%",
              }}
            >
              <defs>
                <mask id="semiMask">
                  <path
                    style={{
                      transform: `scale(${viewScale})`,
                    }}
                    fill="white"
                    d="M841.69,95.75l2.32-2.22-3-1.73.07-6.31-4.33-3.48,8.23-5.23-3.89-2.22v-8.23s-47.39-28.77-47.39-28.77l-7.71-.98-9.73,6.11-.21-5.13-1.84-1.07-3.48,1.77-.03,7.39-5.29,2.81v7.89l-2.86,2.17c-7.39-.25-14.87.65-21.57,2.71l-.91-36.16-30.46-18.52-27.45,14.87.07,4.34-3.25-1.98-27.45,14.87,2.5,71.63-13.95,8.11c-15.96,9.27-41.91,9.28-57.97.01l-47.7-27.54c-8.26-4.77-19.13-7.08-29.91-6.95-2.07-2.55-5.77-5.56-11.04-4.11-8.13,2.25-6.64,6.2-6.46,6.62-3.82,1.11-7.4,2.59-10.58,4.44l-25.55,14.85c-15.96,9.27-41.91,9.29-57.97.01l-12.15-7.01c-.76-2.97-1.99-5.92-3.97-8.33-6.94-8.43-12.33-1.84-12.33-1.84l-.69,1.12c-4.01-1.49-8.36-2.54-12.86-3.14l1.7-54.31L296.91,0l-55.68,32.16.31,101.98-2.5,1.45-48.1,27.95c-15.96,9.28-15.85,24.31.19,33.57l22.3,12.87.24.15,297.99,168.52,35.12-20.02,377.51-215.2-82.6-47.69Z"
                  />
                </mask>
              </defs>
              <defs>
                <mask id="ledMask">
                  <path
                    style={{
                      transform: `scale(${viewScale})`,
                    }}
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
      </ImgBox>
    </>
  );
}

export default HomeMenu;

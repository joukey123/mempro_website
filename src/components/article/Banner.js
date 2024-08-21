import styled from "styled-components";
import { bannerItem } from "../../bannerData";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Background from "three/examples/jsm/renderers/common/Background.js";
import { useEffect, useRef, useState } from "react";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다
import { useMediaQuery } from "@mui/material";

const Warpper = styled.div`
  width: 100%;
  height: 200px;
  margin: 50px 0 70px 0;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  @media (max-width: 1023px) {
    margin: 30px 0;
  }
`;

const BannerImg = styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.$url}) center no-repeat;
  background-size: cover;
  transition: background-color 0.3s ease; /* transition 추가 */
  opacity: ${(props) => (props.$show ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1023px) {
    background-size: contain;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
`;
function Banner({ width }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const bannerLength = bannerItem.length; //2
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= bannerLength - 1 ? 0 : prev + 1));
      setDirection("left");
    }, 5000);
  };

  const nextImgBanner = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev >= bannerLength - 1 ? (prev = 0) : prev + 1
    );
  };

  const prevImgBanner = () => {
    setDirection("left");

    setCurrentIndex((prev) =>
      prev <= 0 ? (prev = bannerLength - 1) : prev - 1
    );
  };
  const handleMouseEnter = () => {
    clearInterval(autoSlideInterval.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    startAutoSlide();
    setIsHovered(false);
  };
  const handleClickBanner = (link) => {
    if (link.startsWith("http") || link.startsWith("www")) {
      // 외부 링크
      window.location.href = link;
    } else {
      // 내부 링크
      navigate(link);
    }
  };
  return (
    <>
      <Warpper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          {bannerItem.map((item, index) => (
            <Slide direction={direction} in={currentIndex === index}>
              <BannerImg
                key={index}
                $url={item.img}
                onClick={() => handleClickBanner(item.link)}
                $show={currentIndex === index}
              />
            </Slide>
          ))}
        </div>
        <ButtonContainer isVisible={isHovered}>
          <div
            onClick={prevImgBanner}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translate(0%,-50%)",
              width: "auto",
            }}
            className="preBtn"
          >
            <IconButton
              color="white"
              sx={{
                color: "white", // 전체 버튼 색상 설정
                "& svg": {
                  color: "inherit", // 아이콘 색상을 부모의 색상으로 설정
                },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.6)",
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>

          <div
            onClick={nextImgBanner}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(0%,-50%)",
              width: "auto",
            }}
          >
            <IconButton
              color="white"
              sx={{
                color: "white", // 전체 버튼 색상 설정
                "& svg": {
                  color: "inherit", // 아이콘 색상을 부모의 색상으로 설정
                },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.6)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </ButtonContainer>
      </Warpper>
    </>
  );
}

export default Banner;

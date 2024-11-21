import styled from "styled-components";
import map from "../../img/map.svg";
import map_gray from "../../img/map_gray.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { items } from "../../data";
import { Link } from "react-router-dom";
import MessageBox from "../../components/MessageBox";
import useTranslation from "../../Hook/useTranslation";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  position: relative;
`;
const MapImg = styled.img`
  width: 100%;
  /* filter: grayscale(1); */
`;

const MaskImg = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  mask: ${(props) =>
    props.$isMouseOver
      ? props.$categoies === "wafer"
        ? "url(#wafer)"
        : props.$categoies === "etching"
        ? "url(#etching)"
        : props.$categoies === "eds-cantilever"
        ? "url(#canti)"
        : props.$categoies === "eds-vertical"
        ? "url(#vertical)"
        : props.$categoies === "manufacture"
        ? "url(#manufacture)"
        : props.$categoies === "machine"
        ? "url(#machine)"
        : "none"
      : "none"};
`;
const LinkSvg = styled.svg`
  pointer-events: none;
  position: absolute;
  cursor: pointer;
  z-index: 999;
  opacity: 0;
  path {
    pointer-events: fill;
  }
  a {
    display: flex;
  }
`;

function HomeMenu() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
  const [mouseover, setMouseover] = useState(false);
  const [selectCategory, setSelectCategoty] = useState();
  const { selectedLanguage } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  const [viewScale, setviewScale] = useState(
    Math.min(
      (
        Math.ceil(
          (((0.38 - 1) / (500 - 1295)) * (window.innerWidth - 1295) + 1) * 10000
        ) / 10000
      ).toFixed(4),
      1
    )
  );
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const handleMouseOver = (item) => {
    setMouseover(true);
    setSelectCategoty(item.toLowerCase());
  };
  const handleMouseLeave = () => {
    setMouseover(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1220) {
        setviewScale(1);
      } else {
        setviewScale(
          (
            Math.ceil(
              (((0.38 - 1) / (500 - 1295)) * (window.innerWidth - 1295) + 1) *
                10000
            ) / 10000
          ).toFixed(4)
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

  const messageBoxText = {
    eng: "Choose the Category you want",
    kor: "원하는 카테고리를 선택하세요",
    cn: "选择您想要的类别",
    jp: "希望するカテゴリを選択してください",
  };
  return (
    <Wrapper>
      <motion.div style={{ scale }}>
        {isMobile ? (
          <MapImg src={map} style={{ transform: "scale(1.3)" }} />
        ) : (
          <MapImg src={map_gray} />
        )}
        {/* <MapImg src={map_gray} /> */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          {items.map(
            (item) =>
              item.category.eng === "semiconductor" &&
              item.subcategories &&
              item.subcategories.map((sub, index) => {
                // sub.subcategory가 존재하고 최소 한 개의 항목이 있는지 확인
                if (sub.subcategory && sub.subcategory.length > 0) {
                  const firstSubItem = sub.subcategory[0];

                  return (
                    <LinkSvg
                      key={index}
                      viewBox="0 0 1280 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      onMouseOver={() => handleMouseOver(sub.diagram)}
                      onMouseLeave={handleMouseLeave}
                      className="linksvg"
                    >
                      {firstSubItem.name === "sanding" ? (
                        <Link to={`/semi/machine/${firstSubItem.link}`}>
                          {sub.tag}
                        </Link>
                      ) : (
                        <Link to={`/semi/parts/${firstSubItem.link}`}>
                          {sub.tag}
                        </Link>
                      )}
                    </LinkSvg>
                  );
                }
                return null; // sub.subcategory가 없거나 비어있는 경우 렌더링하지 않음
              })
          )}
        </div>

        {mouseover && !isMobile && (
          <>
            <MaskImg
              src={map}
              $categoies={selectCategory}
              $isMouseOver={mouseover}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1024"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <defs>
                <mask id="wafer">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M1023.4,270.9l-213.56,121.74-273.36-154.28c4.91-1.16,9.51-2.9,13.49-5.21l25.55-14.85c15.96-9.28,41.93-9.28,58,0l47.7,27.54c16.06,9.27,42.01,9.26,57.97,0l91.1-52.95c15.96-9.27,41.93-9.27,57.99,0l135.12,78.02h0Z"
                  />
                </mask>
                <mask id="etching">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M809.84,392.64l-163.95,93.46-35.12,20.02-297.99-168.52-.24-.15-22.3-12.87c-16.04-9.26-16.15-24.29-.19-33.57l121.7-70.72c15.96-9.27,41.91-9.26,57.95,0l22.3,12.87c12.06,6.97,29.68,8.69,44.48,5.2l273.36,154.28h0Z"
                  />
                </mask>
                <mask id="canti">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M431.01,603.81l167.16,95.02-102.02,64.15-28.39-16.39c-16.06-9.28-42.01-9.27-57.97.01l-19.38,11.26c-15.96,9.28-41.93,9.28-58,0l-221.2-127.71c-16.07-9.27-16.13-24.3-.17-33.58l77.17-44.84c15.96-9.28,15.87-24.32-.19-33.6l-36.38-21c-16.06-9.27-16.15-24.32-.19-33.59l160.55-93.3c15.87-9.22,15.89-24.15.07-33.43l298.7,169.31-179.76,97.69h0Z"
                  />
                </mask>
                <mask id="vertical">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M970.04,674.66l-225.01,130.76c-15.96,9.28-41.93,9.28-57.99.01l-9.41-5.43c-16.06-9.28-42.03-9.28-57.99,0-15.94,9.26-41.91,9.26-57.97-.01l-67.26-38.83,99.58-59.91-169.56-96.38,185.06-101.19,36.76-18.57,218.07,127.66,105.72,61.89h0Z"
                  />
                </mask>
                <mask id="machine">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M1125.86,404.96l-22.74-13.13c-16.06-9.27-16.17-24.3-.21-33.58l7.65-4.44c15.96-9.28,15.89-24.31-.17-33.58l-86.09-49.7-377.51,215.2,218.07,127.66,193.24-113.91v-32.56s.91-10.13,17.5-10.13c9.29,0,13.67,3.12,15.73,5.86,1.65-3.41,4.59-6.59,9.05-9.18l25.67-14.92h0c15.96-9.27,15.88-24.31-.19-33.59Z"
                  />
                </mask>
                <mask id="manufacture">
                  <path
                    style={{ transform: `scale(${viewScale})` }}
                    fill="white"
                    d="M1167.87,524.39l-68.39-39.9c-2.51-1.46-4.61-3.07-6.34-4.77v-12.99s-.95-9.94-17.54-9.94-17.49,10.13-17.49,10.13v27.75s-195,117.86-195,117.86l106.02,62.72,198.92-116.82h0c16.01-9.39,15.93-24.64-.19-34.04Z"
                  />
                </mask>
              </defs>
            </svg>
          </>
        )}
      </motion.div>
      <MessageBox text={messageBoxText[lang]} type={"close"} />
    </Wrapper>
  );
}

export default HomeMenu;

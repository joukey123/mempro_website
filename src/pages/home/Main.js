import styled from "styled-components";
import MainVideo from "./MainVideo";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import ObjectCreator from "../../ObjectCreator";
import HomeMenu from "./HomeMenu";
import HomeAbout from "./HomeAbout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Canvas } from "@react-three/fiber";
import FallingStars from "../../components/FallingStars";

const MainWrapper = styled.div``;
const Section = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const Section1 = styled(Section)`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section2 = styled(Section)`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const StarCanvasBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;
function Main() {
  const [parts, setParts] = useState([]);
  const [currentWindowHeight, setCurrentWindoHeiht] = useState(
    window.innerHeight
  );
  const handelTop = () => {
    const startPosition = window.scrollY;
    const duration = 600; // in milliseconds
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, -startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const part = [
      { name: "Diamond Wire", diagram: "wafer" },
      { name: "Diamond Wire", diagram: "wafer" },
      { name: "Diamond Wire", diagram: "wafer" },
      { name: "Diamond Wire", diagram: "wafer" },
      { name: "Diamond Wire", diagram: "wafer" },
      // 추가 데이터는 여기에 추가할 수 있습니다.
    ];

    // 객체 생성 및 배열에 추가
    const newParts = part.map((part) => (
      <ObjectCreator name={part.name} diagram={part.diagram} />
    ));
    setParts(newParts);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;
      const sectionIndex = Math.round(window.scrollY / window.innerHeight);
      if (deltaY > 0) {
        // Scroll down
        const nextSectionIndex = sectionIndex + 1;
        if (nextSectionIndex < 3) {
          scroller.scrollTo(`section${nextSectionIndex}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
      } else {
        // Scroll up
        const previousSectionIndex = sectionIndex - 1;
        if (previousSectionIndex > 0) {
          scroller.scrollTo(`section${previousSectionIndex}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        if (previousSectionIndex === 0) {
          handelTop();
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("beforeunload", handelTop);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("beforeunload", handelTop);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let preHeight = currentWindowHeight;
      setCurrentWindoHeiht(window.innerHeight);
      if (preHeight < currentWindowHeight) {
        handelTop();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerHeight]);

  return (
    <MainWrapper>
      <Header />
      <MainVideo id="section0" />
      <Section1 id="section1">
        <StarCanvasBox>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <FallingStars count={4000} />
          </Canvas>
        </StarCanvasBox>
        <HomeMenu />
      </Section1>
      <Section2 id="section2">
        <HomeAbout />
        <Footer />
      </Section2>
      {/* <Section3 id="section3" />
      <ul>
        {parts.map((part, index) => (
          <li key={index}>{part}</li>
        ))}
      </ul> */}
    </MainWrapper>
  );
}

export default Main;

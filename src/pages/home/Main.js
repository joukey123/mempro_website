import styled from "styled-components";
import MainVideo from "./MainVideo";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import ObjectCreator from "../../ObjectCreator";
import HomeMenu from "./HomeMenu";
import HomeAbout from "./HomeAbout";

const Section = styled.div`
  height: 100vh;
`;

const Section1 = styled(Section)`
  background-color: ${(props) => props.theme.colors.black};
`;

const Section2 = styled(Section)`
  background-color: ${(props) => props.theme.colors.black};
`;

const Section3 = styled(Section)`
  background-color: blue;
`;

function Main() {
  const [parts, setParts] = useState([]);

  const handelTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        if (nextSectionIndex < 4) {
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

  return (
    <>
      <MainVideo id="section0" />
      <Section1 id="section1">
        <HomeMenu />
      </Section1>
      <Section2 id="section2">
        <HomeAbout />
      </Section2>
      {/* <Section3 id="section3" />
      <ul>
        {parts.map((part, index) => (
          <li key={index}>{part}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Main;

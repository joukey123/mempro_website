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

const MainWrapper = styled.div`
  background-color: #0a0b14;
`;
const Section = styled.div``;

const Section1 = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Section2 = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
`;
const StarCanvasBox = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
`;
function Main() {
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
      </Section2>
      {/* <Section3 id="section3" />
      <ul>
      {parts.map((part, index) => (
        <li key={index}>{part}</li>
        ))}
        </ul> */}
      <Footer />
    </MainWrapper>
  );
}

export default Main;

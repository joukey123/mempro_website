import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { itemsDetail } from "../../../data";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;
`;

const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 900px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 50px;
  position: relative;
  overflow: hidden;
`;
const DiagramImg = styled(motion.img)`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  object-fit: contain;
  object-position: center center;
  transform: scale(0.8);
  z-index: 99;
  animation: ${(props) =>
    props.$isZoom ? "zoomin .3s ease forwards" : "zoomout .3s ease forwards"};

  @keyframes zoomin {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(3) translateX(20%) translateY(10%);
    }
  }
  @keyframes zoomout {
    from {
      transform: scale(3);
    }
    to {
      transform: scale(0.8);
    }
  }
`;
const Step1 = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  filter: ${(props) => props.$isZoom && "blur(10px)"};
`;
function Ceramic() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { images, contents } = itemsDetail[`${sublink}`];

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <DiagramWpper>
          <DiagramImg src={images.machine} />
          <Step1 src={images.step1} />
        </DiagramWpper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Ceramic;

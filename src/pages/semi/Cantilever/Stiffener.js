import { itemsDetail } from "../../../data";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import Footer from "../../../components/Footer";
import line from "../../../img/line.svg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Warapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;
`;
const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 1100px;
  margin: 0 auto;
  border-radius: 15px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 1100px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;
const DiagramImg = styled(motion.img)`
  width: 100%;
  height: 500px;
  max-width: 400px;
  object-fit: contain;
  object-position: center center;
  z-index: 99;
  transform: scale(1.5);
  filter: ${(props) => props.$isZoom && "blur(10px)"};
  position: relative;
  top: 16%;
`;

const ItemImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  bottom: 0px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.4);
  padding: 20px 50px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  place-items: center;
  z-index: 1;
`;
const ItemImg = styled(motion.img)`
  width: 150px;
  height: 150px;
  object-fit: contain;
  transform: scale(0.8);
  cursor: pointer;
  padding: 5px 10px;
  box-shadow: ${(props) => props.$isClick && `1px 1px 5px rgba(0,0,0,0.1)`};
  border: ${(props) =>
    props.$isClick && `1px solid ${props.theme.colors.stroke}`};
  border-radius: 15px;
  background-color: ${(props) => props.$isClick && "rgba(255,255,255,0.5)"};
`;
const GrayBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 170px;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;
function Stiffener() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const porbeArray = ["probe", "cantilever", "vertical"];
  const [sublink, setSublink] = useState(paths[2]);
  const { images, contents, item, warning } = itemsDetail[`${sublink}`];
  const [imgIndex, setImgIndex] = useState(0);

  const handleSelectImg = (index) => {
    setImgIndex(index);
  };

  return (
    <>
      <Warapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <StructureWarpper>
          <DiagramImg src={contents.items[imgIndex]} />
          <ItemImgBox>
            {contents.items.map((item, index) => (
              <ItemImg
                key={index}
                src={item}
                onClick={() => handleSelectImg(index)}
                $isClick={index === imgIndex}
              />
            ))}
          </ItemImgBox>
          <GrayBox></GrayBox>
        </StructureWarpper>
      </Warapper>
      <Footer />
    </>
  );
}

export default Stiffener;

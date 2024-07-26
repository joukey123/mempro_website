import { itemsDetail } from "../../../data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import Footer from "../../../components/Footer";
import line from "../../../img/line.svg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Stack,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Collapse,
} from "@mui/material";
import ThreeModel from "../../../components/3D/ThreeModel";
import dgree from "../../../img/stiffener/dgree.svg";

const Warapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  position: relative;
  align-items: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

const TypeImg = styled.div`
  width: 100px;
  height: 100px;
  background: url(${(props) => props.$url}) no-repeat center;
  margin: 0 20px;
`;

const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DgreeImg = styled.div`
  width: 80px;
  height: 80px;
  background: url(${dgree}) no-repeat center;
  opacity: 0.2;
  position: absolute;
  top: 50px;
  left: 50px;
`;
const StyledButton = styled(Button)`
  color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  border-color: ${(props) => props.$disabled && "#E4E4E4"} !important;
`;
function Stiffener() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const { contents, types } = itemsDetail[`${sublink}`];
  const [modelIndex, setModelIndex] = useState();
  const [selectItem, setSelectItem] = useState(false);
  const [type, setType] = useState("");

  const totalType = Object.keys(types);

  const handleClickType = (index) => {
    setModelIndex(index);
    setSelectItem(true);
  };

  const handleToggleChange = (event, newIndex) => {
    if (newIndex !== null) {
      setModelIndex(newIndex);
    }
  };
  const handleType = (item) => {
    setType(item);
  };

  return (
    <>
      <Warapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <Stack
          direction="row"
          spacing={5}
          sx={{ margin: "50px 0" }}
          justifyContent="center"
        >
          {totalType?.map((item, index) => (
            <StyledButton
              variant="outlined"
              size="large"
              value={item}
              key={index}
              onClick={() => handleType(item)}
              $disabled={item !== type}
            >
              {item}
            </StyledButton>
          ))}
        </Stack>
        <ToggleButtonGroup
          value={modelIndex}
          onChange={handleToggleChange}
          exclusive
        >
          {types[type]?.map((item, index) => (
            <ToggleButton value={index}>
              <TypeImg
                $url={item.img}
                onClick={() => handleClickType(index)}
              ></TypeImg>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {selectItem && (
          <StructureWarpper>
            {/* <DiagramImg src={contents.items[ModelIndex]} />
          <ItemImgBox>
            {contents.items.map((item, index) => (
              <ItemImg
                key={index}
                src={item}
                onClick={() => handleSelectImg(index)}
                $isClick={index === ModelIndex}
              />
            ))}
          </ItemImgBox>
          <GrayBox></GrayBox> */}
            <ThreeModel types={types} number={modelIndex} type={type} />
            <DgreeImg />
          </StructureWarpper>
        )}
      </Warapper>
    </>
  );
}

export default Stiffener;

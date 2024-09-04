import styled from "styled-components";
import line from "../../../img/line.svg";
import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Application from "../../../components/Application";
import Features from "../../../components/Features";
import Collapse from "@mui/material/Collapse";
import ContentsTitle from "../../../components/ContentsTitle";
import { motion } from "framer-motion";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";

const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  @media (max-width: 1023px) {
    padding: 20px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    margin-top: 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 1000px;
`;

const NeedleName = styled.h1`
  font-size: 18px;
  span {
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;
    margin-right: 10px;
  }
`;
const ShapeTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const BlueBox = styled.span`
  background-color: ${(props) => props.theme.palette.primary.main};
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  color: white;
  padding: 5px 10px;
  @media (max-width: 1023px) {
    width: 30%;
    font-size: 13px;
    text-align: center;
  }
`;
const TextBox = styled.span`
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  padding: 5px 10px;
  @media (max-width: 1023px) {
    width: 70%;
    font-size: 13px;
    text-align: center;
  }
  @media (max-width: 360px) {
    height: 40px;
  }
`;

const ShapeImgWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgBox = styled.img`
  width: 55%;
  @media (max-width: 1023px) {
    width: 80%;
  }
`;

const StyledTableHead = styled(TableHead)`
  && {
    background: ${(props) => props.theme.palette.table.main};
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    text-align: center;
    border-right: 1px solid #dfdfdf;
    font-size: 16px;
    padding: 10px;
  }
`;
const StyledTableRow = styled(TableRow)(({ index }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
    ...(index === 0 && {
      "& td:nth-last-child(4)": {
        backgroundColor: "white",
      },
      "& td:nth-last-child(6)": {
        backgroundColor: "white",
      },
      "& th:nth-last-child(8)": {
        backgroundColor: "white",
      },
    }),
  },
}));

function PemsDetail({ contents, needle }) {
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  return (
    <>
      <StructureWarpper>
        {needle ? (
          <NeedleName>
            <span style={{ textTransform: "capitalize" }}>{needle}</span>:
            Specification
          </NeedleName>
        ) : (
          <NeedleName>Specification</NeedleName>
        )}
        <ImgWrapper>
          {/* {contents.img.map((item, index) => (
            <Img src={item} key={index} />
          ))} */}

          {contents.img.map((item, index) => (
            <Img src={item} key={index} />
          ))}
        </ImgWrapper>
      </StructureWarpper>
      <TableContainer component={Paper} sx={{ whiteSpace: "nowrap" }}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell sx={{ color: "white" }}>
                Material
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Tip size (µm)
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Application
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Available Pitch (µm)
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Overall Length (µm)
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Probe force [g.f]
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Cres. [Ω]
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                C.C.C. [mA]
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {contents.spec.map((row, index) => (
              <StyledTableRow key={index} index={index}>
                {index === 0 && (
                  <StyledTableCell rowSpan={3} component="th" scope="row">
                    {row.material}
                  </StyledTableCell>
                )}
                <StyledTableCell>{row.tipSize}</StyledTableCell>
                {index === 0 && (
                  <StyledTableCell rowSpan={3} scope="row">
                    {row.application}
                  </StyledTableCell>
                )}

                {index !== 2 ? (
                  <StyledTableCell>{row.availablePitch}</StyledTableCell>
                ) : (
                  <StyledTableCell colSpan={5} scope="row">
                    {row.availablePitch}
                  </StyledTableCell>
                )}
                {index === 0 && (
                  <StyledTableCell rowSpan={2} scope="row">
                    {row.overallLength}
                  </StyledTableCell>
                )}
                {index !== 2 && (
                  <StyledTableCell>{row.probeForce}</StyledTableCell>
                )}
                {index !== 2 && <StyledTableCell>{row.cres}</StyledTableCell>}
                {index !== 2 && <StyledTableCell>{row.ccc}</StyledTableCell>}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Features contents={contents} />
      <div className="shape" style={{ margin: "0px 0" }}>
        <ContentsTitle title={"Shape"} onData={showContent} />
        <Collapse in={expendClicked}>
          {contents.shape.map((item, index) => (
            <StructureWarpper
              key={index}
              ref={boxRef}
              initial="hidden"
              animate={boxControls}
              variants={boxVariants(index * 0.5)}
            >
              <ShapeTitleWrapper>
                <BlueBox>{item.title}</BlueBox>
                <TextBox>{item.text}</TextBox>
              </ShapeTitleWrapper>
              <ShapeImgWrapper>
                <ImgBox src={item.img} />
              </ShapeImgWrapper>
            </StructureWarpper>
          ))}
        </Collapse>
      </div>
      <Application contents={contents} />
    </>
  );
}

export default PemsDetail;

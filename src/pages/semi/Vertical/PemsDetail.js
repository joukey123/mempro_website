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

const StructureWarpper = styled.div`
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
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Img = styled.div`
  width: 1000px;
  height: 200px;
  background: url(${(props) => props.$img}) no-repeat;
  background-position: center center;
  background-size: contain;
  transform: rotate(90deg) scale(4);
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
  margin-top: -20px;
`;
const BlueBox = styled.span`
  background-color: ${(props) => props.theme.palette.primary.main};
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  color: white;
  padding: 5px 10px;
`;
const TextBox = styled.span`
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  padding: 5px 10px;
`;

const ShapeImgWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgBox = styled.img`
  width: 65%;
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
  }
`;
const StyledTableRow = styled(TableRow)``;

function PemsDetail({ contents, needle }) {
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
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
          {contents.img.map((item, index) => (
            <Img $img={item} key={index} />
          ))}
        </ImgWrapper>
      </StructureWarpper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <StyledTableHead>
            <StyledTableRow>
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
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {contents.spec.map((row, index) => (
              <StyledTableRow key={index}>
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
            <StructureWarpper key={index}>
              <ShapeTitleWrapper>
                <BlueBox>Top Shape</BlueBox>
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

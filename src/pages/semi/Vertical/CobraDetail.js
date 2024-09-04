import styled from "styled-components";
import CobraInfo from "./CobraInfo";
import React, { useState } from "react";
import line from "../../../img/line.svg";
import { motion } from "framer-motion";
import Application from "../../../components/Application";
import ContentsTitle from "../../../components/ContentsTitle";

import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableHead,
} from "@mui/material";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";

const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  align-content: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    padding: 20px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 350px;
  margin-top: 30px;
  @media (max-width: 1023px) {
    height: 150px;
  }
`;
const NeedleName = styled.h1`
  font-size: 18px;
  span {
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;
    margin-right: 10px;
  }
`;
const NeedleImg = styled.img`
  width: 100%;
  max-width: 800px;
`;

const SpecWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 1100px;
  width: 100%;
`;

const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  font-weight: 400;
`;

const Column = styled.div``;
const Name = styled.h1`
  margin-bottom: 3px;
  font-size: 18px;
`;
const Des = styled.span``;
const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
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
    @media (max-width: 1023px) {
      padding: 10px;
    }
  }
`;
const MotionTableContainer = motion(TableContainer);

function CobraDetail({ contents, needle }) {
  const [specIndex, setSpecIndex] = useState();
  const [specId, setSpecId] = useState();
  const data = React.useMemo(() => contents.force, []);

  const handleSpecOver = (index, id) => {
    setSpecIndex(index);
    setSpecId(id);
  };
  const handleSpecLeave = () => {
    setSpecIndex(-1);
    setSpecId(-1);
  };

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
        <InfoBox>
          <NeedleImg src={contents.img} />
          <CobraInfo specId={specId} />

          {/* <SpecWrapper>
            {contents.spec.map((item, index) => (
              <Text
                key={index}
                onMouseOver={() => handleSpecOver(index, item.id)}
                onMouseLeave={handleSpecLeave}
              >
                <Number $hover={specIndex + 1 === item.id}>{item.id}</Number>
                <Column>
                  <Name>{item.name}</Name>
                  <Des>{item.description}</Des>
                </Column>
              </Text>
            ))}
          </SpecWrapper> */}
        </InfoBox>
      </StructureWarpper>
      <TableContainer component={Paper} sx={{ whiteSpace: "nowrap" }}>
        <Table>
          <TableBody>
            {contents.spec.map((item, index) => (
              <TableRow
                key={index}
                onMouseOver={() => handleSpecOver(index, item.id)}
                onMouseLeave={handleSpecLeave}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5", // Optional: Adds a hover effect to the row
                  },
                }}
              >
                <StyledTableCell
                  style={{
                    fontWeight: specIndex + 1 === item.id ? "500" : "300",
                    fontSize: "16px",
                    background: `linear-gradient(to right, #2467a2, #253b78)`,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {item.id}
                </StyledTableCell>
                <StyledTableCell style={{ fontWeight: 500 }}>
                  {item.name}
                </StyledTableCell>
                <StyledTableCell>{item.description}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Contents>
        <ContentsTitle title={"C.C.C & Force"} onData={showContent} />

        {/* <Tabless {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Tabless> */}
        <Collapse in={expendClicked}>
          <MotionTableContainer
            component={Paper}
            sx={{ whiteSpace: "nowrap" }}
            ref={boxRef}
            initial="hidden"
            animate={boxControls}
            variants={boxVariants(0.5)}
          >
            <Table>
              <StyledTableHead>
                <TableRow>
                  <StyledTableCell
                    rowSpan={2}
                    align="center"
                    sx={{ color: "white" }}
                  >
                    Diameter
                  </StyledTableCell>
                  <StyledTableCell
                    colSpan={2}
                    align="center"
                    sx={{ color: "white" }}
                  >
                    NC30 (P7)
                  </StyledTableCell>
                  <StyledTableCell
                    colSpan={2}
                    align="center"
                    sx={{ color: "white" }}
                  >
                    NC40 (H3C)
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center" sx={{ color: "white" }}>
                    C.C.C (mA)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "white" }}>
                    Force (g/f)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "white" }}>
                    C.C.C (mA)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "white" }}>
                    Force (g/f)
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                  >
                    <StyledTableCell align="center">
                      {row.diameter}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nc30_ccc}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nc30_force}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nc40_ccc}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nc40_force}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MotionTableContainer>
        </Collapse>
        <Application contents={contents} />
      </Contents>
    </>
  );
}

export default CobraDetail;

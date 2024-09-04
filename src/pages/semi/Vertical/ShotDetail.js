import styled from "styled-components";
import line from "../../../img/line.svg";
import ShortInfo from "./ShortInfo";
import React, { useState } from "react";
import Application from "../../../components/Application";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import ContentsTitle from "../../../components/ContentsTitle";
import Carousel from "../../../components/Carousel";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";
import { motion } from "framer-motion";

const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  align-content: center;
  @media (max-width: 1023px) {
    padding: 20px;
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

const InfoBox = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media (max-width: 1023px) {
    height: 150px;
  }
`;
const NeedleImg = styled.img`
  width: 100%;
  max-width: 900px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%); */
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
    padding: 10px !important;
  }
`;

const StyledTableRow = styled(TableRow)(({ index }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
    ...(index === 0 && {
      "& td:nth-last-child(2)": {
        backgroundColor: "white",
      },
      "& td:nth-last-child(4)": {
        backgroundColor: "white",
      },
    }),
  },
}));
// const Table = styled.table`
//   width: 100%;
//   max-width: 1200px;
//   height: 140px;
//   border-collapse: collapse;
//   text-align: center;
//   font-weight: 300;
//   font-size: 15px;

//   :first-child tr {
//     background: linear-gradient(to right, #2467a2, #253b78);
//   }

//   tr,
//   td {
//     padding: 15px;
//     border: 0.1px solid ${(props) => props.theme.colors.border};
//     align-content: center;
//     &:hover {
//       background-color: ${(props) => props.theme.colors.white};
//     }
//   }
//   th {
//     color: white;
//     padding: 15px;
//     font-weight: 600;
//     width: 100px;
//     align-content: center;
//     border: 0.1px solid ${(props) => props.theme.colors.border};
//   }
// `;

const Contents = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;
const MotionTableContainer = motion(TableContainer);

function ShortDeatail({ contents, needle }) {
  const [index, setIndex] = useState(0);
  const length = contents.sem.length;
  const [tableHeader, setTableHeader] = useState("");
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  const handleImgSlider = (text) => {
    if (text === "prev") {
      setIndex((prev) => (prev === 0 ? (prev = length - 1) : prev - 1));
    } else if ((text = "next")) {
      setIndex((prev) => (prev === length - 1 ? (prev = 0) : prev + 1));
    }
  };

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);

  const handleTableHeader = (tableheader) => {
    const numTotext = String(tableheader);
    setTableHeader(numTotext);
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
        <InfoBox>
          <NeedleImg src={contents.img} />
          <ShortInfo tableHeader={tableHeader} />
        </InfoBox>
      </StructureWarpper>
      {/* <TableWrapper>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} style={{ display: "none" }}>
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
                <SpecTr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      onMouseOver={() => handleTableHeader(cell.row.id)}
                      onMouseLeave={() => handleTableHeader("")}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </SpecTr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper> */}
      <TableContainer component={Paper} sx={{ whiteSpace: "nowrap" }}>
        <Table sx={{ minWidth: 900 }}>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell sx={{ color: "white" }}>
                Material
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Road Diameter
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Road Length
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Taper Angle
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                Point pointAccuracy
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {contents.spec.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                }}
              >
                <StyledTableCell>{row.material}</StyledTableCell>
                <StyledTableCell
                  onMouseOver={() => handleTableHeader(index + 1)}
                  onMouseLeave={() => handleTableHeader("")}
                >
                  {row.roadDiameter}
                </StyledTableCell>
                <StyledTableCell
                  onMouseOver={() => handleTableHeader(index + 2)}
                  onMouseLeave={() => handleTableHeader("")}
                >
                  {row.roadLength}
                </StyledTableCell>
                <StyledTableCell>{row.taperAngle}</StyledTableCell>
                <StyledTableCell>{row.pointAccuracy}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Contents>
        <ContentsTitle title={"C.C.C & Force"} onData={showContent} />
        <Collapse in={expendClicked}>
          <MotionTableContainer
            component={Paper}
            ref={boxRef}
            initial="hidden"
            animate={boxControls}
            variants={boxVariants(0.5)}
          >
            <Table aria-label="custom table" sx={{ minWidth: 900 }}>
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
                {contents.force.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                    index={index}
                  >
                    <StyledTableCell align="center">{row.od}</StyledTableCell>
                    {index === 0 && (
                      <StyledTableCell align="center" rowSpan={4} index={index}>
                        {row.np40_ccc}
                      </StyledTableCell>
                    )}
                    <StyledTableCell align="center">
                      {row.np40_force}
                    </StyledTableCell>
                    {index === 0 && (
                      <StyledTableCell align="center" rowSpan={4}>
                        {row.nc70_ccc}
                      </StyledTableCell>
                    )}
                    <StyledTableCell align="center">
                      {row.nc70_force}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </MotionTableContainer>
        </Collapse>
        <Carousel contents={contents} />
        <Application contents={contents} />
      </Contents>
    </>
  );
}

export default ShortDeatail;

import styled from "styled-components";
import React, { useState } from "react";
import line from "../../../img/line.svg";
import { motion } from "framer-motion";
import WireInfo from "./WireInfo";
import Carousel from "../../../components/Carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ContentsTitle from "../../../components/ContentsTitle";
import Collapse from "@mui/material/Collapse";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";

const StructureWarpper = styled(motion.div)`
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
const NeedleImg = styled.img`
  width: 100%;
  max-width: 900px;
`;

const Contents = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;

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

//   td:first-child {
//     background: linear-gradient(to right, #2467a2, #253b78);
//     color: white;
//     font-weight: bold;
//     font-weight: 600;
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

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1023px) {
    height: 250px;
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
    padding: 10px !important;
  }
`;

const StyledTableRow = styled(TableRow)(({ index }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
    ...(index === 0 && {
      "& td:last-child": {
        backgroundColor: "white",
      },
      "& td:nth-last-child(2)": {
        backgroundColor: "white",
      },
      "& td:nth-last-child(3)": {
        backgroundColor: "white",
      },
    }),
    ...(index === 6 && {
      "& td:last-child": {
        backgroundColor: "white",
      },
    }),
  },
}));

const MotionTableContainer = motion(TableContainer);

function WireDetail({ contents, needle }) {
  const [specIndex, setSpecIndex] = useState();
  const [specId, setSpecId] = useState();
  const [expendClicked, setExpendClicked] = useState(true);

  // const columns = React.useMemo(
  //   () => [
  //     { Header: "Property", accessor: "property" },
  //     { Header: "15", accessor: "15" },
  //     { Header: "20", accessor: "20" },
  //     { Header: "25", accessor: "25" },
  //     { Header: "30", accessor: "30" },
  //     { Header: "40", accessor: "40" },
  //     { Header: "50", accessor: "50" },
  //     { Header: "70", accessor: "70" },
  //     { Header: "Available", accessor: "Available" },
  //   ],
  //   []
  // );
  const columns = [
    "Material Diameter ØD (µm)",
    "Tolerance (µm)",
    "Coating Diameter ØCD (µm)",
    "Total Length L (mm)",
    "Tolerance (µm)",
    "Length A (mm)",
    "Length B (mm)",
    "Material",
    "Plating",
    "Coating Material",
  ];

  const forceColumns = [
    "Category",
    "Ø30\nRhenium Tungsten",
    "Ø40\nRhenium Tungsten",
    "Ø50\nTungsten",
    "Ø70\nTungsten",
  ];

  const data = React.useMemo(() => contents.spec, []);
  const forceData = React.useMemo(() => contents.force, []);
  const [tableHeader, setTableHeader] = useState("");
  const [index, setIndex] = useState(0);
  const length = contents.sem.length;

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data });

  // const {
  //   getTableProps: getTablePropsForce,
  //   getTableBodyProps: getTableBodyPropsForce,
  //   headerGroups: headerGroupsForce,
  //   rows: rowsForce,
  //   prepareRow: prepareRowForce,
  // } = useTable({ columns: forceColumns, data: forceData });

  const handleTableHeader = (index) => {
    const numTotext = String(index);
    setTableHeader(numTotext);
  };
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
          <div
            style={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <NeedleImg src={contents.img} />
            <WireInfo specId={specId} tableHeader={tableHeader} />
          </div>
          <div
            style={{
              width: "100%",
              height: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={contents.type}
              style={{ width: "100%", maxWidth: 500, transform: "scale(.8)" }}
            />
          </div>
        </InfoBox>
      </StructureWarpper>
      <TableContainer component={Paper}>
        <Table aria-label="transposed table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  align="right"
                  key={column}
                  sx={{ color: "white" }}
                >
                  {column}
                </StyledTableCell>
              ))}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index} index={index}>
                {index === 7 ? (
                  <StyledTableCell colSpan={7}>
                    {row.materialDiameter}
                  </StyledTableCell>
                ) : (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(0)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.materialDiameter}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(1)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.toleranceA}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(2)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.coatingDiameter}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(3)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.totalLength}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(4)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.toleranceB}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(5)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.lengthA}
                  </StyledTableCell>
                )}
                {index !== 7 && (
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(6)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.lengthB}
                  </StyledTableCell>
                )}
                {index === 0 ? (
                  <StyledTableCell rowSpan={6}>{row.material}</StyledTableCell>
                ) : index === 6 ? (
                  <StyledTableCell>{row.material}</StyledTableCell>
                ) : (
                  <StyledTableCell style={{ display: "none" }}>
                    {row.material}
                  </StyledTableCell>
                )}
                {index === 0 && (
                  <StyledTableCell rowSpan={7}>{row.plating}</StyledTableCell>
                )}
                {index === 0 && (
                  <StyledTableCell rowSpan={7}>
                    {row.coatingMaterial}
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TableWrapper style={{ position: "relative" }}>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{ display: "none" }}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowindex) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()} key={rowindex}>
                  {row.cells.map((cell, tdindex) => {
                    if (rowindex >= 0 && tdindex > 0 && tdindex <= 2) {
                      return (
                        <td
                          key={tdindex}
                          {...cell.getCellProps()}
                          onMouseOver={() => handleTableHeader(cell.row.id)}
                          onMouseLeave={() => handleTableHeader("")}
                          style={{
                            backgroundColor: "#FFFBD8",
                            fontWeight: 500,
                          }}
                          id={tdindex}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    }
                    return (
                      <td
                        key={tdindex}
                        {...cell.getCellProps()}
                        onMouseOver={() => handleTableHeader(cell.row.id)}
                        onMouseLeave={() => handleTableHeader("")}
                        className={tdindex}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper> */}
      <Contents>
        <ContentsTitle title={"Force"} onData={showContent} />

        {/* <ContentsTitle>
          <span>Force</span>
        </ContentsTitle>
        <TableWrapper>
          <Table {...getTablePropsForce()}>
            <thead>
              {headerGroupsForce.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyPropsForce()}>
              {rowsForce.map((row) => {
                prepareRowForce(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper> */}

        <Collapse in={expendClicked}>
          <MotionTableContainer
            ref={boxRef}
            initial="hidden"
            animate={boxControls}
            variants={boxVariants(0.5)}
          >
            <Table aria-label="custom table" sx={{ minWidth: 900 }}>
              <StyledTableHead>
                <TableRow>
                  {forceColumns.map((item, index) => (
                    <StyledTableCell sx={{ color: "white" }}>
                      {item}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {forceData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                  >
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "white",
                        background: "#2466A2",
                      }}
                    >
                      {row.item}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.r30}</StyledTableCell>
                    <StyledTableCell align="center">{row.r40}</StyledTableCell>
                    <StyledTableCell align="center">{row.r50}</StyledTableCell>
                    <StyledTableCell align="center">{row.r70}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MotionTableContainer>
        </Collapse>
        <Carousel contents={contents} />
      </Contents>
    </>
  );
}

export default WireDetail;

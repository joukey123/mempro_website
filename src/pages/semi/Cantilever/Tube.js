import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { itemsDetail } from "../../../data";
import { useTable } from "react-table";
import line from "../../../img/line.svg";
import Footer from "../../../components/Footer";
import TubeInfo from "./TubeInfo";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 0 50px;
`;
const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 350px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NeedleImg = styled.img`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
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

const StyledTableRow = styled(TableRow)(({ index }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
    // ...(index === 0 && {
    //   "& td:last-child": {
    //     backgroundColor: "white",
    //   },
    //   "& td:nth-last-child(2)": {
    //     backgroundColor: "white",
    //   },
    //   "& td:nth-last-child(3)": {
    //     backgroundColor: "white",
    //   },
    // }),
    // ...(index === 6 && {
    //   "& td:last-child": {
    //     backgroundColor: "white",
    //   },
    // }),
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
//   }
// `;

function Tube() {
  // const columns = React.useMemo(
  //   () => [
  //     { Header: "Nominal Inside Diameter", accessor: "nominalInsideDiameter" },
  //     {
  //       Header: "Tolerance of Inside Diameter",
  //       accessor: "toleranceInsideDiameter",
  //     },
  //     { Header: "Standard Wall Thickness", accessor: "wallThickness" },
  //     { Header: "Standard Outside Diameter", accessor: "outsideDiameter" },
  //     { Header: "Standard Length", accessor: "length" },
  //     { Header: "MOQ", accessor: "moq" },
  //   ],
  //   []
  // );

  const columns = [
    "Nominal\nInside\nDiameter",
    "Tolerance\nof\nInside\nDiameter",
    "Standard\nWall\nThickness",
    "Standard\nOutside\nDiameter",
    "Standard\nLength",
    "MOQ",
  ];
  const data = React.useMemo(() => itemsDetail["tube"].spec[0].items, []);
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const [sublink, setSublink] = useState(paths[2]);
  const tube = itemsDetail[`${sublink}`];
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data });
  const [tableHeader, setTableHeader] = useState("");

  const handleTableHeader = (tableheader) => {
    const tableheadertoString = String(tableheader);
    setTableHeader(tableheadertoString);
  };

  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <StructureWarpper>
          <NeedleImg src={tube.img} />
          <TubeInfo tableHeader={tableHeader} />
        </StructureWarpper>
        {/* <TableWrapper>
          <Table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      onMouseOver={() => handleTableHeader(column.Header)}
                      onMouseLeave={() => handleTableHeader("")}
                      {...column.getHeaderProps()}
                    >
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
                      <td
                        onMouseOver={() =>
                          handleTableHeader(cell.column.Header)
                        }
                        onMouseLeave={() => handleTableHeader("")}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper> */}
        <TableContainer
          component={Paper}
          sx={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}
        >
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
                  <StyledTableCell
                    align="center"
                    sx={{ width: 200 }}
                    onMouseOver={() => handleTableHeader(0)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.nominalInsideDiameter}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(1)}
                    onMouseLeave={() => handleTableHeader("")}
                    sx={{ width: 200 }}
                  >
                    {row.toleranceInsideDiameter}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(2)}
                    onMouseLeave={() => handleTableHeader("")}
                    sx={{ width: 200 }}
                  >
                    {row.wallThickness}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(3)}
                    onMouseLeave={() => handleTableHeader("")}
                    sx={{ width: 200 }}
                  >
                    {row.outsideDiameter}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(4)}
                    onMouseLeave={() => handleTableHeader("")}
                    sx={{ width: 200 }}
                  >
                    {row.length}
                  </StyledTableCell>
                  <StyledTableCell>{row.moq}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Tube;

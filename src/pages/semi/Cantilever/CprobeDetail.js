import styled from "styled-components";
import line from "../../../img/line.svg";
import needleInfo from "../../../img/cantilever/cantilever_needle_info.svg";
import React, { useState } from "react";
import { useTable } from "react-table";
import { AnimatePresence, motion, transform } from "framer-motion";
import CantileverProbeInfo from "./CantileverProbeInfo";
import CoaxialInfo from "./CoaxialInfo";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Application from "../../../components/Application";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";
import useTranslation from "../../../Hook/useTranslation";
const Wrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 1023px) {
    padding: 0;
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
const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  height: 500px;
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
  @media (max-width: 1023px) {
    height: 250px;
    padding: 20px;
  }
`;

const NeedleImg = styled.img`
  width: 100%;
  max-width: 875px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -30%);
  @media (max-width: 1023px) {
    width: 95%;
  }
`;
const TableWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  border-radius: 8px;
  overflow: hidden;
  border: 0.5px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 140px;
  margin-top: 50px;
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
    white-space: nowrap;
    @media (max-width: 1023px) {
      font-size: 14px;
    }
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
//   max-width: 1100px;
//   border-collapse: collapse;
//   text-align: center;
//   font-weight: 300;
//   font-size: 15px;
//   margin-top: 30px;

//   :first-child tr {
//     background: linear-gradient(to right, #2467a2, #253b78);
//     :first-child {
//       background-color: ${(props) => props.theme.colors.white};
//     }
//   }

//   tr,
//   td {
//     :first-child {
//       background-color: ${(props) => props.theme.colors.white};
//     }
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
//   }
// `;

function CprobeDetail({ needle, contents }) {
  const data = React.useMemo(() => contents.needle.spec, []);

  const coaxialData = React.useMemo(() => contents.coaxial.spec, []);

  const { getText } = useTranslation();
  // const coaxialColumns = React.useMemo(
  //   () => [
  //     { Header: "", accessor: "category" },
  //     { Header: "Specification", accessor: "specification" },
  //     { Header: "Material (Probe)", accessor: "materialProbe" },
  //     { Header: "Material (Tube)", accessor: "materialTube" },
  //     { Header: "Coating (Probe)", accessor: "coatingProbe" },
  //   ],
  //   []
  // );
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "",
  //       accessor: "Category",
  //     },
  //     {
  //       Header: "X-position",
  //       accessor: "Xposition",
  //     },
  //     {
  //       Header: "Taper Diameter",
  //       accessor: "TaperDiameter",
  //     },
  //     {
  //       Header: "Taper Length",
  //       accessor: "TaperLength",
  //     },
  //     {
  //       Header: "Pin Length",
  //       accessor: "PinLength",
  //     },
  //     {
  //       Header: "Pin Diameter",
  //       accessor: "PinDiameter",
  //     },
  //   ],
  //   []
  // );
  const columns = [
    "Category",
    "X-position",
    "Taper\nDiameter",
    "Taper\nLength",
    "Pin\nLength",
    "Pin\nDiameter",
  ];

  const coaxialColumns = [
    "Specification",
    "Material(Probe)",
    "Material(Tube)",
    "Coating(Probe)",
  ];
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns: needle === "Coaxial" ? coaxialColumns : columns,
  //     data: needle === "Coaxial" ? coaxialData : data,
  //   });

  const [tableHeader, setTableHeader] = useState("");

  const handleTableHeader = (tableheader) => {
    const tableheadertoString = String(tableheader);
    setTableHeader(tableheadertoString);
  };

  return (
    <Wrapper>
      <StructureWarpper>
        {needle ? (
          <NeedleName>
            <span>{needle}</span>: Specification
          </NeedleName>
        ) : (
          <NeedleName>Specification</NeedleName>
        )}
        {needle === "Coaxial" ? (
          <>
            <NeedleImg
              src={contents.coaxial.img}
              style={{ top: "56.6%", left: "50%" }}
            />
            <CoaxialInfo tableHeader={tableHeader} />
          </>
        ) : (
          <>
            <NeedleImg src={contents.needle.img} />
            <CantileverProbeInfo tableHeader={tableHeader} />
          </>
        )}
        {/* <NeedleImginfo src={needleInfo} /> */}
      </StructureWarpper>
      {/* <Table {...getTableProps()} className="table">
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
                    onMouseOver={() => handleTableHeader(cell.column.Header)}
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
      </Table> */}
      {needle !== "Coaxial" && (
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
                  <StyledTableCell
                    align="center"
                    sx={{
                      color: "white",
                      background: "#2466A2",
                    }}
                  >
                    {row.Category}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(0)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.Xposition}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(1)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.TaperDiameter}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(2)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.TaperLength}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(3)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.PinLength}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(4)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.PinDiameter}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {needle === "Coaxial" && (
        <TableContainer component={Paper}>
          <Table aria-label="transposed table">
            <StyledTableHead>
              <TableRow>
                {coaxialColumns.map((column) => (
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
              {coaxialData.map((row, index) => (
                <StyledTableRow key={index} index={index}>
                  <StyledTableCell align="center">
                    {row.specification}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(0)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.materialProbe}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(1)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.materialTube}
                  </StyledTableCell>
                  <StyledTableCell
                    onMouseOver={() => handleTableHeader(2)}
                    onMouseLeave={() => handleTableHeader("")}
                  >
                    {row.coatingProbe}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Wrapper>
  );
}

export default CprobeDetail;

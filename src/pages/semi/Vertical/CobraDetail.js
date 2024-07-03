import styled from "styled-components";
import CobraInfo from "./CobraInfo";
import React, { useState } from "react";
import line from "../../../img/line.svg";
import { motion } from "framer-motion";
import { useTable } from "react-table";
import Application from "../../../components/Application";
import ContentsTitle from "../../../components/ContentsTitle";
import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";

const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  height: 750px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const NeedleName = styled.h1`
  font-size: 18px;
  position: absolute;
  top: 50px;
  left: 50px;
  span {
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;
    margin-right: 10px;
  }
`;
const NeedleImg = styled.img`
  width: 100%;
  max-width: 850px;
  margin-bottom: 50px;
  margin-left: 80px;
  margin-top: 100px;
`;

const SpecWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
`;

const TextWrapper = styled.div`
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
  }
`;

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
        <NeedleImg src={contents.img} />
        <CobraInfo specId={specId} />
        <SpecWrapper>
          {contents.spec.map((item, index) => (
            <TextWrapper
              key={index}
              onMouseOver={() => handleSpecOver(index, item.id)}
              onMouseLeave={handleSpecLeave}
            >
              <Number $hover={specIndex + 1 === item.id}>{item.id}</Number>
              <Column>
                <Name>{item.name}</Name>
                <Des>{item.description}</Des>
              </Column>
            </TextWrapper>
          ))}
        </SpecWrapper>
      </StructureWarpper>
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
          <TableContainer component={Paper}>
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
          </TableContainer>
        </Collapse>
        <Application contents={contents} />
      </Contents>
    </>
  );
}

export default CobraDetail;

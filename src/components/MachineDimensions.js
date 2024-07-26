import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { useState } from "react";

import ContentsTitle from "./ContentsTitle";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function MachineDimensions({ data, maxWidth }) {
  const [expendClicked, setExpendClicked] = useState(true);
  console.log(data, "data");
  const showContent = (show) => {
    setExpendClicked(show);
  };
  const hasProbeCardSize = data.find(
    (item) => item.probeCardSize && item.probeCardSize.trim() !== ""
  );

  return (
    <div className="dimensions">
      <ContentsTitle title={"Dimensions"} onData={showContent} />
      <Collapse in={expendClicked}>
        <TableContainer
          component={Paper}
          sx={{ width: "95%", margin: "0 auto" }}
        >
          <Table aria-label="custom table">
            <StyledTableHead>
              <TableRow>
                <StyledTableCell align="center" sx={{ color: "white" }}>
                  Model
                </StyledTableCell>
                {hasProbeCardSize && (
                  <StyledTableCell align="center" sx={{ color: "white" }}>
                    ProbeCard Size
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" sx={{ color: "white" }}>
                  Machine Size
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
                  <StyledTableCell align="center">{row.model}</StyledTableCell>

                  {hasProbeCardSize && (
                    <StyledTableCell align="center">
                      {row.probeCardSize}
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="center">
                    {row.machineSize}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </div>
  );
}

export default MachineDimensions;

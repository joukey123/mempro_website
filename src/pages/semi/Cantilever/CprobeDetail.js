import styled from "styled-components";
import line from "../../../img/line.svg";
import needleInfo from "../../../img/cantilever/cantilever_needle_info.svg";
import React, { useState } from "react";
import { useTable } from "react-table";
import { AnimatePresence, motion, transform } from "framer-motion";
import CantileverProbeInfo from "./CantileverProbeInfo";
import CoaxialInfo from "./ CoaxialInfo";

const Wrapper = styled.div`
  padding: 0 50px;
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
`;

const NeedleImg = styled.img`
  width: 100%;
  max-width: 875px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -30%);
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
const Table = styled.table`
  width: 100%;
  max-width: 1100px;
  border-collapse: collapse;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  margin-top: 30px;

  :first-child tr {
    background: linear-gradient(to right, #2467a2, #253b78);
    :first-child {
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  tr,
  td {
    :first-child {
      background-color: ${(props) => props.theme.colors.white};
    }
    padding: 15px;
    border: 0.1px solid ${(props) => props.theme.colors.border};
    &:hover {
      background-color: ${(props) => props.theme.colors.white};
    }
  }
  th {
    color: white;
    padding: 15px;
    font-weight: 600;
  }
`;

function CprobeDetail({ needle, contents }) {
  const data = React.useMemo(() => contents.needle.spec, []);
  const coaxialData = React.useMemo(() => contents.coaxial.spec, []);
  const coaxialColumns = React.useMemo(
    () => [
      { Header: "", accessor: "category" },
      { Header: "Specification", accessor: "specification" },
      { Header: "Material (Probe)", accessor: "materialProbe" },
      { Header: "Material (Tube)", accessor: "materialTube" },
      { Header: "Coating (Probe)", accessor: "coatingProbe" },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "Category",
      },
      {
        Header: "X-position",
        accessor: "Xposition",
      },
      {
        Header: "Taper Diameter",
        accessor: "TaperDiameter",
      },
      {
        Header: "Taper Length",
        accessor: "TaperLength",
      },
      {
        Header: "Pin Length",
        accessor: "PinLength",
      },
      {
        Header: "Pin Diameter",
        accessor: "PinDiameter",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: needle === "Coaxial" ? coaxialColumns : columns,
      data: needle === "Coaxial" ? coaxialData : data,
    });

  const [tableHeader, setTableHeader] = useState("");

  const handleTableHeader = (tableheader) => {
    setTableHeader(tableheader);
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
            <CoaxialInfo />
          </>
        ) : (
          <>
            <NeedleImg src={contents.needle.img} />
            <CantileverProbeInfo tableHeader={tableHeader} />
          </>
        )}
        {/* <NeedleImginfo src={needleInfo} /> */}
      </StructureWarpper>
      <Table {...getTableProps()} className="table">
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
      </Table>
    </Wrapper>
  );
}

export default CprobeDetail;

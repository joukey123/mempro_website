import styled, { keyframes } from "styled-components";
import CobraInfo from "./CobraInfo";
import React, { useState } from "react";
import line from "../../../img/line.svg";
import { motion } from "framer-motion";
import { useTable } from "react-table";
import WireInfo from "./WireInfo";

const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  height: 650px;
  margin: 0px auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
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
  padding: 50px 0;
  margin-top: 110px;
  margin-left: 60px;
  transform: scale(1.03);
`;

const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;
const ContentsTitle = styled.div`
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 3px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 150px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  height: 140px;
  border-collapse: collapse;
  text-align: center;
  font-weight: 300;
  font-size: 15px;

  :first-child tr {
    background: linear-gradient(to right, #2467a2, #253b78);
  }

  td:first-child {
    background: linear-gradient(to right, #2467a2, #253b78);
    color: white;
    font-weight: bold;
    font-weight: 600;
  }
  tr,
  td {
    padding: 15px;
    border: 0.1px solid ${(props) => props.theme.colors.border};
    align-content: center;
    &:hover {
      background-color: ${(props) => props.theme.colors.white};
    }
  }
  th {
    color: white;
    padding: 15px;
    font-weight: 600;
    width: 100px;
    align-content: center;
    border: 0.1px solid ${(props) => props.theme.colors.border};
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImgSlider = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgSliderWrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0 -10px;
`;
const ImgSliderBox = styled.img`
  max-width: 900px;
  width: 80%;
  height: 250px;
  object-fit: contain;
`;
const ImgSliderBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${(props) => props.theme.colors.gray};
  }
`;
const CircleBox = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.blue : "#d9d9d9"};
  margin: 0 5px;
  animation: ${(props) => props.$isActive && grow} 0.3s forwards;
`;
const grow = keyframes`
  from {
    width: 10px;
  }  
  to {
    width: 30px;
    border-radius: 5px;
  }
`;
function WireDetail({ contents, needle }) {
  const [specIndex, setSpecIndex] = useState();
  const [specId, setSpecId] = useState();

  const columns = React.useMemo(
    () => [
      { Header: "Property", accessor: "property" },
      { Header: "15", accessor: "15" },
      { Header: "20", accessor: "20" },
      { Header: "25", accessor: "25" },
      { Header: "30", accessor: "30" },
      { Header: "40", accessor: "40" },
      { Header: "50", accessor: "50" },
      { Header: "70", accessor: "70" },
      { Header: "Available", accessor: "Available" },
    ],
    []
  );

  const forceColumns = React.useMemo(
    () => [
      {
        Header: "Item",
        accessor: "item",
      },
      {
        Header: "Ø30\nRhenium Tungsten",
        accessor: "Ø30",
      },
      {
        Header: "Ø40\nRhenium Tungsten",
        accessor: "Ø40",
      },
      {
        Header: "Ø50\nTungsten",
        accessor: "Ø50",
      },
      {
        Header: "Ø70\nTungsten",
        accessor: "Ø70",
      },
    ],
    []
  );
  const data = React.useMemo(() => contents.spec, []);
  const forceData = React.useMemo(() => contents.force, []);
  const [tableHeader, setTableHeader] = useState("");
  const [index, setIndex] = useState(0);
  const length = contents.sem.length;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const {
    getTableProps: getTablePropsForce,
    getTableBodyProps: getTableBodyPropsForce,
    headerGroups: headerGroupsForce,
    rows: rowsForce,
    prepareRow: prepareRowForce,
  } = useTable({ columns: forceColumns, data: forceData });

  const handleTableHeader = (tableheader) => {
    setTableHeader(tableheader);
  };

  const handleImgSlider = (text) => {
    if (text === "prev") {
      setIndex((prev) => (prev === 0 ? (prev = length - 1) : prev - 1));
    } else if ((text = "next")) {
      setIndex((prev) => (prev === length - 1 ? (prev = 0) : prev + 1));
    }
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
        <WireInfo specId={specId} tableHeader={tableHeader} />
        <img
          src={contents.type}
          width={450}
          style={{ marginLeft: 250, marginTop: 100 }}
        />
      </StructureWarpper>
      <TableWrapper style={{ position: "relative" }}>
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
      </TableWrapper>
      <Contents>
        <ContentsTitle>
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
        </TableWrapper>
        <ContentsTitle>
          <span>SEM</span>
        </ContentsTitle>
        <ImgSlider>
          <ImgSliderBtn onClick={() => handleImgSlider("prev")}>
            <i className="fa-solid fa-chevron-left"></i>
          </ImgSliderBtn>
          <ImgSliderWrapper>
            <ImgSliderBox src={contents.sem[index].img} />
            <span>{contents.sem[index].text}</span>
            <CircleBox>
              {contents.sem.map((item, indexs) => (
                <Circle key={indexs} $isActive={indexs === index}></Circle>
              ))}
            </CircleBox>
          </ImgSliderWrapper>
          <ImgSliderBtn onClick={() => handleImgSlider("next")}>
            <i className="fa-solid fa-chevron-right"></i>
          </ImgSliderBtn>
        </ImgSlider>
      </Contents>
    </>
  );
}

export default WireDetail;

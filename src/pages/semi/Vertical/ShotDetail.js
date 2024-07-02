import styled, { keyframes } from "styled-components";
import line from "../../../img/line.svg";
import ShortInfo from "./ShortInfo";
import React, { useState } from "react";
import { useTable } from "react-table";

const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 450px;
  margin: 50px auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
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
const SpecTr = styled.tr`
  :first-child {
    background: linear-gradient(to right, #2467a2, #253b78);
    color: white;
    font-weight: 500;
  }
`;
const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
const ContentsWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(${(props) => props.$length}, auto);
  font-size: 14px;
  text-align: center;
  gap: 50px;
  text-transform: capitalize;
`;
const ApplicationImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;
function ShortDeatail({ contents, needle }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Property",
        accessor: "property",
      },
      {
        Header: "Value",
        accessor: "value1",
      },
    ],
    []
  );
  const columnsForce = React.useMemo(
    () => [
      {
        Header: "O/D (µm)",
        accessor: "od",
      },

      {
        Header: "NP40 (Palladium Alloy 1)",
        columns: [
          {
            Header: "C.C.C (mA)",
            accessor: "np40_ccc",
          },
          {
            Header: "Force (g/f)",
            accessor: "np40_force",
          },
        ],
      },
      {
        Header: "NP70 (Palladium Alloy 2)",
        columns: [
          {
            Header: "C.C.C (mA)",
            accessor: "nc70_ccc",
          },
          {
            Header: "Force (g/f)",
            accessor: "nc70_force",
          },
        ],
      },
    ],
    []
  );
  const data = React.useMemo(() => contents.spec, []);
  const dataForce = React.useMemo(() => contents.force, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const {
    getTableProps: getTablePropsForce,
    getTableBodyProps: getTableBodyPropsForce,
    headerGroups: headerGroupsForce,
    rows: rowsForce,
    prepareRow: prepareRowForce,
  } = useTable({ columns: columnsForce, data: dataForce });
  const [index, setIndex] = useState(0);
  const length = contents.sem.length;
  const [tableHeader, setTableHeader] = useState("");

  const handleImgSlider = (text) => {
    if (text === "prev") {
      setIndex((prev) => (prev === 0 ? (prev = length - 1) : prev - 1));
    } else if ((text = "next")) {
      setIndex((prev) => (prev === length - 1 ? (prev = 0) : prev + 1));
    }
  };
  const handleTableHeader = (tableheader) => {
    setTableHeader(tableheader);
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
        <ShortInfo tableHeader={tableHeader} />
      </StructureWarpper>
      <TableWrapper>
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
      </TableWrapper>
      <Contents>
        <ContentsTitle>
          <span>C.C.C & Force</span>
        </ContentsTitle>
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
        <div className="imgslider">
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
        </div>
        <div className="application">
          <ContentsTitle>
            <span>Application</span>
          </ContentsTitle>
          <ContentsWrapper $length={contents.applications.length}>
            {contents.applications.map((item) => (
              <div>
                <ApplicationImg src={item.img} />
                <div>{item.text}</div>
              </div>
            ))}
          </ContentsWrapper>
        </div>
      </Contents>
    </>
  );
}

export default ShortDeatail;

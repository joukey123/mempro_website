import styled from "styled-components";
import CobraInfo from "./CobraInfo";
import React, { useState } from "react";
import line from "../../../img/line.svg";
import { motion } from "framer-motion";
import { useTable } from "react-table";

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
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 100px;
  margin-left: 60px;
  transform: scale(1.03);
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
  font-weight: 300;
`;

const Column = styled.div``;
const Name = styled.h1`
  margin-bottom: 3px;
`;
const Des = styled.span``;
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
  tr,
  td {
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
    width: 100px;
    align-content: center;
    border: 0.1px solid ${(props) => props.theme.colors.border};
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

  const columns = React.useMemo(
    () => [
      {
        Header: "Diameter",
        accessor: "diameter",
      },

      {
        Header: "NC30 (P7)",
        columns: [
          {
            Header: "C.C.C (mA)",
            accessor: "nc30_ccc",
          },
          {
            Header: "Force (g/f)",
            accessor: "nc30_force",
          },
        ],
      },
      {
        Header: "NC40 (H3C)",
        columns: [
          {
            Header: "C.C.C (mA)",
            accessor: "nc40_ccc",
          },
          {
            Header: "Force (g/f)",
            accessor: "nc40_force",
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
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
        <ContentsTitle>
          <span>C.C.C & Force</span>
        </ContentsTitle>
        <Table {...getTableProps()}>
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
        </Table>
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
      </Contents>
    </>
  );
}

export default CobraDetail;

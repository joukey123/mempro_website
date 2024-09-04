import styled from "styled-components";
import line from "../../../img/line.svg";
import CoatingInfo from "./CoatingInfo";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";

const Wrapper = styled(motion.div)``;
const MotionTableContainer = motion(TableContainer);

const StyledTableCell = styled(TableCell)`
  && {
    text-align: center;
    border-right: 1px solid #dfdfdf;
    font-size: 16px;
    background: ${(props) => props.theme.palette.table.main};
    color: white;
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
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    height: 300px;
  }
`;
const SpecWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  padding-top: 50px;
`;
const NeedleImg = styled.img`
  width: 100%;
  max-width: 800px;
  position: absolute;
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

function CoatingDetail({ contents }) {
  const coating = contents.coating;
  const [specIndex, setSpecIndex] = useState();
  const [specId, setSpecId] = useState();

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  const {
    ref: childRef,
    controls: childControls,
    animateVariants: childVariants,
  } = useAnimateOnInView(0, 0.3);

  const handleSpecOver = (index, id) => {
    setSpecIndex(index);
    setSpecId(id);
  };
  const handleSpecLeave = () => {
    setSpecIndex(-1);
    setSpecId(-1);
  };

  return (
    <Wrapper>
      <StructureWarpper
        ref={boxRef}
        initial="hidden"
        animate={boxControls}
        variants={boxVariants(0.3)}
      >
        <NeedleImg src={coating.img} />
        <CoatingInfo hover={specId} />
        {/* <SpecWrapper>
          {coating.spec.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 15,
                fontWeight: 300,
                fontSize: "18px",
              }}
              onMouseOver={() => handleSpecOver(index, item.id)}
              onMouseLeave={handleSpecLeave}
            >
              <Number $hover={specIndex + 1 === item.id}>{item.id}</Number>
              <span style={{ fontWeight: "500", marginRight: 20 }}>
                {item.name} :
              </span>
              <span>{item.description}</span>
            </div>
          ))}
        </SpecWrapper> */}
      </StructureWarpper>
      <MotionTableContainer
        component={Paper}
        sx={{ marginTop: "10px", whiteSpace: "nowrap" }}
        ref={childRef}
        initial="hidden"
        animate={childControls}
        variants={childVariants(0.7)}
      >
        <Table>
          <TableBody>
            {coating.spec.map((item, index) => (
              <TableRow
                key={index}
                onMouseOver={() => handleSpecOver(index, item.id)}
                onMouseLeave={handleSpecLeave}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    specIndex + 1 === item.id ? "#f5f5f5" : "inherit",
                }}
              >
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: specIndex + 1 === item.id ? "bold" : "normal",
                    width: "10%",
                  }}
                >
                  {item.id}
                </StyledTableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    width: "20%",
                    fontSize: "16px",
                  }}
                  style={{ borderRight: "1px solid #dfdfdf" }}
                >
                  {item.name}:
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 300,
                    fontSize: "16px",
                    width: "70%",
                  }}
                  style={{ borderRight: "1px solid #dfdfdf" }}
                >
                  {item.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MotionTableContainer>
    </Wrapper>
  );
}

export default CoatingDetail;

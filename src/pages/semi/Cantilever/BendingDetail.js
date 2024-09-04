import styled from "styled-components";
import line from "../../../img/line.svg";
import BendinInfo from "./BendingInfo";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import useAnimateOnInView from "../../../Hook/useAnimationOnInView";
import { motion } from "framer-motion";

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
const StructureWarpper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1023px) {
    padding: 0;
    height: auto;
  }
`;
const BendingSpecWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 0 0 8px 8px;
`;
const NeedleImg = styled.img`
  width: 95%;
  max-width: 875px;
  position: absolute;
  @media (max-width: 1023px) {
    transform: translateX(70%) scale(2);
  }
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

function BendingDetail({ contents }) {
  const bending = contents.bending;
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
        <NeedleImg src={bending.img} />
        <BendinInfo hover={specId} />
      </StructureWarpper>
      {/* <BendingSpecWrapper>
        {bending.spec.map((item, index) => (
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
      </BendingSpecWrapper> */}
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
            {bending.spec.map((item, index) => (
              <TableRow
                key={index}
                onMouseOver={() => handleSpecOver(index, item.id)}
                onMouseLeave={handleSpecLeave}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    specIndex + 1 === item.id ? "#f5f5f5" : "inherit",
                }}
              >
                <StyledTableCell
                  style={{
                    fontWeight: specIndex + 1 === item.id ? "500" : "300",
                    fontSize: "16px",
                  }}
                >
                  {item.id}
                </StyledTableCell>
                <TableCell
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    borderRight: "1px solid #dfdfdf",
                  }}
                >
                  {item.name}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "300",
                    fontSize: "16px",
                    borderRight: "1px solid #dfdfdf",
                  }}
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

export default BendingDetail;

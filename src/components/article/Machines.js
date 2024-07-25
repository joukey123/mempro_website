import styled from "styled-components";
import { Button } from "@mui/material";
import { useState } from "react";
const BtnWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 50px;
  display: flex;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  max-width: 250px;
  color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  border-color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  padding: 30px 20px !important;
  img {
    filter: ${(props) => props.$disabled && "grayscale(1)"};
  }
  span {
    color: ${(props) => props.$disabled && "#E4E4E4"} !important;
  }
  margin-right: 20px !important;
`;

const MachineImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
  margin-bottom: 50px;
`;
function Machines({ machinBtnArray, onModel }) {
  const [type, setType] = useState("");

  const handleType = (item, num) => {
    setType(item);
    onModel(num);
  };
  return (
    <BtnWrapper>
      {machinBtnArray.map((item, index) => (
        <StyledButton
          variant="outlined"
          size="large"
          value={item.model}
          key={index}
          color="primary"
          onClick={() => handleType(item.model, item.num)}
          $disabled={item.model !== type}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MachineImg src={item.img} />
            <span
              style={{
                whiteSpace: "pre-line",
                textAlign: "left",
                lineHeight: 1.5,
                fontSize: "14px",
                fontWeight: 300,
                marginBottom: "5px",
                color: "black",
              }}
            >
              {item.model}
            </span>
            <span
              style={{
                whiteSpace: "pre-line",
                textAlign: "left",
                lineHeight: 1.3,
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              {item.title.replace(
                /(Sanding|Bending|Tester|Punching|Prober|Caulking|Contact|Aging)/gi,
                "\n$1"
              )}
            </span>
          </div>
        </StyledButton>
      ))}
    </BtnWrapper>
  );
}

export default Machines;

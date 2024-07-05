import { useState } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContentTitle = styled.div`
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 3px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  font-weight: 600;
  margin-top: 150px;
`;
const StyledToggleButton = styled(ToggleButton)`
  border: 0 !important;
  transform: scale(0.8);
`;

function ContentsTitle({ title, onData }) {
  const [selected, setSelected] = useState(true);
  const handleClick = () => {
    setSelected((prev) => !prev);
    onData((prev) => !prev);
  };
  return (
    <ContentTitle>
      <span style={{ fontSize: 18 }}>{title}</span>
      <StyledToggleButton
        value="check"
        selected={selected}
        onClick={handleClick}
      >
        {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </StyledToggleButton>
    </ContentTitle>
  );
}

export default ContentsTitle;

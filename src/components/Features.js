import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { useState } from "react";

import Collapse from "@mui/material/Collapse";
import ContentsTitle from "./ContentsTitle";
import { WidthFull } from "@mui/icons-material";

const Icon = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
const StyledGridContainer = styled(Grid)``;

function Features({ contents, maxWidth }) {
  const maxNumber = 12;
  const length = contents.features.length;
  const [rowNumber, setRowNumber] = useState(maxNumber / length);
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  if (rowNumber <= 2.5) {
    setRowNumber(4);
  }
  return (
    <div className="features" style={{ margin: "150px 0" }}>
      <ContentsTitle title={"Features"} onData={showContent} />
      <Collapse in={expendClicked}>
        <Box sx={{ flexGrow: 1, maxWidth, margin: "0 auto" }}>
          <StyledGridContainer container spacing={3}>
            {contents.features.map((item, index) => (
              <Grid
                xs={maxNumber / 2}
                md={rowNumber}
                key={index}
                sx={{
                  textAlign: "center",
                }}
              >
                <Icon className={`img${index}`} src={item.icon} />
                <div style={{ marginTop: 20, textTransform: "capitalize" }}>
                  {item.text}
                </div>
              </Grid>
            ))}
          </StyledGridContainer>
        </Box>
      </Collapse>
    </div>
  );
}

export default Features;

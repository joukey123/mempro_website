import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { useState } from "react";

import Collapse from "@mui/material/Collapse";
import ContentsTitle from "./ContentsTitle";
import { WidthFull } from "@mui/icons-material";
const FeaturesBox = styled.div`
  margin: 150px 0;
  @media (max-width: 1023px) {
    margin: 100px 0;
  }
`;
const Icon = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  @media (max-width: 1023px) {
    width: 80px;
    height: 80px;
  }
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
    <FeaturesBox className="features">
      <ContentsTitle title={"Features"} onData={showContent} />
      <Collapse in={expendClicked}>
        <Box sx={{ flexGrow: 1, maxWidth, margin: "0 auto" }}>
          <StyledGridContainer container spacing={3}>
            {contents.features.map((item, index) => (
              <Grid
                xs={12 / length}
                md={rowNumber}
                key={index}
                sx={{
                  textAlign: "center",
                }}
              >
                <Icon className={`img${index}`} src={item.icon} />
                <div style={{ marginTop: 0, textTransform: "capitalize" }}>
                  {item.text}
                </div>
              </Grid>
            ))}
          </StyledGridContainer>
        </Box>
      </Collapse>
    </FeaturesBox>
  );
}

export default Features;

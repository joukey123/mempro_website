import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import ContentsTitle from "./ContentsTitle";

const ApplicationImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledGridContainer = styled(Grid)``;
function Application({ contents }) {
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  return (
    <div className="application" style={{ margin: "150px 0" }}>
      <ContentsTitle title={"Application"} onData={showContent} />
      <Collapse in={expendClicked}>
        <StyledGridContainer container spacing={3}>
          {contents.applications.map((item) => (
            <Grid
              xs={12 / contents.applications.length}
              sx={{ textAlign: "center" }}
            >
              <ApplicationImg src={item.img} />
              <div>{item.text}</div>
            </Grid>
          ))}
        </StyledGridContainer>
      </Collapse>
    </div>
  );
}

export default Application;

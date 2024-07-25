import { Collapse } from "@mui/material";
import ContentsTitle from "../ContentsTitle";
import ReactPlayer from "react-player";
import { useState } from "react";

function MachineVideo({ url }) {
  const [expendClicked, setExpendClicked] = useState(true);
  const showContent = (show) => {
    setExpendClicked(show);
  };

  return (
    <div className="video">
      <ContentsTitle title={"Video"} onData={showContent} />
      <Collapse in={expendClicked}>
        <ReactPlayer url={url} controls width={"95%"} />
      </Collapse>
    </div>
  );
}
export default MachineVideo;

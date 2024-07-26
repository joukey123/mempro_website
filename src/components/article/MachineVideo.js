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
        <ReactPlayer
          url={url}
          controls
          width={"95%"}
          style={{ margin: "0 auto" }}
        />
        {/* <video controls width={"95%"} style={{ margin: "0 auto" }}>
          <source
            src="https://mempro.myqnapcloud.com:85/2.mp4"
            type="video/mp4"
          />
        </video>
        <video controls width={"95%"} style={{ margin: "0 auto" }}>
          <source
            src="http://mempro.myqnapcloud.com:85/sanding.mp4"
            type="video/mp4"
          />
        </video> */}
      </Collapse>
    </div>
  );
}
export default MachineVideo;

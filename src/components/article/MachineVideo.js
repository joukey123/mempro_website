import { Collapse, useMediaQuery } from "@mui/material";
import ContentsTitle from "../ContentsTitle";
import ReactPlayer from "react-player";
import { useState } from "react";
import { motion } from "framer-motion";
import useAnimateOnInView from "../../Hook/useAnimationOnInView";

function MachineVideo({ url }) {
  const [expendClicked, setExpendClicked] = useState(true);
  const showContent = (show) => {
    setExpendClicked(show);
  };
  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);

  const isMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <motion.div
      className="video"
      ref={boxRef}
      initial="hidden"
      animate={boxControls}
      variants={boxVariants(0)}
    >
      <ContentsTitle title={"Video"} onData={showContent} />
      <Collapse in={expendClicked}>
        <ReactPlayer
          url={url}
          controls
          width={"95%"}
          height={isMobile ? null : "350px"}
          style={{ margin: "0 auto" }}
          className="videoplay"
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
    </motion.div>
  );
}
export default MachineVideo;

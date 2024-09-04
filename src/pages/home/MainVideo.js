import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import WheelAnimation from "../../components/WheelAnimation";
import { useMediaQuery } from "@mui/material";

const VideoBox = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(90deg, #06080b, #1a222e);
  overflow: hidden;
  display: flex;
`;

const Video = styled.video`
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${(props) => props.$ratio};
  object-fit: cover;
  height: 100vh;
`;
const TypewriterBox = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  text-align: center;
  line-height: 1.3;
  font-weight: bold;
`;
const Span = styled.span`
  position: absolute;
  color: white;
  left: 50%;
  bottom: 0px;
  z-index: 99;
  transform: translate(-50%, -50%) ${(props) => props.$mobile && "scale(.7)"};
  font-size: 16px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  align-items: center;
  :first-child {
    margin-bottom: 5px;
  }
  :last-child {
    font-size: 15px;
  }
`;

function MainVideo() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <VideoBox>
        <Span $mobile={isMobile}>
          {/* <span>Trading Service for YOU</span> */}
          <WheelAnimation />
        </Span>
        {isMobile ? (
          <Video
            muted
            autoPlay
            playsInline
            loop
            src="https://www.mempro.co.kr/mobile.mp4"
            $ratio={12 / 19}
          ></Video>
        ) : (
          <Video
            muted
            autoPlay
            playsInline
            loop
            src="https://www.mempro.co.kr/pc.mp4"
            $ratio={16 / 9}
          ></Video>
        )}
        <TypewriterBox className="typewriter-box">
          {isMobile ? (
            <Typewriter
              options={{
                cursor: "",
                strings: [
                  '<div style="display:flex; flex-direction:column; align-items:center; font-size:50px;"><span style="font-size:60px !important;   margin-bottom: -70px">Commitment</span><br>&amp;<br><span style="font-size:60px !important">Trust</span></div>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          ) : (
            <Typewriter
              options={{
                cursor: "",
                strings: [
                  '<div style="display:flex; flex-direction:column; align-items:center; font-size:70px;"><span style="font-size:100px !important;   margin-bottom: -70px">Commitment</span><br>&amp;<br><span style="font-size:100px !important">Trust</span></div>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          )}
        </TypewriterBox>
      </VideoBox>
    </>
  );
}

export default MainVideo;

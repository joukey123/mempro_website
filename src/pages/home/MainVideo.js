import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import WheelAnimation from "../../components/WheelAnimation";

const VideoBox = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(90deg, #06080b, #1a222e);
  overflow: hidden;
`;

const Video = styled.video`
  min-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TypewriterBox = styled.div`
  color: white;
  font-size: 75px;
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
  bottom: 3%;
  z-index: 99;
  transform: translate(-50%, -50%);
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
  return (
    <>
      <VideoBox>
        <TypewriterBox className="typewriter-box">
          <Typewriter
            options={{
              strings: [
                '<div style="display:flex; flex-direction:column; align-items:center; font-size:70px;"><span style="font-size:100px !important;   margin-bottom: -70px">Commitment</span><br>&amp;<br><span style="font-size:100px !important">Trust</span></div>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </TypewriterBox>
        <Span>
          {/* <span>Trading Service for YOU</span> */}
          <WheelAnimation />
        </Span>
        <Video loop autoPlay muted $windowHeight={window.innerHeight}>
          <source src="https://mempro.myqnapcloud.com:85/2.mp4"></source>
        </Video>
      </VideoBox>
    </>
  );
}

export default MainVideo;

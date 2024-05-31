import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
const move = keyframes`
from {
  transform: translateY(5px);
}
to{
  transform: translateY(15px);
}`;
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
    border-bottom: 1px solid white;
    margin-bottom: 5px;
  }
  :last-child {
    font-size: 15px;
    animation: ${move} 1.5s ease-in-out infinite alternate;
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
                '<i class="fa-solid fa-quote-left" style="font-size:50px"></i><br>Commitment<br>&<br>Trust<br><i class="fa-solid fa-quote-right" style="font-size:50px"></i>',
                `<span style="font-size:100px">MEMPro</span>`,
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </TypewriterBox>
        <Span>
          <span>Trading Service for YOU</span>
          <i className="fa-solid fa-angles-down"></i>
        </Span>
        <Video loop autoPlay muted $windowHeight={window.innerHeight}>
          <source src="https://mempro.myqnapcloud.com:85/2.mp4"></source>
        </Video>
      </VideoBox>
    </>
  );
}

export default MainVideo;

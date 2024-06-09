import styled from "styled-components";
import Header from "../../components/Header";
import Img from "../../img/about.jpg";
import CurrentNav from "../../components/CurrentNav";

const Warpper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgWarpper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 300px;
  margin-top: 80px;
`;
const BlackBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 80px;
`;
const ImgBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  background: url(${Img});
  background-position: center 40%;
  background-size: cover;
`;
function About() {
  return (
    <>
      <Header />
      <Warpper>
        <ImgWarpper>
          <ImgBox />
          <BlackBox />
        </ImgWarpper>
        <CurrentNav />
      </Warpper>
    </>
  );
}

export default About;

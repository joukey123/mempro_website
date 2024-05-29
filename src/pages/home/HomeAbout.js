import styled from "styled-components";
import Footer from "../../components/Footer";
import bgsemi from "../../img/bgsemi.svg";
import Btn from "../../components/Btn";
import LogoAnimation from "../../components/LogoAnimation";

const Homeabout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Wraper = styled.div`
  width: 100%;
  height: 80vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
`;
const TextWrapper = styled.div`
  width: 40%;
  span {
    font-size: 2.5rem;
  }
  h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin: 40px 0 30px 0;
  }
  p {
    font-size: 1.5rem;
    font-weight: 100;
  }
  margin-right: 10%;
`;
const ImgWrapper = styled.div`
  width: 40%;
  position: relative;
  height: 30%;
  max-width: 650px;
`;
const Bgimg = styled.img`
  width: 100%;
`;

const BtnWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
function HomeAbout() {
  return (
    <Homeabout>
      <Wraper>
        <TextWrapper>
          <span>MEMPro</span>
          <h1>Professional Trading Service</h1>
          <p>We can offer you the finest products you seek</p>
          <BtnWrapper>
            <Btn text={"About MEMPro"} />
            <Btn text={"Contact"} />
          </BtnWrapper>
        </TextWrapper>
        <ImgWrapper>
          <LogoAnimation />
          <Bgimg src={bgsemi} alt="bgImg" />
        </ImgWrapper>
      </Wraper>
      <Footer />
    </Homeabout>
  );
}

export default HomeAbout;

import styled from "styled-components";
import logo from "../img/logo2.svg";
import LinkBtn from "./LinkBtn";
import { linkBtns, add } from "../data.js";
import { useState } from "react";

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 15px 30px;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.8rem;
  border-top: 0.5px solid ${(props) => props.theme.colors.stroke};
  h1 {
    font-weight: 600;
    margin-bottom: 3px;
  }
  h2 {
    font-weight: 100;
    font-size: 0.7rem;
    margin-bottom: 8px;

    span:nth-child(2) {
      margin: 0 15px;
    }
  }
  #copyrighter {
    font-size: 0.6rem;
    text-align: center;
    font-weight: 100;
  }
`;
const NationSpan = styled.span`
  cursor: pointer;
  color: ${(props) => (props.$isClick ? "inherit" : "rgba(255,255,255,0.3)")};
`;
const Logo = styled.div`
  width: 190px;
  height: 30px;
  background: url(${logo}) no-repeat;
  margin-bottom: 1.5%;
  filter: grayscale(1);
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const InfoAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  h2 {
    line-height: 1.2;
  }
  #add {
    width: 80%;
  }
`;
const Tell = styled.div`
  width: 20%;
`;
const Mail = styled.div`
  width: 20%;
`;
const Link = styled.div`
  width: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transform: scale(0.8);
`;
function Footer() {
  const [offices, setOffices] = useState(0);

  const handleOffices = (nation) => {
    if (nation === "korea") {
      setOffices(0);
    } else {
      setOffices(1);
    }
  };
  return (
    <FooterWrapper>
      <Logo />
      <Info>
        <InfoAddress>
          <h1>ADDRESS</h1>
          <h2 id="nation">
            <NationSpan
              onClick={() => handleOffices("korea")}
              $isClick={offices === 0}
            >
              {add[0].nation}
            </NationSpan>
            <span>|</span>
            <NationSpan
              onClick={() => handleOffices("taiwan")}
              $isClick={offices === 1}
            >
              {add[1].nation}
            </NationSpan>
          </h2>
          <h2 id="add">{add[offices].address}</h2>
        </InfoAddress>
        <Tell>
          <h1>TEL</h1>
          <h2>{add[offices].tell}</h2>
          <h1>FAX</h1>
          <h2>{add[offices].fax}</h2>
        </Tell>
        <Mail>
          <h1>MAIL</h1>
          <h2>{add[offices].mail}</h2>
        </Mail>
        <Link>
          {linkBtns.map((item, index) => (
            <LinkBtn
              icon={item.icon}
              link={item.link}
              text={item.text}
              key={index}
            />
          ))}
        </Link>
      </Info>
      <div id="copyrighter">Copyright &copy; MEMPro. All rights reserved.</div>
    </FooterWrapper>
  );
}

export default Footer;

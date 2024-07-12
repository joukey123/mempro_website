import styled from "styled-components";
import logo from "../img/logo2.svg";
import logo2 from "../img/logo3.svg";
import LinkBtn from "./LinkBtn";
import { linkBtns, add } from "../data.js";
import { useState } from "react";
import { useMatch } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 15px 30px;
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
  font-size: 0.9rem;
  border-top: 0.5px solid ${(props) => props.theme.colors.stroke};
  margin: 0 auto;
  margin-top: 150px;
  h1 {
    font-weight: bold;
    margin-bottom: 3px;
  }
  h2 {
    font-weight: 100;
    font-size: 1rem;
    margin-bottom: 8px;

    span:nth-child(2) {
      margin: 0 15px;
    }
  }
  #copyrighter {
    font-size: 0.6rem;
    text-align: center;
    font-weight: 200;
  }
`;
const NationSpan = styled.span`
  cursor: pointer;
  /* color: ${(props) =>
    props.$isClick ? "inherit" : "rgba(255,255,255,0.3)"}; */
  font-weight: ${(props) => props.$isClick && "500"};
  color: inherit;
  &:hover {
    font-weight: bold;
  }
`;
const Logo = styled.div`
  width: 190px;
  height: 30px;
  background: url(${(props) => props.$url}) no-repeat;
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
  justify-content: space-between;
  transform: scale(0.9);
`;
function Footer() {
  const [offices, setOffices] = useState(0);
  const match = useMatch("/");
  const handleOffices = (nation) => {
    if (nation === "korea") {
      setOffices(0);
    } else {
      setOffices(1);
    }
  };

  const actions = [
    {
      icon: <EmailIcon />,
      name: "Mail",
      func: function () {
        console.log("hello2");
      },
    },

    {
      icon: <KeyboardArrowUpIcon />,
      name: "Top",
      func: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  ];
  return (
    <>
      <FooterWrapper $isHome={match}>
        {match ? <Logo $url={logo} /> : <Logo $url={logo2} />}
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
              <Tooltip
                sx={{ textTransform: "capitalize" }}
                title={item.text}
                arrow
              >
                <Fab
                  color="primary"
                  target="_blank"
                  onClick={() => window.open(`${item.link}`)}
                >
                  {item.icon}
                </Fab>
              </Tooltip>
            ))}
          </Link>
        </Info>
        <div id="copyrighter">
          Copyright &copy; MEMPro. All rights reserved.
        </div>
      </FooterWrapper>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: "12%",
          right: "5%",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial"
          icon={<SpeedDialIcon />}
          sx={{
            "& .MuiSpeedDial-fab": { backgroundColor: "#4C4C4C" },
            "& .MuiSpeedDial-fab:hover": { backgroundColor: "#4C4C4C" },
            zIndex: 99999,
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.func}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}

export default Footer;

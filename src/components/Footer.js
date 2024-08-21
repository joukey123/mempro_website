import styled from "styled-components";
import logo from "../img/logo2.svg";
import logo2 from "../img/logo3.svg";
import LinkBtn from "./LinkBtn";
import { linkBtns, add } from "../data.js";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
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
import BusinessIcon from "@mui/icons-material/Business";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FaxIcon from "@mui/icons-material/Fax";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useMediaQuery } from "@mui/material";

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 40px 30px;
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
  font-size: 1rem;
  border-top: 0.5px solid ${(props) => props.theme.colors.stroke};
  margin: 0 auto;
  margin-top: 80px;

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
    text-align: center;
    font-weight: 200;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  margin-bottom: 20px;
  filter: grayscale(1);
  @media (max-width: 1023px) {
    background-position: center center;
    margin-bottom: 30px;
  }
`;
const Info = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
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
  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #add {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;
const ContactNum = styled.div`
  width: 40%;
  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Tell = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    :first-child {
      margin-right: 0;
    }
  }
`;
const Mail = styled.div`
  display: flex;
  align-items: center;
`;
const Link = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
    transform: scale(0.8);
  }
`;

const CustomSpeedDialAction = styled((props) => {
  const { icon, tooltipTitle, onClick, ...other } = props;
  return (
    <SpeedDialAction
      icon={
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ padding: "0 10px" }}
        >
          {icon}
          <span style={{ marginLeft: "10px", fontSize: "15px" }}>
            {props.children}
          </span>
        </Box>
      }
      tooltipTitle={tooltipTitle}
      onClick={onClick}
      {...other}
    />
  );
})`
  background-color: #f59e39 !important;
  width: 100% !important;
  height: 50px !important;
  border-radius: 15px !important;
  display: flex !important;
  color: white !important;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2) !important;
  &:hover {
    background-color: #eea03b !important;
  }
`;
function Footer() {
  const navigate = useNavigate();
  const [offices, setOffices] = useState(0);
  const match = useMatch("/");
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const handleOffices = (nation) => {
    if (nation === "korea") {
      setOffices(0);
    } else {
      setOffices(1);
    }
  };

  const actions = [
    {
      icon: <MenuBookIcon />,
      name: "Catalog",
      func: function () {
        window.open("http://www.mempro.co.kr", "_blank");
      },
    },
    {
      icon: <EmailIcon />,
      name: "Mail",
      func: function () {
        navigate("/contact");
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
            <div
              style={{
                display: "flex",
              }}
            >
              {/* <BusinessIcon sx={{ marginRight: 1 }} /> */}
              <h1 style={{ marginRight: "30px" }}>ADDRESS</h1>
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
            </div>

            <h2 id="add">{add[offices].address}</h2>
          </InfoAddress>
          <ContactNum>
            <Tell>
              <div
                style={{
                  display: "flex",
                  marginRight: "30px",
                }}
              >
                {/* <PhoneAndroidIcon sx={{ marginRight: 0.5 }} /> */}
                <h1 style={{ marginRight: "15px" }}>TEL</h1>
                <h2>{add[offices].tell}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                {/* <FaxIcon sx={{ marginRight: 0.5 }} /> */}
                <h1 style={{ marginRight: "15px" }}>FAX</h1>
                <h2>{add[offices].fax}</h2>
              </div>
            </Tell>

            <Mail>
              <div
                style={{
                  display: "flex",
                }}
              >
                {/* <EmailIcon sx={{ marginRight: 0.5 }} /> */}
                <h1 style={{ marginRight: "15px" }}>MAIL</h1>
                <h2>{add[offices].mail}</h2>
              </div>
            </Mail>
          </ContactNum>
          <Link>
            {linkBtns.map((item, index) => (
              <Tooltip
                key={index}
                sx={{ textTransform: "capitalize" }}
                title={item.text}
              >
                <Fab
                  target="_blank"
                  onClick={() => window.open(`${item.link}`)}
                  sx={{
                    boxShadow: 0,
                    margin: 1,
                  }}
                >
                  {item.icon}
                </Fab>
              </Tooltip>
            ))}
          </Link>
        </Info>
        <div id="copyrighter" style={{ fontSize: "12px" }}>
          Copyright &copy; MEMPro. All rights reserved.
        </div>
      </FooterWrapper>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: "10%",
          right: "5%",
          display: isMobile && "none",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial"
          icon={<SpeedDialIcon />}
          sx={{
            "& .MuiSpeedDial-fab": {
              backgroundColor: "#1B3756",
              color: "white",
            },
            "& .MuiSpeedDial-fab:hover": {
              backgroundColor: "#1B3756",
              color: "white",
            },
            zIndex: 99999,
          }}
        >
          {actions.map((action) => (
            <CustomSpeedDialAction
              key={action.name}
              icon={action.icon}
              onClick={action.func}
              className={action.name}
            >
              {action.name}
            </CustomSpeedDialAction>
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}

export default Footer;

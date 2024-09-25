import styled from "styled-components";
import navLogo from "../img/nav_logo.svg";
import navLogoWhite from "../img/nav_logo_white.svg";
import { items } from "../data";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";
import { useEffect, useRef, useState } from "react";
import Submenu from "./Submenu";
import "semantic-ui-css/semantic.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./mobile/MobileMenu";
import Collapse from "@mui/material/Collapse";
import { useMediaQuery } from "@mui/material";
import TopBanner from "./TopBanner";
import SeachComponent from "./Search";

const HeaderWrapper = styled.div`
  /* position: fixed; */
  /* top: 0px; */
  /* left: 50%; */
  /* transform: translate(-50%, 0%); */
  /* z-index: 9999; */
  width: 100%;
  height: 80px;
  max-width: 1280px;
  display: flex;
  align-items: center;
  /* box-shadow: ${(props) =>
    props.$isMain ? null : "0px 2px 4px rgba(0, 0, 0, 0.08)"}; */
  color: ${(props) =>
    props.$isMain ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.$isScrolled ? "#0a0b14" : props.$isMain ? "transparent" : "white"};
  transition: background-color 0.3 ease;
`;
const LogoWrapper = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
const Logo = styled.div`
  width: 150px;
  height: 40px;
  background: url(${(props) => (props.$isMain ? navLogoWhite : navLogo)})
    no-repeat;
  background-size: contain;
  background-position: center;
  margin-left: 30px;
`;

const NavWrapper = styled.div`
  width: 100%;
  /* max-width: 900px; */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    display: none;
  }
`;
const Nav = styled.ul`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  font-size: 0.9rem;

  a {
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`;
const NavMenu = styled.li`
  display: flex;
  color: ${(props) => (props.$isSelect ? props.theme.colors.blue : "inhert")};
  font-weight: ${(props) => props.$isSelect && "bold"};
`;
const LanguageWrapper = styled.div`
  transform: scale(0.8);
  display: none;
`;

const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: block;
    position: absolute;
    right: 30px;
  }
`;

function Header() {
  const location = useLocation();
  const [isMain, setIsMain] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredLiWidth, setHoveredLiWidth] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1023px)");

  const handleDataFromChild = (data) => {
    setOpenMobileMenu(data);
  };

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location]);

  useEffect(() => {
    setOpenMobileMenu(false);
  }, [window.innerWidth > 1023]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (isMobile ? 500 : 955)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = (index, event) => {
    setActiveMenu(index);
    setHoveredLiWidth(event.currentTarget.offsetWidth);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <TopBanner
        text={"Explore our full range of products and services."}
        linkText={"Click Here to Access Our Catalog"}
        link={"https://www.mempro.co.kr:84"}
        color={"#eceb98"}
        fontColor={"black"}
      />
      {/* <Banner
        text={"2024 SEMICON Taiwan. Booth S7948, 4th, HALL 2"}
        linkText={"Click Here! Booth"}
        link={"https://mempro.co.kr/semiconMap.png"}
        color={"#574298"}
        fontColor={"white"}
      /> */}

      <HeaderWrapper $isMain={isMain} $isScrolled={isScrolled && isMain}>
        <LogoWrapper>
          <Link to={"/"}>
            <Logo $isMain={isMain} />
          </Link>
        </LogoWrapper>
        <NavWrapper>
          <Nav>
            <SeachComponent />
            {items.map((item, index) => (
              <NavMenu
                key={index}
                onMouseOver={(event) => handleMouseOver(index, event)}
                onMouseLeave={
                  item.link === "about" || item.link === "contact"
                    ? () => handleMouseOut()
                    : null
                }
                style={{ position: "relative" }}
                $isSelect={location.pathname.split("/")[1] === item.link}
              >
                {(item.category === "semiconductor" ||
                  item.category === "contact" ||
                  item.category === "about MEMPro") && (
                  <Link
                    to={
                      item.type ? `/${item.link}/${item.type}` : `/${item.link}`
                    }
                    style={{
                      color: activeMenu === index ? "inherit" : "inherit",
                      fontWeight: activeMenu === index && "bold",
                    }}
                    onMouseOver={(event) => handleMouseOver(index, event)}
                    onMouseLeave={
                      item.link === "about" || item.link === "contact"
                        ? () => handleMouseOut()
                        : null
                    }
                  >
                    {item.category}
                  </Link>
                )}

                <Submenu
                  subcategories={item.subcategories}
                  handleMouseOut={handleMouseOut}
                  hoveredLiWidth={hoveredLiWidth}
                  isVisible={activeMenu === index && item.subcategories}
                  categoryLink={item.link}
                  type={item.type}
                />

                {/* {item.subcategories && (
                <Submenu
                  subcategories={item.subcategories}
                  hoveredLiWidth={hoveredLiWidth}
                />
              )} */}
              </NavMenu>
            ))}
          </Nav>
        </NavWrapper>

        <LanguageWrapper>
          <Language />
        </LanguageWrapper>

        {/* {openMobileMenu && <MobileMenu onData={handleDataFromChild} />}*/}
        {isMobile ? (
          <>
            <MenuIconWrapper onClick={handleOpenMobileMenu}>
              <MenuIcon fontSize="large" />
            </MenuIconWrapper>
            <Collapse orientation="horizontal" in={openMobileMenu}>
              <MobileMenu onData={handleDataFromChild} />
            </Collapse>
          </>
        ) : null}
      </HeaderWrapper>
    </div>
  );
}

export default Header;

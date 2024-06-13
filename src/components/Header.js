import styled from "styled-components";
import navLogo from "../img/nav_logo.svg";
import navLogoWhite from "../img/nav_logo_white.svg";
import { items } from "../data";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";
import { useEffect, useRef, useState } from "react";
import Submenu from "./Submenu";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 9999;
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: ${(props) => (props.$isMain ? "transparent" : "white")};
  box-shadow: ${(props) =>
    props.$isMain ? null : "0px 3px 1px -2px rgba(0, 0, 0, 0.2)"};
  color: ${(props) =>
    props.$isMain ? props.theme.colors.white : props.theme.colors.black};
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
`;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 700px;
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
`;

function Header() {
  const location = useLocation();
  const [isMain, setIsMain] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredLiWidth, setHoveredLiWidth] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location]);

  const handleMouseOver = (index, event) => {
    setActiveMenu(index);
    setHoveredLiWidth(event.currentTarget.offsetWidth);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  return (
    <HeaderWrapper $isMain={isMain}>
      <LogoWrapper>
        <Link to={"/"}>
          <Logo $isMain={isMain} />
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <Nav>
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
              <Link
                to={item.id ? `/${item.link}/${item.id}` : `/${item.link}`}
                style={{
                  color: activeMenu === index ? "inherit" : "inherit",
                  fontWeight: activeMenu === index && "bold",
                }}
              >
                {item.category}
              </Link>

              <Submenu
                subcategories={item.subcategories}
                handleMouseOut={handleMouseOut}
                hoveredLiWidth={hoveredLiWidth}
                isVisible={activeMenu === index && item.subcategories}
                categoryLink={item.link}
                id={item.id}
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
    </HeaderWrapper>
  );
}

export default Header;

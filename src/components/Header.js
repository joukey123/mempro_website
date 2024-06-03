import styled from "styled-components";
import navLogo from "../img/nav_logo.svg";
import navLogoWhite from "../img/nav_logo_white.svg";
import { items } from "../data";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";
import { useEffect, useState } from "react";

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
  background-color: ${(props) =>
    props.$isMain ? "transparent" : props.theme.colors.white};
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
  a {
    margin-right: 30px;
  }
`;
const LanguageWrapper = styled.div`
  transform: scale(0.8);
`;
function Header() {
  const location = useLocation();
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location]);

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
            <li key={index}>
              <Link to={`/${item.link}`}>{item.category}</Link>
            </li>
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

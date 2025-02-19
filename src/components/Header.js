import styled from "styled-components";
import navLogo from "../img/nav_logo.svg";
import navLogoWhite from "../img/nav_logo_white.svg";
import { items } from "../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Language from "./Language";
import { useEffect, useRef, useState } from "react";
import Submenu from "./Submenu";
import "semantic-ui-css/semantic.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./mobile/MobileMenu";
import Collapse from "@mui/material/Collapse";
import { useMediaQuery } from "@mui/material";
import TopBanner from "./TopBanner";
import SearchBar from "./search/SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";
import { handleSearchBar, showPopup } from "../atoms";
import MobileSearchInputComponent from "./search/MobileSearchInput";
import useTranslation from "../Hook/useTranslation";
import Popup from "./Popup";
import thanksCard from "../img/thanksCard.jpg";
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
  margin: ${(props) => (props.$isMobile ? "0px" : "0 0 0 50px")};
`;

const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: flex;
    position: absolute;
    right: 30px;
    align-items: center;
    justify-content: space-between;
    width: 120px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-left: 20px;
  svg {
    font-size: 1.5rem;
  }
  @media (max-width: 1023px) {
    margin-right: 10px;
  }
`;

function Header() {
  const location = useLocation();
  const [isMain, setIsMain] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredLiWidth, setHoveredLiWidth] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(handleSearchBar);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const navigate = useNavigate();
  const { selectedLanguage, getText } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  const [isShowPopup, setIsShowPopup] = useRecoilState(showPopup);

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
  const topBannerText = {
    catalog: {
      eng: {
        text: "Explore our full range of products and services.",
        linkText: "Click Here to Access Our Catalog",
        link: "https://www.mempro.co.kr:84",
      },
      kor: {
        text: "멤프로의 제품 및 서비스를 확인하세요.",
        linkText: "카탈로그 보러 가기",
        link: "https://www.mempro.co.kr:84",
      },
      cn: {
        text: "探索我们全系列的产品和服务。",
        linkText: "点击此处访问我们的目录",
        link: "https://www.mempro.co.kr:84",
      },
      jp: {
        text: "製品とサービスの全ラインナップをご覧ください。",
        linkText: "こちらをクリックしてカタログにアクセス",
        link: "https://www.mempro.co.kr:84",
      },
    },
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
        text={
          topBannerText["catalog"]?.[lang]?.text ||
          topBannerText["catalog"]?.["en"]?.text ||
          "Explore our full range of products and services."
        }
        linkText={
          topBannerText["catalog"][lang]?.linkText ||
          topBannerText["catalog"]?.["en"]?.linkText ||
          "Click Here to Access Our Catalog"
        }
        link={
          topBannerText["catalog"][lang]?.link ||
          topBannerText["catalog"]?.["en"]?.link ||
          "https://www.mempro.co.kr:84"
        }
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
                  to={
                    item.type ? `/${item.link}/${item.type}` : `/${item.link}`
                  }
                  style={{
                    color: activeMenu === index ? "inherit" : "inherit",
                    fontWeight: activeMenu === index && "bold",
                  }}
                >
                  {getText(item.category)}
                </Link>

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
            <SearchButton onClick={() => setIsOpen(true)}>
              <SearchIcon sx={{ color: isMain ? "white" : "black" }} />
            </SearchButton>

            {isOpen && <SearchBar />}

            <LanguageWrapper>
              <Language />
            </LanguageWrapper>
          </Nav>
        </NavWrapper>
        {/* popup */}
        {isShowPopup && <Popup img={thanksCard} />}

        {/* {openMobileMenu && <MobileMenu onData={handleDataFromChild} />} */}
        {isMobile ? (
          <>
            <MenuIconWrapper>
              <MobileSearchInputComponent />
              <LanguageWrapper $isMobile={isMobile}>
                <Language />
              </LanguageWrapper>
              <MenuIcon fontSize="large" onClick={handleOpenMobileMenu} />
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

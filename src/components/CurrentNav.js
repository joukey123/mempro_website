import styled from "styled-components";
import { useCategory } from "../Hook/useCategory";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { items } from "../data";
import Office from "../pages/about/Office";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useMediaQuery } from "@mui/material";
import useTranslation from "../Hook/useTranslation";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0px 0 50px 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0px auto;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 0px;
  }
`;

const Category = styled.h1`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 1rem;
  text-indent: 10px;
  margin-bottom: 20px;
  span {
    font-weight: 600;
  }
`;

const Diagrams = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: 0.9rem;
  padding: 5px;
  width: fit-content;
  border-radius: 20px;
  li {
    &:last-child a {
      margin-right: 0; // 마지막 a 태그의 오른쪽 마진 제거
    }
  }
`;

const SubCategories = styled.ul`
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  font-size: 0.9rem;
  padding: 5px;
  width: fit-content;
  border-radius: 20px;
  margin-top: 20px;
  color: white;
  li {
    &:last-child a {
      margin-right: 0; // 마지막 a 태그의 오른쪽 마진 제거
    }
  }
`;

const DiagramLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  margin-right: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.$isClick && props.theme.colors.blue};
  color: ${(props) => props.$isClick && props.theme.colors.white};
  font-weight: ${(props) => props.$isClick && "600"};
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }
`;

const SubLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  margin-right: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.$isClick && props.theme.colors.white};
  color: ${(props) => props.$isClick && props.theme.colors.black};
  font-weight: ${(props) => props.$isClick && "600"};
  text-transform: capitalize;
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
  }
`;

function CurrentNav() {
  const {
    currentCategory,
    currentSubcategory,
    currentDiagrams,
    selectDiagram,
    currentSubcategoryName,
    type,
  } = useCategory();
  const navigate = useNavigate();
  const aboutMenu = ["Company", "Office", "E-catalog"];
  const [selectAboutMenu, setSelectAboutMenu] = useState("Company");
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const location = useLocation();
  const lo = location.pathname.split("/")[3];
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { getText, selectedLanguage } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  useEffect(() => {
    setSelectSubCategory(`${currentSubcategory[0]}`);
  }, [currentSubcategory[0]]);

  const handleDiagramClick = (diagram) => {
    const mainItem = items.find(
      (item) => item.category.toLowerCase() === currentCategory.toLowerCase()
    );

    if (mainItem) {
      const subcategoryItem = mainItem.subcategories.find(
        (subcat) => subcat.diagram === diagram
      );

      if (subcategoryItem && subcategoryItem.subcategory.length > 0) {
        const firstSubcategoryLink = subcategoryItem.subcategory[0].link;
        if (type) {
          navigate(`/${mainItem.link}/${type}/${firstSubcategoryLink}`);
        } else {
          navigate(`/${mainItem.link}/${firstSubcategoryLink}`);
        }
      }
    }
  };

  const getSubcategoryLink = (subcategoryName) => {
    const mainItem = items.find(
      (item) => item.category.toLowerCase() === currentCategory.toLowerCase()
    );
    if (mainItem) {
      const subcategoryItem = mainItem.subcategories.find((subcat) =>
        subcat.subcategory.some((sub) => sub.name === subcategoryName)
      );

      if (subcategoryItem) {
        const subLink = subcategoryItem.subcategory.find(
          (sub) => sub.name === subcategoryName
        )?.link;

        if (subLink) {
          return `/${mainItem.link}/${type}/${subLink}`;
        }
      }
    }

    return "#"; // Fallback link if not found
  };
  const handleSelectAboutMenu = (item) => {
    setSelectAboutMenu(item);
    navigate(`/about/${item.toLocaleLowerCase()}`);
  };

  const handleSelectSub = (item) => {
    setSelectSubCategory(item);
    navigate(`${getSubcategoryLink(item)}`);
  };

  const translatedMessage = {
    eng: "We provide the necessary parts for the probe card.",
    kor: "우리는 프로브 카드에 필요한 부품을 제공합니다.",
    cn: "我们提供探针卡所需的零件。",
    jp: "プローブカードに必要な部品を提供します。",
  };
  return (
    <Wrapper>
      <ToggleButtonGroup
        color="primary"
        value={selectAboutMenu}
        exclusive
        aria-label="Platform"
        sx={{
          width: isMobile ? "100%" : null,
          padding: isMobile && "0 20px",
        }}
      >
        {aboutMenu.map((item, index) => (
          <ToggleButton
            value={item}
            key={index}
            onClick={() => handleSelectAboutMenu(item)}
            sx={{
              textTransform: "capitalize",
              width: 180,
              height: 50.88,
              width: isMobile ? "33%" : "200px",
            }}
          >
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Alert
        severity="info"
        sx={{
          width: isMobile ? "90%" : "null",
          margin: isMobile ? "15px auto" : "0px auto",
          display: isMobile && "flex",
          alignItems: isMobile && "center",
          justifyContent: isMobile && "center",
          "& .MuiAlert-message": {
            fontSize: "16px",
          },
          "& .css-1ytlwq5-MuiAlert-icon": {
            display: isMobile ? "none !important" : "flex !important",
          },
        }}
      >
        {translatedMessage[lang] ?? translatedMessage["eng"]}
      </Alert>
    </Wrapper>
  );
}

export default CurrentNav;

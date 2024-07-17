import styled from "styled-components";
import { useCategory } from "../Hook/useCategory";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { items } from "../data";
import Office from "../pages/about/Office";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 60px 0 30px 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
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
    console.log(item);
    setSelectSubCategory(item);
    navigate(`${getSubcategoryLink(item)}`);
  };
  return (
    <Wrapper>
      <Category>
        {currentCategory}
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <>
              &nbsp; &nbsp; &middot; &nbsp; &nbsp;
              <span>Parts</span>
            </>
          )}
      </Category>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {currentDiagrams.length > 0 && currentCategory !== "about MEMPro" ? (
          <ToggleButtonGroup
            color="primary"
            value={selectDiagram}
            exclusive
            aria-label="Platform"
          >
            {currentDiagrams.map((diagram, index) => (
              <ToggleButton
                value={diagram}
                key={index}
                onClick={() => handleDiagramClick(diagram)}
                sx={{ textTransform: "capitalize", width: 180, height: 40 }}
              >
                {diagram}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        ) : (
          <>
            <ToggleButtonGroup
              color="primary"
              value={selectAboutMenu}
              exclusive
              aria-label="Platform"
            >
              {aboutMenu.map((item, index) => (
                <ToggleButton
                  value={item}
                  key={index}
                  onClick={() => handleSelectAboutMenu(item)}
                  sx={{ textTransform: "capitalize", width: 180, height: 40 }}
                >
                  {/* <Link
                  $isClick={item.toLocaleLowerCase() === lo}
                  to={`/about/${item.toLocaleLowerCase()}`}
                 
                > */}
                  {item}
                  {/* </Link> */}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </>
        )}

        {/* {currentDiagrams.length > 0 && currentCategory !== "about MEMPro" ? (
        <Diagrams>
          {currentDiagrams.map((diagram, index) => (
            <li key={index} onClick={() => handleDiagramClick(diagram)}>
              <DiagramLink $isClick={selectDiagram === diagram}>
                {diagram}
              </DiagramLink>
            </li>
          ))}
        </Diagrams>
      ) : (
        <>
          <ToggleButtonGroup
            color="primary"
            value={selectAboutMenu}
            exclusive
            aria-label="Platform"
          >
            {aboutMenu.map((item, index) => (
              <ToggleButton
                key={index}
                value={item}
                onClick={() => handleSelectAboutMenu(item)}
              >
                <Link
                  $isClick={item.toLocaleLowerCase() === lo}
                  to={`/about/${item.toLocaleLowerCase()}`}
                >
                {item}
                </Link>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </>
      )} */}
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <ToggleButtonGroup
              color="warning"
              value={selectSubCategory}
              exclusive
              aria-label="Platform"
              sx={{ marginTop: 2 }}
            >
              {currentSubcategory.map((item, index) => (
                <ToggleButton
                  key={index}
                  value={item}
                  onClick={() => handleSelectSub(item)}
                  sx={{ textTransform: "capitalize", width: 180, height: 40 }}
                >
                  {/* <SubLink
                to={getSubcategoryLink(item)}
                $isClick={item === currentSubcategoryName}
              > */}
                  {item}
                  {/* </SubLink> */}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
      </div>
    </Wrapper>
  );
}

export default CurrentNav;

import styled from "styled-components";
import { useCategory } from "../Hook/useCategory";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { items } from "../data";
import Office from "../pages/about/Office";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 60px 0 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 150px;
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
  } = useCategory();
  const [clickedDiagram, setclickedDiagram] = useState(0);
  const navigate = useNavigate();
  const aboutMenu = ["Company", "Office", "E-catalog"];

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
        navigate(`/${mainItem.link}/${firstSubcategoryLink}`);
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
          return `/${mainItem.link}/${subLink}`;
        }
      }
    }

    return "#"; // Fallback link if not found
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
      {currentDiagrams.length > 0 && currentCategory !== "about MEMPro" ? (
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
          <Diagrams>
            {aboutMenu.map((item, index) => (
              <li key={index} onClick={() => setclickedDiagram(index)}>
                <DiagramLink
                  $isClick={clickedDiagram === index}
                  to={`${item.toLocaleLowerCase()}`}
                >
                  {item}
                </DiagramLink>
              </li>
            ))}
          </Diagrams>
        </>
      )}
      {currentCategory !== "about MEMPro" && currentCategory !== "contact" && (
        <SubCategories>
          {currentSubcategory.map((item, index) => (
            <li key={index}>
              <SubLink
                to={getSubcategoryLink(item)}
                $isClick={item === currentSubcategoryName}
              >
                {item}
              </SubLink>
            </li>
          ))}
        </SubCategories>
      )}
    </Wrapper>
  );
}

export default CurrentNav;

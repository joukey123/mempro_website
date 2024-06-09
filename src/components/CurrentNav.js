import styled from "styled-components";
import { useCategory } from "../Hook/useCategory";
import { items } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 60px 0 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Category = styled.h1`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 1rem;
  text-indent: 10px;
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
`;
const Diagrams = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: 1rem;
  padding: 5px;
  width: fit-content;
  border-radius: 20px;
  li {
    &:last-child a {
      margin-right: 0; // 마지막 a 태그의 오른쪽 마진 제거
    }
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  margin-right: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.$isClick && props.theme.colors.blue};
  color: ${(props) => props.$isClick && props.theme.colors.white};
  font-weight: ${(props) => props.$isClick && "bold"};
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }
`;
function CurrentNav() {
  const { currentCategory, currentSubcategory, currentDiagrams } =
    useCategory();
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleIsClick = (index) => {
    setClickedIndex(index);
  };

  const aboutMenu = ["Brand", "Office", "E-catalog"];
  return (
    <Wrapper>
      <Category>
        {currentCategory}
        {currentSubcategory && (
          <>
            &nbsp; &nbsp; &middot; &nbsp; &nbsp;
            <span>Parts</span>
          </>
        )}
      </Category>
      {currentDiagrams.length > 0 && currentCategory !== "about MEMPro" ? (
        <Diagrams>
          {currentDiagrams.map((diagram, index) => (
            <li key={index}>
              <StyledLink
                onClick={() => handleIsClick(index)}
                $isClick={clickedIndex === index}
              >
                {diagram}
              </StyledLink>
            </li>
          ))}
        </Diagrams>
      ) : (
        <Diagrams>
          {aboutMenu.map((item, index) => (
            <li key={index}>
              <StyledLink
                onClick={() => handleIsClick(index)}
                $isClick={clickedIndex === index}
              >
                {item}
              </StyledLink>
            </li>
          ))}
          {/* <li>
            <StyledLink onClick={handleIsClick} $isClick={isClick}>
              Brand
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={handleIsClick} $isClick={isClick}>
              Office
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={handleIsClick} $isClick={isClick}>
              E-catalog
            </StyledLink>
          </li> */}
        </Diagrams>
      )}
    </Wrapper>
  );
}

export default CurrentNav;

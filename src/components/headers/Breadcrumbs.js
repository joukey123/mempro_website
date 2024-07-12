import styled from "styled-components";
import { useCategory } from "../../Hook/useCategory";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 80px;
  margin-bottom: 0px;
  margin: 100px 0 30px 0;
`;

const Category = styled.h1`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 1rem;
  text-indent: 10px;
  margin-bottom: 20px;
  span:last-child {
    font-weight: 600;
  }
`;

function Breadcrumbs() {
  const { currentCategory, selectDiagram } = useCategory();
  return (
    <Wrapper>
      <Category>
        <span>{currentCategory}</span>
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <>
              &nbsp; &nbsp; &middot; &nbsp; <span>Parts</span>
            </>
          )}
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <>
              &nbsp; &nbsp; &middot; &nbsp; <span>{selectDiagram}</span>
            </>
          )}
      </Category>
    </Wrapper>
  );
}

export default Breadcrumbs;

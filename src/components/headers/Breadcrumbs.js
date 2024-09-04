import styled from "styled-components";
import { useCategory } from "../../Hook/useCategory";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-bottom: 0px;
  margin: 80px 0 30px 0;
  padding: 0 50px;
  font-size: 14px;
  @media (max-width: 1023px) {
    padding: 0px;
    margin: 0px;
  }
`;

const Category = styled.div`
  text-transform: capitalize;
  font-weight: lighter;
  padding: 0 30px;
  margin-bottom: 20px;
  span:last-child {
    font-weight: 600;
  }
`;

function Breadcrumbs() {
  const { currentCategory, selectDiagram, type } = useCategory();

  return (
    <Wrapper>
      <Category>
        <span>{currentCategory}</span>
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <>
              &nbsp; &middot; <span>{type}</span>
            </>
          )}
        {currentCategory !== "about MEMPro" &&
          currentCategory !== "contact" && (
            <>
              &nbsp; &middot; <span>{selectDiagram}</span>
            </>
          )}
      </Category>
    </Wrapper>
  );
}

export default Breadcrumbs;

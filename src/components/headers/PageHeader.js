import styled from "styled-components";
import Header from "../../components/Header";
import CurrentNav from "../CurrentNav";
import { useCategory } from "../../Hook/useCategory";
import Breadcrumbs from "./Breadcrumbs";
const Warpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgWarpper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 300px;
  margin-top: 80px;
`;
const BlackBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 80px;
`;
const ImgBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  background: url(${(props) => props.img});
  background-position: center 40%;
  background-size: cover;
`;
const Img = styled.img`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  object-position: center 40%;
  object-fit: cover;
`;
function PageHeader() {
  const { headerImges, currentCategory } = useCategory();
  return (
    <>
      <Header />
      <Warpper>
        <ImgWarpper>
          <Img src={headerImges} alt={currentCategory} />
          <BlackBox />
        </ImgWarpper>
        {currentCategory !== "contact" && <Breadcrumbs />}
      </Warpper>
    </>
  );
}

export default PageHeader;

import styled from "styled-components";
import Footer from "../../components/Footer";
import { books } from "../../data";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BlackBox = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50px;
  color: white;
  padding: 0px 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: lighter;
  margin-bottom: 35px;
`;
const BookWrapper = styled.div`
  margin-bottom: 150px;
`;
const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BookImg = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;
function Ecatalog() {
  return (
    <>
      <Wrapper>
        <BlackBox>MEMPro Catalog</BlackBox>
        <BookWrapper>
          {books.map((item) => (
            <Link to={item.url} target="_blank">
              <Book>
                <BookImg src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <span>{item.dec}</span>
              </Book>
            </Link>
          ))}
        </BookWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Ecatalog;

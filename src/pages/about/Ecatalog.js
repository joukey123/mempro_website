import styled from "styled-components";
import Footer from "../../components/Footer";
import { books } from "../../data";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";

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
  font-weight: 500;
  margin-bottom: 35px;
`;
const BookWrapper = styled.div``;
const Book = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
`;

const BookImg = styled.img`
  height: 310px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  object-position: bottom;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-weight: 300;
`;
const Title = styled.span`
  font-size: 1.2rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Dec = styled.span``;
function Ecatalog() {
  return (
    <>
      <Wrapper>
        <BlackBox>MEMPro Catalog</BlackBox>
        <BookWrapper>
          {books.map((item, index) => (
            <Link key={index} to={item.url} target="_blank">
              <Book>
                <BookImg src={item.img} alt={item.name} />
                <Text>
                  <Title>{item.name}</Title>
                  <Dec>
                    {item.dec.map((item, index) => (
                      <Label image key={index}>
                        <img src={item.img} />
                        {item.type}
                      </Label>
                    ))}
                  </Dec>
                </Text>
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

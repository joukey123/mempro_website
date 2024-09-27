import { Link, useLocation, useParams } from "react-router-dom";
import PageHeader from "../headers/PageHeader";
import headerImg from "../../img/searchHeader.jpg";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchInputBar from "./SearchInputBar";
import Footer from "../Footer";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 1023px) {
    padding: 0 30px;
  }
  margin-bottom: 150px;
`;

const ResultText = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  p {
    font-size: 24px;
    span {
      font-weight: bold;
      text-transform: capitalize;
      margin: 0 5px;
      font-size: 24px;
      color: #014ea2;
    }
  }
`;

const ResultList = styled.ul`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$length < 4 ? `repeat(${props.$length}, 1fr)` : "repeat(4, 1fr)"};

  grid-gap: 20px;

  li {
    width: 250px;
    height: 350px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
  margin-top: 50px;
`;

const ResultListImg = styled.div``;
const ResultListText = styled.div`
  padding: 20px;
  small {
    display: block;
    font-weight: 300;
    margin-bottom: 8px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 12px;
  }
`;
function SearchResult() {
  const location = useLocation();
  const dataArray = location.state || []; // 배열이 없을 경우 대비
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword"); // 'keyword'에 해당하는 값 가져오기

  console.log(dataArray, "dataArray");
  return (
    <>
      <PageHeader img={headerImg} />
      <Wrapper>
        <ResultText>
          <p>
            <span>`{keyword}`</span>에 대한 <span>{dataArray.length}</span>
            건의 검색결과가 있습니다.
          </p>
        </ResultText>
        <SearchInputBar width={90} />
        <ResultList $length={dataArray.length}>
          {dataArray.length > 0 ? (
            dataArray.map((item, index) => (
              <Link to={`${item?.link}`} key={index}>
                <li key={index} style={{ color: "black" }}>
                  <ResultListImg className="resultImg">
                    <img src={item?.thumnail} />
                  </ResultListImg>
                  <ResultListText className="resultText">
                    <small>{item?.diagram}</small>
                    <span>{item?.title}</span>
                    {item?.des ? (
                      <p>
                        {item?.des.slice(0, 100)}
                        {item?.des.length > 100 ? "..." : ""}
                      </p>
                    ) : (
                      <p>{item?.title}</p>
                    )}
                  </ResultListText>
                </li>
              </Link>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ResultList>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SearchResult;

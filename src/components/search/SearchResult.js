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
    height: 370px;
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

  const highlightMatchWithSnippet = (text, query, snippetLength = 100) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());

    if (matchIndex === -1) return truncateText(text, snippetLength); // 검색어가 없으면 잘린 텍스트 반환

    // 키워드를 중심으로 앞뒤로 100자를 포함하는 구간 설정
    const start = Math.max(
      0,
      matchIndex - Math.floor((snippetLength - query.length) / 2)
    );
    const end = Math.min(
      text.length,
      matchIndex + query.length + Math.floor((snippetLength - query.length) / 2)
    );

    const snippet = text.substring(start, end);
    const parts = snippet.split(regex); // 검색어로 나누어 강조할 부분 설정

    return (
      <>
        {start > 0 && "..."}
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <b key={index} style={{ backgroundColor: "yellow" }}>
              {part}
            </b>
          ) : (
            part
          )
        )}
        {end < text.length && "..."}
      </>
    );
  };

  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

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
                      // <p>
                      //   {item?.des.slice(0, 100)}
                      //   {item?.des.length > 100 ? "..." : ""}
                      // </p>
                      <p>{highlightMatchWithSnippet(item.des, item.query)}</p>
                    ) : (
                      <p>
                        <p>
                          {highlightMatchWithSnippet(item.title, item.query)}
                        </p>
                      </p>
                    )}

                    {item?.cardNeedle && (
                      <p style={{ marginTop: 20 }}>
                        {highlightMatchWithSnippet(item.cardNeedle, item.query)}
                      </p>
                    )}

                    {item?.model && <p>{item.model.map((item) => item)}</p>}
                  </ResultListText>
                </li>
              </Link>
            ))
          ) : (
            <b>No results found</b>
          )}
        </ResultList>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SearchResult;

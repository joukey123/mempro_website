import { Link, useLocation } from "react-router-dom";
import PageHeader from "../headers/PageHeader";
import headerImg from "../../img/searchHeader.jpg";
import styled from "styled-components";
import SearchInputBar from "./SearchInputBar";
import Footer from "../Footer";
import useFuse from "./useFuse";
import { useRecoilValue } from "recoil";
import { resultArray } from "../../atoms";
import { useEffect } from "react";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useMediaQuery } from "@mui/material";
import useTranslation from "../../Hook/useTranslation";
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
  margin: 100px 0;
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

  @media (max-width: 1023px) {
    margin: 80px 0;
    p {
      font-size: 18px;
      span {
        font-size: 18px;
      }
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
    height: 400px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.6);
      transition: 0.3s ease-in-out all;
    }
  }
  margin-top: 100px;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 50px;
    li {
      width: 100%;
      height: 200px;
      display: flex;

      img {
        height: 100%;
      }
    }
  }
`;

const ResultListImg = styled.div`
  @media (max-width: 1023px) {
    width: 35%;
  }
`;
const ResultListText = styled.div`
  padding: 15px;
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
  @media (max-width: 1023px) {
    width: 65%;
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  :first-child {
    margin-top: 20px;
    margin-bottom: 2px;
    font-size: 32px;
  }
  :last-child {
    font-weight: bold;
  }
`;
function SearchResult() {
  const isMobile = useMediaQuery("(max-width: 1023px)");
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
            <b
              key={index}
              style={{ backgroundColor: "yellow", fontWeight: "normal" }}
            >
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
  const results = useRecoilValue(resultArray);
  const { selectedLanguage } = useTranslation();
  return (
    <>
      <PageHeader img={headerImg} />
      <Wrapper>
        <ResultText>
          <p>
            {selectedLanguage === "KOR" && (
              <>
                <span>`{keyword}`</span>에 대한 <span>{results.length}</span>
                건의 검색결과가 있습니다.
              </>
            )}
            {selectedLanguage === "ENG" && (
              <>
                <span>`{keyword}`</span> has <span>{results.length}</span>
                search results.
              </>
            )}
            {selectedLanguage === "CN" && (
              <>
                <span>`{keyword}`</span> 有 <span>{results.length}</span>
                条搜索结果。
              </>
            )}
            {selectedLanguage === "JP" && (
              <>
                <span>`{keyword}`</span> に対して <span>{results.length}</span>
                件の検索結果があります。
              </>
            )}
          </p>
        </ResultText>
        <SearchInputBar width={90} />
        <ResultList $length={results.length}>
          {results.length > 0 ? (
            results.map((item, index) => (
              <Link to={`${item?.link}`} key={index}>
                <li style={{ color: "black" }}>
                  <ResultListImg className="resultImg">
                    <img src={item?.thumnail} />
                  </ResultListImg>
                  <ResultListText className="resultText">
                    <small>{item?.diagram}</small>
                    <span>{item?.title.eng}</span>

                    {item.description && (
                      <p> {item?.description?.eng.slice(0, 100) + "..."}</p>
                    )}

                    {item?.model && (
                      <>
                        <p
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          {item.model.map((modeItem, index) => (
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "normal",
                                marginBottom: -5,
                                marginRight: 5,
                              }}
                            >
                              {modeItem}
                              {index < item.model.length - 1 && ", "}
                            </span>
                          ))}
                        </p>
                      </>
                    )}
                    {/* {item?.description ? (
                      // <p>
                      //   {item?.des.slice(0, 100)}
                      //   {item?.des.length > 100 ? "..." : ""}
                      // </p>
                      <p>
                        {highlightMatchWithSnippet(item.description, keyword)}
                      </p>
                    ) : (
                      <p>
                        <p>{highlightMatchWithSnippet(item.title, keyword)}</p>
                      </p>
                    )}

                    {item?.cardNeedle && (
                      <p style={{ marginTop: 20 }}>
                        {highlightMatchWithSnippet(item.cardNeedle, keyword)}
                      </p>
                    )}

                    {item?.model && (
                      <>
                        <p
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          {item.model.map((modeItem, index) => (
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "normal",
                                marginBottom: -5,
                                marginRight: 5,
                              }}
                            >
                              {highlightMatchWithSnippet(modeItem, keyword)}
                              {index < item.model.length - 1 && ", "}
                            </span>
                          ))}
                        </p>
                      </>
                    )} */}
                  </ResultListText>
                </li>
              </Link>
            ))
          ) : (
            <MessageBox>
              <span>
                <SearchOffIcon />
              </span>
              <span>Sorry. We couldn't find any results</span>
            </MessageBox>
          )}
        </ResultList>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SearchResult;

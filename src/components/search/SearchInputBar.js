import { itemsDetail, machineDetail } from "../../data";
import Fuse from "fuse.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import navLogo from "../../img/nav_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBarWrapper = styled.div`
  width: ${(props) => props.$width}%;
  display: flex;
  align-items: center;
  flex-direction: column;
  form {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #034ea2;
    padding-bottom: 10px;
    input {
      width: 90%;
      border: 0;
      outline: 0;
      background-color: transparent;
      font-size: 25px;
    }
    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;

      svg {
        font-size: 2rem;
      }
    }
  }
`;
const PopularKeywordWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const KeywordTitle = styled.span`
  background-color: #dfeefc;
  color: #024ea2;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
`;
const Keyword = styled.span`
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1%;

  cursor: pointer;
`;
const itemsArray = Object.values(itemsDetail);
const machinesArray = Object.values(machineDetail);

function SearchInputBar({ onData, width }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const popularKeywords = {
    popularKeyword: [
      "wire",
      "cantilever",
      "vertical",
      "bending",
      "PI-Tube",
      "probe",
      "wafer",
    ],
  };
  const combineData = [...itemsArray, ...machinesArray];
  const options = {
    keys: [
      "title",
      "description",
      "specifications.model",
      "nation",
      "cards.type",
      "cards.needle",
      "cards.system",
      "contents",
      "diagram",
      "model",
    ],

    threshold: 0.1, // 검색 민감도 설정
  };
  const fuse = new Fuse(combineData, options);
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    try {
      const result = fuse.search(query);
      setResults(result.map((res) => res.item)); // 검색 결과 설정
      const simpleResults = result.map((res) => ({
        title: res.item.title,
        thumnail: res.item.thumnail,
        des: res.item.description,
        link: res.item.link,
        diagram: res.item.diagram,
      }));

      navigate(`/searchResult?keyword=${query}`, {
        state: simpleResults,
      });
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };
  const handleHideSearchBar = () => {
    onData(false);
  };
  return (
    <SearchBarWrapper $width={width}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Items"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      {/* <ul>
            {results.length > 0 ? (
              results.map((book, index) => (
                <li key={index} style={{ color: "black" }}>
                  <strong>{book.title}</strong>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul> */}
      <PopularKeywordWrapper>
        {Object.keys(popularKeywords).map((item) => (
          <KeywordTitle>
            <b>{item}</b>
          </KeywordTitle>
        ))}
        {popularKeywords.popularKeyword?.map((item) => (
          <Keyword>{item}</Keyword>
        ))}
      </PopularKeywordWrapper>
    </SearchBarWrapper>
  );
}

export default SearchInputBar;

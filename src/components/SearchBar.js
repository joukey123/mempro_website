import { itemsDetail, machineDetail } from "../data";
import Fuse from "fuse.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import navLogo from "../img/nav_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f1f3f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0;
`;
const Logo = styled.img`
  width: 12%;
`;
const SearchBarHeader = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  button {
    width: 25px;
    height: 25px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
`;
const SearchBarWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px solid #034ea2;
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
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const KeywordTitle = styled.span`
  padding: 10px;
  border-radius: 10px;
  margin-right: 30px;
`;
const Keyword = styled.span`
  background-color: #2268b7;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  margin: 0 7px;
  cursor: pointer;
`;
const itemsArray = Object.values(itemsDetail);
const machinesArray = Object.values(machineDetail);

function SearchBar() {
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
      "contents",
    ],

    threshold: 0, // 검색 민감도 설정
  };
  const fuse = new Fuse(combineData, options);
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    const result = fuse.search(query);
    setResults(result.map((res) => res.item)); // 검색 결과 설정
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: 999999,
      }}
    >
      <SearchWrapper>
        <SearchBarHeader>
          <Logo src={navLogo} />
          <button>
            <CloseIcon />
          </button>
        </SearchBarHeader>

        <SearchBarWrapper>
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
                <li key={index}>
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
                <b>{item} : </b>
              </KeywordTitle>
            ))}
            {popularKeywords.popularKeyword?.map((item) => (
              <Keyword>#{item}</Keyword>
            ))}
          </PopularKeywordWrapper>
        </SearchBarWrapper>
      </SearchWrapper>
    </div>
  );
}

export default SearchBar;

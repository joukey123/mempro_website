import { itemsDetail, machineDetail } from "../data";
import Fuse from "fuse.js";
import { useState } from "react";

const itemsArray = Object.values(itemsDetail);
const machinesArray = Object.values(machineDetail);

function SeachComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const combineData = [...itemsArray, ...machinesArray];
  const options = {
    keys: ["title", "description", "specifications.model"],
    threshold: 0, // 검색 민감도 설정
  };
  const fuse = new Fuse(combineData, options);
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    const result = fuse.search(query);
    setResults(result.map((res) => res.item)); // 검색 결과 설정
    console.log(results);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.length > 0 ? (
          results.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong>
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </>
  );
}

export default SeachComponent;

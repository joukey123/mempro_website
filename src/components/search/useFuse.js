import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { itemsDetail, machineDetail } from "../../data";
import { useRecoilState } from "recoil";
import { handleSearchBar, queryKeyword, resultArray } from "../../atoms";

function useFuse() {
  const itemsArray = Object.values(itemsDetail);
  const machinesArray = Object.values(machineDetail);
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
      "cardNeedle",
    ],
    threshold: 0.1,
  };
  const [fuse] = useState(new Fuse(combineData, options));
  const [results, setResults] = useRecoilState(resultArray);
  const [isOpen, setIsOpen] = useRecoilState(handleSearchBar);

  const navigate = useNavigate();

  const handleSearch = (query) => {
    const result = fuse.search(query);
    setResults(result.map((res) => res.item)); // 검색 결과 설정
    navigate(`/searchResult?keyword=${query}`);
    setIsOpen(false);
  };
  // useEffect(() => {
  //   if (query) {
  //     handleSearch(query);
  //   }
  // }, [query, fuse]);
  return {
    handleSearch,
    results,
  };
}

export default useFuse;

import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { itemsDetail, machineDetail } from "../../data";
import { useRecoilState } from "recoil";
import { handleSearchBar, queryKeyword, resultArray } from "../../atoms";

function useFuse() {
  const itemsArray = Object.values(itemsDetail);
  const machinesArray = Object.values(machineDetail);
  const combineData = [...itemsArray, ...machinesArray];

  const options = {
    keys: [
      "title.eng",
      "description.eng",
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
  const [query, setQuery] = useRecoilState(queryKeyword);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword"); // 'keyword'에 해당하는 값 가져오기
  const handleSearch = (query) => {
    const result = fuse.search(query);
    setResults(result.map((res) => res.item)); // 검색 결과 설정
    navigate(`/searchResult?keyword=${query}`);
  };
  // useEffect(() => {
  //   if (query) {
  //     handleSearch(query);
  //   }
  // }, [query, fuse]);
  useEffect(() => {
    if (keyword) {
      setQuery(keyword);
      handleSearch(keyword); // keyword를 직접 사용
    }
  }, [keyword]);
  return {
    handleSearch,
    results,
  };
}

export default useFuse;

import { atom } from "recoil";

export const resultArray = atom({
  key: "resultArray", // 고유한 key
  default: [], // 초기 값
});

export const queryKeyword = atom({
  key: "queryKeyword", // 고유한 key
  default: "", // 초기 값
});

export const handleSearchBar = atom({
  key: "handleSearchBar",
  default: false,
});

export const language = atom({
  key: "language",
  default: "eng",
});

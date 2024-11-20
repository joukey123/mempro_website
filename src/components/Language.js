import { Dropdown, Flag } from "semantic-ui-react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "semantic-ui-css/semantic.min.css"; // Semantic UI CSS 파일 로드
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { language } from "../atoms";

const StyleArrowDropDownIcon = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 20px;
  color: gray;
`;
const FixedDropdown = styled(Dropdown)`
  width: 150px !important; // 원하는 너비로 설정
  .menu {
    max-height: 300px !important; // 드롭다운 메뉴의 최대 높이 설정
    overflow-y: auto !important; // 스크롤 가능하게 설정
  }
`;

function Language() {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(language);
  const storedLang = localStorage.getItem("language");

  const languageOptions = [
    {
      key: "eng",
      text: "ENG",
      value: "eng",
      flag: "us",
    },
    {
      key: "kor",
      text: "KOR",
      value: "kor",
      flag: "kr",
    },
    {
      key: "cn",
      text: "CN",
      value: "cn",
      flag: "cn",
    },
    {
      key: "jp",
      text: "JP",
      value: "jp",
      flag: "jp",
    },
  ];

  const handleChange = (e) => {
    setSelectedLanguage(e.target.innerText);
    localStorage.setItem("language", e.target.innerText); // 로컬 스토리지에 언어 저장
  };
  useEffect(() => {
    if (storedLang) {
      setSelectedLanguage(storedLang); // 로컬 스토리지에 저장된 언어가 있으면 상태를 업데이트
    }
  }, []);
  return (
    <>
      <FixedDropdown
        placeholder="Language"
        fluid
        selection
        options={languageOptions}
        icon={<StyleArrowDropDownIcon />} // react-icons 패키지에서 가져온 아이콘 사용
        onChange={(e) => handleChange(e)}
        value={storedLang.toLowerCase()}
      />
    </>
  );
}

export default Language;

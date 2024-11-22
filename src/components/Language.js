import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";

import "semantic-ui-css/semantic.min.css"; // Semantic UI CSS 파일 로드
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { language } from "../atoms";
import { useMediaQuery } from "@mui/material";
import { transform } from "framer-motion";
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
  const storedLang = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : localStorage.setItem("language", "ENG");
  const inputValue = storedLang ? storedLang.toLowerCase() : "ENG";
  const isMobile = useMediaQuery("(max-width: 1023px)");

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
      {isMobile ? (
        <Dropdown
          icon={<LanguageIcon />}
          options={languageOptions}
          compact
          text=" "
          onChange={(e) => handleChange(e)}
          // react-icons 패키지에서 가져온 아이콘 사용
          style={{
            transform: "scale(1.2)",
            width: "100%",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <FixedDropdown
          placeholder="Language"
          fluid
          selection
          options={languageOptions}
          icon={<StyleArrowDropDownIcon />} // react-icons 패키지에서 가져온 아이콘 사용
          onChange={(e) => handleChange(e)}
          value={inputValue}
        />
      )}
    </>
  );
}

export default Language;

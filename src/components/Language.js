import { Dropdown, Flag } from "semantic-ui-react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "semantic-ui-css/semantic.min.css"; // Semantic UI CSS 파일 로드

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
  const languageOptions = [
    {
      key: "eng",
      text: "Eng",
      value: "eng",
      flag: "us",
    },
    {
      key: "kor",
      text: "Kor",
      value: "kor",
      flag: "kr",
    },
  ];
  return (
    <FixedDropdown
      placeholder="Language"
      fluid
      search
      selection
      options={languageOptions}
      icon={<StyleArrowDropDownIcon />} // react-icons 패키지에서 가져온 아이콘 사용
    />
  );
}

export default Language;

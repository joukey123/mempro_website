import { useRecoilState } from "recoil";
import { language } from "../atoms";

const useTranslation = (defaultLanguage = "Eng") => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(language);

  const getText = (textObj) => {
    return textObj[selectedLanguage] || textObj["Eng"]; // 기본값은 영어
  };

  return {
    getText,
  };
};

export default useTranslation;

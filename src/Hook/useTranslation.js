import { useRecoilState } from "recoil";
import { language } from "../atoms";

const useTranslation = (defaultLanguage = "eng") => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(language);

  const getText = (textObj) => {
    return textObj[selectedLanguage.toLowerCase()] || textObj["eng"]; // 기본값은 영어
  };

  return {
    getText,
    selectedLanguage,
  };
};

export default useTranslation;

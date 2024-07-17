import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { items } from "../data";

export const useCategory = () => {
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentDiagrams, setCurrentDiagrams] = useState([]);
  const [currentSubcategory, setCurrentSubcategory] = useState([]);
  const [currentSubcategoryName, setCurrentSubcategoryName] = useState("");
  const [selectDiagram, setSelectDiagram] = useState("");
  const [type, setType] = useState("");
  const [headerImges, setHeaderImges] = useState("");
  const [sublink, setSublink] = useState("");
  useEffect(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    let foundCategory = "";
    let foundSubcategoryNames = [];
    let foundSubcategoryName = "";
    let foundSubcategoryLink = "";
    let diagrams = [];
    let diagram = "";
    let type = "";
    let img = "";

    if (paths.length > 0) {
      const mainPath = paths[0];

      const mainItem = items.find((item) => item.link === mainPath);
      if (mainItem) {
        foundCategory = mainItem.category;
        if (mainItem.type) {
          type = mainItem.type;
        } else {
          type = "";
        }
        img = mainItem.headerImg; //배경이미지
        if (mainItem.subcategories) {
          diagrams = mainItem.subcategories.map(
            (subcategory) => subcategory.diagram
          );

          // 서브카테고리를 찾고 저장
          if (paths.length > 1) {
            const desiredSubcategory = paths[paths.length - 1];
            const matchedSubcategory = mainItem.subcategories.find(
              (subcategory) =>
                subcategory.subcategory.some(
                  (sub) => sub.link === desiredSubcategory
                )
            );

            if (matchedSubcategory) {
              diagram = matchedSubcategory.diagram; //selectDiagram
              const matchedSub = matchedSubcategory.subcategory.find(
                (sub) => sub.link === desiredSubcategory
              );
              foundSubcategoryName = matchedSub ? matchedSub.name : "";
              foundSubcategoryLink = matchedSub ? matchedSub.link : "";
              foundSubcategoryNames = matchedSubcategory.subcategory.map(
                (sub) => sub.name
              );
            }
          }
        }
      }
    }

    setCurrentCategory(foundCategory);
    setCurrentSubcategory(foundSubcategoryNames);
    setCurrentSubcategoryName(foundSubcategoryName);
    setCurrentDiagrams(diagrams);
    setSelectDiagram(diagram);
    setType(type);
    setHeaderImges(img);
    setSublink(foundSubcategoryLink);
  }, [location]);

  return {
    currentCategory,
    currentSubcategory,
    currentSubcategoryName,
    currentDiagrams,
    selectDiagram,
    type,
    headerImges,
    sublink,
  };
};

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { items } from "../data";

export const useCategory = () => {
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSubcategory, setCurrentSubcategory] = useState([]);
  const [currentDiagrams, setCurrentDiagrams] = useState([]);

  useEffect(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    let foundCategory = "";
    let foundSubcategory = [];
    let diagrams = [];
    console.log(paths, "path");
    if (paths.length > 0) {
      const mainPath = paths[0];
      const mainItem = items.find((item) => item.link === mainPath);
      console.log(mainItem);
      if (mainItem) {
        foundCategory = mainItem.category;

        if (mainItem.subcategories) {
          diagrams = mainItem.subcategories.map(
            (subcategory) => subcategory.diagram
          );

          if (paths.length > 1) {
            const subPath = paths[1];
            mainItem.subcategories.forEach((subcategory) => {
              const subItem = subcategory.subcategory.find(
                (sub) => sub.link === subPath
              );
              if (subItem) {
                foundSubcategory = subItem.name;
              }
            });
          }
        }
      }
    }

    setCurrentCategory(foundCategory);
    setCurrentSubcategory(foundSubcategory);
    setCurrentDiagrams(diagrams);
  }, [location]);

  return { currentCategory, currentSubcategory, currentDiagrams };
};

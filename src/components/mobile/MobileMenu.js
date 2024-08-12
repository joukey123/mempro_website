import styled from "styled-components";
import { items, logo } from "../../data";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`;

const MenuWrapper = styled.ul`
  background-color: white;
  width: 50%;
  height: 100vh;
  position: absolute;
  right: 0;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
  padding-top: 30px;
`;

const Categories = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 10px;
`;
const Category = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 500;
  }
`;

const Subcategories = styled.ul`
  width: 100%;
  margin-top: 10px;
  li {
    padding: 10px;
    margin: 10px;
  }
`;

const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  top: 0%;
  left: 50%;
  transform: translate(-110%, 20%);
  cursor: pointer;
`;
function MobileMenu({ onData }) {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState(null);
  const navigate = useNavigate();

  const hideSubMobileMenu = () => {
    onData(false);
  };
  const handleSubMenu = (category) => {
    setOpenSubmenu((prev) => !prev);
    setSelectCategory(category);
    if (category.subcategories) {
      // 모든 subcategories의 subcategory 배열을 합쳐서 하나의 배열로 만듭니다.
      const allSubcategories = category.subcategories.flatMap(
        (subcat) => subcat.subcategory
      );
      setSelectedSubcategories(allSubcategories);
    } else {
      //링크 이동 navigate
      setSelectedSubcategories(null);
      navigate(`/${category.link}`);
    }
  };
  return (
    <Wrapper>
      <MenuWrapper>
        {items.map((category, index) => (
          <Categories key={index}>
            <Category onClick={() => handleSubMenu(category)}>
              <span>{category.category}</span>
              {category.subcategories && (
                <div>
                  {openSubmenu && selectCategory === category ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </div>
              )}
            </Category>

            <Collapse in={openSubmenu}>
              {selectCategory === category && selectedSubcategories && (
                <Subcategories>
                  {selectedSubcategories.map((sub, index) => (
                    <li style={{ fontWeight: 100 }} key={index}>
                      {sub.name}
                    </li>
                  ))}
                </Subcategories>
              )}
            </Collapse>
          </Categories>
        ))}
      </MenuWrapper>
      <CloseBtn onClick={hideSubMobileMenu}>
        <CloseIcon />
      </CloseBtn>
    </Wrapper>
  );
}

export default MobileMenu;

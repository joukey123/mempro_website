import styled from "styled-components";
import { items, logo, linkBtns, machine } from "../../data";
import { useScroll } from "@react-three/drei";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import { Fab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import logo_white from "../../img/nav_logo_white.svg";
import { color } from "framer-motion";
import useTranslation from "../../Hook/useTranslation";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`;

const MenuWrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 100vh;
  position: absolute;
  right: 0;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
  color: black !important;
  overflow: auto;
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
    padding: 10px 0 10px 5px;
    margin: 0px;
  }
`;

const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 2px;
  color: white;
`;

const LogoBox = styled.div`
  background: url(${logo_white}) no-repeat center;
  width: 100%;
  height: 30px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuTop = styled.div`
  width: 100%;
  background: linear-gradient(45deg, #1976d2, #024ea2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
`;
function MobileMenu({ onData }) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openParts, setOpenParts] = useState(false);
  const [openMachines, setOpenMachines] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState(null);
  const [selectedMachine, setSelectMachine] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL location

  const hideSubMobileMenu = () => {
    onData(false);
    setOpenCategory(false);
  };

  const handleMachinesType = (event) => {
    const allMachinecategories = machine.flatMap((item) =>
      item.subcategories.map((subcat) => ({
        type: item.type,
        link: item.link,
        diagram: subcat.diagram,
        subcategorylink: subcat.link,
      }))
    );
    setSelectMachine(allMachinecategories);
    setOpenMachines((prev) => !prev);
  };

  const handlePartsType = (category) => {
    const allSubcategories = category.subcategories.flatMap(
      (subcat) => subcat.subcategory
    );
    setSelectedSubcategories(allSubcategories);
    setOpenParts((prev) => !prev);
  };

  const handleCategory = (category) => {
    if (category.category.eng === "semiconductor") {
      setOpenCategory((prev) => !prev);
    } else {
      navigate(`/${category.link}`);
    }
  };
  useEffect(() => {
    hideSubMobileMenu();
  }, [location.key]);
  const { getText } = useTranslation();
  return (
    <Wrapper>
      <MenuWrapper>
        <MenuTop>
          <div
            style={{
              width: "100%",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoBox />
            <CloseBtn onClick={hideSubMobileMenu}>
              <CloseIcon />
            </CloseBtn>
          </div>
        </MenuTop>

        <ul style={{ marginBottom: "20px" }}>
          {items.map((category, index) => (
            <Categories key={index}>
              <Category onClick={() => handleCategory(category)}>
                <span>{getText(category.category)}</span>

                {category.subcategories && (
                  <div>
                    {openCategory ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                )}
              </Category>

              {category.type && (
                <Collapse in={openCategory}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                      padding: "0 10px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      onClick={() => handlePartsType(category)}
                    >
                      <span>Parts</span>
                      <div>
                        {openParts ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                    </div>
                    <Collapse in={openParts}>
                      {selectedSubcategories && (
                        <Subcategories>
                          {selectedSubcategories.map((sub, index) =>
                            sub.name === "sanding" ? null : (
                              <Link
                                to={
                                  category.type &&
                                  `/${category.link}/${category.type}/${sub.link}`
                                }
                                key={index}
                              >
                                <li style={{ fontWeight: 100 }}>{sub.name}</li>
                              </Link>
                            )
                          )}
                        </Subcategories>
                      )}
                    </Collapse>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "15px",
                      }}
                      onClick={handleMachinesType}
                    >
                      <span>Machines</span>
                      <div>
                        {openMachines ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                    </div>
                    <Collapse in={openMachines}>
                      {selectedMachine && (
                        <Subcategories>
                          {selectedMachine.map((sub, index) => (
                            <Link
                              to={
                                category.type &&
                                `/${sub.link}/${sub.type}/${sub.subcategorylink}`
                              }
                              key={index}
                            >
                              <li style={{ fontWeight: 100 }}>{sub.diagram}</li>
                            </Link>
                          ))}
                        </Subcategories>
                      )}
                    </Collapse>
                  </div>
                </Collapse>
              )}
            </Categories>
          ))}
        </ul>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 auto",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            paddingTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Button
            sx={{
              margin: 1,
              width: "33%",

              color: "rgba(0,0,0,0.3)",
              border: ".5px solid rgba(0,0,0,0.3)",
            }}
            variant="outlined"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </Button>

          {linkBtns.map((item, index) => (
            <Button
              key={index}
              target="_blank"
              onClick={() => window.open(`${item.link}`)}
              sx={{
                boxShadow: 0,
                margin: 1,
                width: "33%",
                color: "rgba(0,0,0,0.3)",
                border: ".5px solid rgba(0,0,0,0.3)",
              }}
              variant="outlined"
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </MenuWrapper>
    </Wrapper>
  );
}

export default MobileMenu;

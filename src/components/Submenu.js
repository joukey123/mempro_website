import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { machine } from "../data";
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.96);
  color: black;
  position: absolute;
  top: 30px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
`;
const SubmenuWrapper = styled.ul`
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }
  }
`;
const Diagram = styled.h1`
  font-weight: bold;
  align-items: start;
  margin-bottom: 10px;
  border-bottom: 0.4px solid rgba(0, 0, 0, 0.3);
  width: 150px;
  padding-bottom: 5px;
`;
const SubCategory = styled.span`
  width: 180px;
  padding: 5px 2px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 400 !important;
  &:last-child {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }
`;
function Submenu({
  subcategories,
  handleMouseOut,
  hoveredLiWidth,
  isVisible,
  categoryLink,
  type,
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper
          onMouseOut={handleMouseOut}
          initial={{ height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
        >
          <div>
            <SubmenuWrapper>
              {subcategories.map((item, index) => (
                <li key={index}>
                  <Diagram key={index}>{item.diagram}</Diagram>
                  {item.subcategory &&
                    item.subcategory.map((names, index) => (
                      <Link
                        to={`/${categoryLink}/${type}/${names.link}`}
                        key={index}
                      >
                        <SubCategory>{names.name}</SubCategory>
                      </Link>
                    ))}
                </li>
              ))}
            </SubmenuWrapper>
          </div>
          {/* machine 카테고리도 같이 나오게하는거 */}
          {categoryLink === "semi" && (
            <div>
              <SubmenuWrapper>
                {machine.map((item, index) => (
                  <li key={index} style={{ marginLeft: "30px" }}>
                    <Diagram
                      style={{ fontWeight: "bold", marginBottom: "5px" }}
                      key={index}
                    >
                      {item.category}
                    </Diagram>
                    {item.subcategories &&
                      item.subcategories.map((names, index) => (
                        <Link
                          to={`/${categoryLink}/${item.category}/${names.link}`}
                          key={index}
                        >
                          <SubCategory key={index}>{names.diagram}</SubCategory>
                        </Link>
                      ))}
                  </li>
                ))}
              </SubmenuWrapper>
            </div>
          )}
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default Submenu;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.95);
  color: black;
  position: absolute;
  top: 30px;
  left: -${(props) => props.$subMenuCenter}px;
  padding: 10px;
  border-radius: 10px;
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
}) {
  const subRef = useRef(null);
  const [subMenuCenter, setSubMenuCenter] = useState(0);
  useEffect(() => {
    if (subRef.current) {
      setSubMenuCenter((subRef.current.offsetWidth - hoveredLiWidth) / 2);
    }
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper
          onMouseOut={handleMouseOut}
          ref={subRef}
          $subMenuCenter={subMenuCenter}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <SubmenuWrapper>
              {subcategories.map(
                (item, index) =>
                  item.diagram !== "machine" && (
                    <li key={index}>
                      <Diagram key={index}>{item.diagram}</Diagram>
                      {item.subcategory &&
                        item.subcategory.map((names, index) => (
                          <Link to={`/${categoryLink}/${names.link}`}>
                            <SubCategory key={index}>{names.name}</SubCategory>
                          </Link>
                        ))}
                    </li>
                  )
              )}
            </SubmenuWrapper>
          </div>
          <div>
            <SubmenuWrapper>
              {subcategories.map(
                (item, index) =>
                  item.diagram === "machine" && (
                    <li key={index} style={{ marginLeft: "30px" }}>
                      <Diagram
                        style={{ fontWeight: "bold", marginBottom: "5px" }}
                        key={index}
                      >
                        {item.diagram}
                      </Diagram>
                      {item.subcategory &&
                        item.subcategory.map((names, index) => (
                          <SubCategory key={index}>{names.name}</SubCategory>
                        ))}
                    </li>
                  )
              )}
            </SubmenuWrapper>
          </div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default Submenu;
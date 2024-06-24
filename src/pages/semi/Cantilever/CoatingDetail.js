import styled from "styled-components";
import line from "../../../img/line.svg";
import CoatingInfo from "./CoatingInfo";
import { useState } from "react";

const Wrapper = styled.div``;

const StructureWarpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 700px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${line}) center center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const SpecWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  padding-top: 50px;
`;
const NeedleImg = styled.img`
  width: 100%;
  max-width: 875px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -70%) scale(0.95);
`;

const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  font-weight: 300;
`;

function CoatingDetail({ contents }) {
  const coating = contents.coating;
  const [specIndex, setSpecIndex] = useState();
  const [specId, setSpecId] = useState();
  const handleSpecOver = (index, id) => {
    setSpecIndex(index);
    setSpecId(id);
  };
  const handleSpecLeave = () => {
    setSpecIndex(-1);
    setSpecId(-1);
  };

  return (
    <Wrapper>
      <StructureWarpper>
        <NeedleImg src={coating.img} />
        <CoatingInfo hover={specId} />
        <SpecWrapper>
          {coating.spec.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 15,
                fontWeight: 300,
                fontSize: "18px",
              }}
              onMouseOver={() => handleSpecOver(index, item.id)}
              onMouseLeave={handleSpecLeave}
            >
              <Number $hover={specIndex + 1 === item.id}>{item.id}</Number>
              <span style={{ fontWeight: "500", marginRight: 20 }}>
                {item.name} :
              </span>
              <span>{item.description}</span>
            </div>
          ))}
        </SpecWrapper>
      </StructureWarpper>
    </Wrapper>
  );
}

export default CoatingDetail;

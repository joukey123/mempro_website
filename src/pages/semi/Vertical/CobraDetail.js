import styled from "styled-components";
import CobraInfo from "./CobraInfo";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NeedleImg = styled.img`
  width: 100%;
  max-width: 900px;
  padding: 50px 0;
  margin-top: 100px;
  margin-left: 60px;
  transform: scale(1.03);
`;
const SpecWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.blue};
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
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

const Column = styled.div``;
const Name = styled.h1`
  margin-bottom: 3px;
`;
const Des = styled.span``;

function CobraDetail({ contents }) {
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
      <NeedleImg src={contents.img} />
      <SpecWrapper>
        {contents.spec.map((item, index) => (
          <TextWrapper
            key={index}
            onMouseOver={() => handleSpecOver(index, item.id)}
            onMouseLeave={handleSpecLeave}
          >
            <Number $hover={specIndex + 1 === item.id}>{item.id}</Number>
            <Column>
              <Name>{item.name}</Name>
              <Des>{item.description}</Des>
            </Column>
          </TextWrapper>
        ))}
        <CobraInfo />
      </SpecWrapper>
    </Wrapper>
  );
}

export default CobraDetail;

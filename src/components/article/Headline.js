import styled from "styled-components";

const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-right: 20px;
`;
const Span = styled.span`
  padding: 5px 15px;
  color: ${(props) => props.theme.colors.gold};
  border: 1px solid ${(props) => props.theme.colors.gold};
  border-radius: 15px;
  position: relative;
  bottom: -2px;
`;
const Description = styled.p`
  margin-top: 20px;
  width: 65%;
`;

function Headline({ item }) {
  return (
    <TextWrapper style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title>{item.title}</Title>
        <Span>{item.nation}</Span>
      </div>
      <Description>{item.description}</Description>
    </TextWrapper>
  );
}

export default Headline;

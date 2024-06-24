import { useEffect, useState } from "react";
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
  margin: 0 5px;
`;
const Description = styled.p`
  margin-top: 20px;
  width: 80%;
`;

const Warining = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  bottom: -5px;
`;

function Headline({ item, text }) {
  const [showWarning, setShowWarning] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleShowWarning = () => {
    setShowWarning(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };
  const handleHideWarning = () => {
    const id = setTimeout(() => setShowWarning(false), 3000);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);
  return (
    <TextWrapper style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title>{item.title}</Title>
        {item.warning && (
          <>
            <Warining src={item.warning} />

            <span
              style={{
                backgroundColor: "#FF4466",
                color: "white",
                padding: "5px 15px",
                borderRadius: 10,
                marginLeft: 5,
                position: "relative",
                bottom: "-5px",
              }}
            >
              {text}
            </span>
          </>
        )}

        {item.nation && item.nation.map((item) => <Span>{item}</Span>)}
      </div>
      {item.description && <Description>{item.description}</Description>}
    </TextWrapper>
  );
}

export default Headline;

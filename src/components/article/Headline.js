import { useEffect, useState } from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SnackbarBox from "../SnackbarBox";
import { language } from "../../atoms";
import { useRecoilState } from "recoil";
import useTranslation from "../../Hook/useTranslation";

const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin-bottom: 20px;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: end;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: normal;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-right: 20px;
  text-transform: capitalize;
  @media (max-width: 1023px) {
    margin-bottom: 10px;
    font-size: 36px;
    letter-spacing: -1.5px;
  }
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
  width: 65%;
  @media (max-width: 1023px) {
    width: 100%;
  }
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
  const { getText } = useTranslation();

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
      <TitleBox>
        <Title>{getText(item.title)}</Title>
        {item.warning && <SnackbarBox text={item.warning} />}
        <Stack direction="row" spacing={1}>
          {item.nation &&
            item.nation.map((item) => (
              <Chip label={item} variant="outlined" color="warning" />
            ))}
        </Stack>
      </TitleBox>
      {item.description && (
        <Description>{getText(item.description)}</Description>
      )}
    </TextWrapper>
  );
}

export default Headline;

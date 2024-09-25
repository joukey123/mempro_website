import { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const TopBannerBox = styled.div`
  width: 100%;
  background-color: ${(props) => props.$color};
  display: flex;
  height: ${(props) => props.$isVisible === false && "0px"};
  opacity: ${(props) => props.$isVisible === false && "0"};
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  color: ${(props) => props.$fontColor};
  /* position: fixed; */
  /* z-index: 9999; */
`;
const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
  span {
    line-height: 22px;
    b {
      font-size: 15px;
    }
  }

  @media (max-width: 1023px) {
    span {
      line-height: 18px;
      font-size: 14px;
    }
    b {
      font-size: 14px;
    }
  }
`;
const CloseBtn = styled.div`
  button {
    border: 0;
    background-color: transparent;
    width: 5rem;
    padding: 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1023px) {
    button {
      width: 3rem;
    }
  }
`;
const TopBanner = ({ text, linkText, link, color, fontColor }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(false);
    localStorage.setItem("bannerClosed", "true");
  };

  useEffect(() => {
    const bannerClosed = localStorage.getItem("bannerClosed");
    if (bannerClosed) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsLoaded(true); // 상태가 로드된 후 isLoaded를 true로 설정
  }, []);
  if (!isLoaded) {
    return null; // 로딩 중에는 아무것도 렌더링하지 않음
  }

  return (
    isVisible && (
      <TopBannerBox
        $isVisible={isVisible}
        $color={color}
        $fontColor={fontColor}
      >
        <Bar>
          <span>
            {text}
            <br />
            <u>
              <a href={link} target="_blank">
                <b>{linkText}</b>
              </a>
            </u>
          </span>
        </Bar>
        <CloseBtn onClick={handleIsVisible}>
          <button>
            <CloseIcon />
          </button>
        </CloseBtn>
      </TopBannerBox>
    )
  );
};

export default TopBanner;

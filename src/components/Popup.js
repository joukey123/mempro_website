import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { showPopup } from "../atoms";
import { useMediaQuery } from "@mui/material";
import { Scale } from "@mui/icons-material";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: ${(props) => (props.$isMobile ? "50%" : "20%")};
  transform: translate(-50%, -50%);
  z-index: 999999;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.$isMobile && "100vw"};
  height: ${(props) => props.$isMobile && "100vh"};
  background-color: ${(props) => props.$isMobile && "rgba(0, 0, 0, 0.6)"};
  backdrop-filter: ${(props) =>
    props.$isMobile && " blur(3px)"}; /* 블러 효과 */
`;

const Imgbox = styled.div`
  width: ${(props) =>
    props.$isMobile ? "calc(1000px / 2.5)" : "calc(1000px /2)"};
  height: ${(props) =>
    props.$isMobile ? "calc(1363px / 2.5)" : "calc(1363px /2)"};
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid aliceblue;
  border-radius: 10px 10px 0 0;
`;

const TestBox = styled.div`
  width: ${(props) =>
    props.$isMobile ? "calc(1000px / 2.5)" : "calc(1000px /2)"};
  height: ${(props) =>
    props.$isMobile ? "calc(1363px / 2.5)" : "calc(1363px /2)"};
  background-color: aliceblue;
  transform: scale(0.9);
`;
const Btnbox = styled.div`
  width: 100%;
  button {
    width: 50%;
    background-color: white;
    border: 0;
    padding: 12px 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    font-size: ${(props) => props.$isMobile && "15px"};
    &:hover {
      background-color: #0248ac;
      color: white;
      transition: 0.1s all ease-in-out;
    }
  }
  :first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0px 0 0px 10px;
    font-weight: bold;
  }
  :last-child {
    border-radius: 0px 0 10px 0px;
  }
`;

function Popup({ img }) {
  const [isShowPopup, setIsShowPopup] = useRecoilState(showPopup);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    const hideUntil = localStorage.getItem("popupHideUntil");
    const now = new Date();
    // 팝업 숨김 로직
    if (!hideUntil || now > new Date(hideUntil)) {
      setIsShowPopup(true); // 팝업 보이기
    } else {
      setIsShowPopup(false); // 팝업 숨기기
    }
  }, [setIsShowPopup]);

  const handleHidePopupOneDay = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // 현재 날짜에 1일 추가
    localStorage.setItem("popupHideUntil", tomorrow.toISOString()); // ISO 형식으로 저장
    setIsShowPopup(false); // 팝업 닫기
  };

  return (
    <Wrapper $isMobile={isMobile}>
      <TestBox $isMobile={isMobile}>
        <Imgbox $img={img} $isMobile={isMobile} />
        <Btnbox $isMobile={isMobile}>
          <button onClick={handleHidePopupOneDay}>Do not show for 1 day</button>
          <button onClick={() => setIsShowPopup((prev) => !prev)}>close</button>
        </Btnbox>
      </TestBox>
    </Wrapper>
  );
}

export default Popup;

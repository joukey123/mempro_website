import styled from "styled-components";
import worldmap from "../../img/worldmap.svg";
import pin from "../../img/pin.svg";
import { AnimatePresence, motion } from "framer-motion";
import Btn from "../../components/Btn";
import Footer from "../../components/Footer";
import { useState } from "react";
import { add } from "../../data";
import build from "../../img/build.svg";
import { useMediaQuery } from "@mui/material";
import useAnimateOnInView from "../../Hook/useAnimationOnInView";
import useTranslation from "../../Hook/useTranslation";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    margin-top: 50px;
  }
`;
const MapWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1023px) {
    height: 250px;
    overflow: hidden;
    margin-bottom: 20px;
  }
`;
const Map = styled.div`
  background: url(${worldmap}) no-repeat top center;
  background-size: contain;
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  filter: grayscale(1);
  opacity: 0.2;
`;
const Pin = styled(motion.img)`
  width: 40px;
  position: absolute;
`;
const Nation = styled(motion.span)`
  display: block;
  background-color: #004d91;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  padding: 5px 10px;
`;
const OfficePin = styled(motion.img)`
  width: 40px;
  position: absolute;
`;
const OfficeNation = styled(motion.span)`
  display: block;
  background-color: #004d91;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  padding: 5px 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.9);
  padding: 20px 5px;
  margin-bottom: 50px;
  button {
    width: 150px;
  }
  button:last-child {
    margin-left: 20px;
  }
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
`;
const Des = styled.p`
  text-align: center;
  font-weight: 300;
  letter-spacing: -0.5px;
`;
const BlackBox = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50px;
  color: white;
  padding: 0px 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const OfficeAddrss = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  color: ${(props) => props.theme.colors.black};
  button {
    background-color: ${(props) => props.theme.colors.gray}; // 기본 버튼 색상

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: ${(props) => props.theme.colors.blue}; // 기본 버튼 색상
    }
  }

  @media (max-width: 1023px) {
    width: 90%;
    flex-direction: column;
    margin-top: 0px;
    div:first-child {
      margin-bottom: 20px;
    }
  }
`;
const OfficeMotionBox = styled(motion.div)``;
const Partners = styled(motion.div)`
  @media (max-width: 1023px) {
    position: absolute;
    top: -2%;
    left: 107%;
    transform: scale(0.5);
  }
`;

const Offices = styled(motion.div)`
  @media (max-width: 1023px) {
    position: absolute;
    top: -2%;
    left: 107%;
    transform: scale(0.5);
  }
`;
function Office() {
  const [isTrade, setIsTrade] = useState(true);
  const [isOffice, setIsOffice] = useState(false);

  const handleClick = (event) => {
    if (event.target.innerText === "Trade Partners") {
      setIsTrade(true);
      setIsOffice(false);
    } else {
      setIsTrade(false);
      setIsOffice(true);
    }
  };

  const openMap = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const {
    ref: boxRef,
    controls: boxControls,
    animateVariants: boxVariants,
  } = useAnimateOnInView(0, 0.3);
  const { selectedLanguage } = useTranslation();
  const lang = selectedLanguage.toLowerCase();
  const partnersMessage = {
    eng: "The partners currently working with Mempro.",
    kor: "현재 Mempro와 협력 중인 파트너들입니다.",
    cn: "目前与Mempro合作的伙伴。",
    jp: "現在Memproと共に働いているパートナーです。",
  };
  const officesMessage = {
    eng: "Mempro’s headquarters and international offices.",
    kor: "Mempro의 본사 및 해외 사무소.",
    cn: "Mempro的总部和国际办公室。",
    jp: "Memproの本社および国際オフィス。",
  };
  return (
    <>
      <Wrapper>
        <BlackBox>Office & Trade Partners</BlackBox>
        <Des>
          {isTrade
            ? partnersMessage[lang] ?? partnersMessage["eng"]
            : officesMessage[lang] ?? officesMessage["eng"]}
        </Des>
        <BtnWrapper>
          <Btn
            text="Trade Partners"
            onClick={(event) => handleClick(event)}
            isClick={isTrade}
          />
          <Btn
            text="Offices"
            onClick={(event) => handleClick(event)}
            isClick={isOffice}
          />
        </BtnWrapper>
        <MapWrapper>
          <Map />
          <AnimatePresence>
            {isTrade && (
              <Partners exit={{ opacity: 0 }}>
                {/* korea */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 30, right: 140 }}
                  animate={{ opacity: 1, top: 60, right: 140 }}
                  transition={{ delay: 0 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 120, right: 130 }}
                  animate={{ opacity: 1, top: 120, right: 130 }}
                  transition={{ delay: 0.1 }}
                >
                  Korea
                </Nation>
                {/* Taiwan */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 160 - 30, right: 160 }}
                  animate={{ opacity: 1, top: 190 - 30, right: 160 }}
                  transition={{ delay: 0.4 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 250 - 30, right: 145 }}
                  animate={{ opacity: 1, top: 250 - 30, right: 145 }}
                  transition={{ delay: 0.5 }}
                >
                  Taiwan
                </Nation>
                {/* Japan */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 60, right: 90 }}
                  animate={{ opacity: 1, top: 90, right: 90 }}
                  transition={{ delay: 0.2 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 150, right: 80 }}
                  animate={{ opacity: 1, top: 150, right: 80 }}
                  transition={{ delay: 0.3 }}
                >
                  Japan
                </Nation>
                {/* China */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 40, right: 210 }}
                  animate={{ opacity: 1, top: 70, right: 210 }}
                  transition={{ delay: 0.3 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 130, right: 200 }}
                  animate={{ opacity: 1, top: 130, right: 200 }}
                  transition={{ delay: 0.4 }}
                >
                  China
                </Nation>

                {/* Vietnam */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 140 + 20, right: 200 + 20 }}
                  animate={{ opacity: 1, top: 170 + 20, right: 200 + 20 }}
                  transition={{ delay: 0.5 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 230 + 20, right: 180 + 20 }}
                  animate={{ opacity: 1, top: 230 + 20, right: 180 + 20 }}
                  transition={{ delay: 0.6 }}
                >
                  Vietnam
                </Nation>
                {/* Philippine */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 190 + 10, right: 100 }}
                  animate={{ opacity: 1, top: 190 + 10, right: 100 }}
                  transition={{ delay: 0.6 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 250 + 10, right: 75 }}
                  animate={{ opacity: 1, top: 250 + 10, right: 75 }}
                  transition={{ delay: 0.7 }}
                >
                  Philippine
                </Nation>
                {/* Singapore */}
                <Nation
                  initial={{ opacity: 0, top: 290, right: 100 }}
                  animate={{ opacity: 1, top: 290, right: 100 }}
                  transition={{ delay: 0.78 }}
                >
                  Singapore
                </Nation>
                {/* Malasia */}
                <Nation
                  initial={{ opacity: 0, top: 280, right: 205 }}
                  animate={{ opacity: 1, top: 280, right: 205 }}
                  transition={{ delay: 0.8 }}
                >
                  Malasia
                </Nation>
                {/* Germany */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 50 - 30, right: 480 }}
                  animate={{ opacity: 1, top: 50, right: 480 }}
                  transition={{ delay: 0.9 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 110, right: 460 }}
                  animate={{ opacity: 1, top: 110, right: 460 }}
                  transition={{ delay: 1 }}
                >
                  Germany
                </Nation>
                {/* Italy */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 75 - 30, right: 420 }}
                  animate={{ opacity: 1, top: 75, right: 420 }}
                  transition={{ delay: 1.1 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 135, right: 415 }}
                  animate={{ opacity: 1, top: 135, right: 415 }}
                  transition={{ delay: 1.2 }}
                >
                  Italy
                </Nation>
                {/* USA */}
                <Pin
                  src={pin}
                  initial={{ opacity: 0, top: 75 - 30, right: 760 }}
                  animate={{ opacity: 1, top: 75, right: 760 }}
                  transition={{ delay: 1.2 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 135, right: 755 }}
                  animate={{ opacity: 1, top: 135, right: 755 }}
                  transition={{ delay: 1.3 }}
                >
                  USA
                </Nation>
              </Partners>
            )}
            {isOffice && (
              <Offices exit={{ opacity: 0 }}>
                {/* korea */}
                <OfficePin
                  src={pin}
                  initial={{ opacity: 0, top: 30, right: 140 }}
                  animate={{ opacity: 1, top: 60, right: 140 }}
                  transition={{ delay: 0 }}
                />
                <OfficeNation
                  initial={{ opacity: 0, top: 120, right: 130 }}
                  animate={{ opacity: 1, top: 120, right: 130 }}
                  transition={{ delay: 0.1 }}
                >
                  Korea
                </OfficeNation>
                {/* Taiwan */}
                <OfficePin
                  src={pin}
                  initial={{ opacity: 0, top: 160 - 30, right: 160 }}
                  animate={{ opacity: 1, top: 190 - 30, right: 160 }}
                  transition={{ delay: 0.4 }}
                />
                <OfficeNation
                  initial={{ opacity: 0, top: 250 - 30, right: 145 }}
                  animate={{ opacity: 1, top: 250 - 30, right: 145 }}
                  transition={{ delay: 0.5 }}
                >
                  Taiwan
                </OfficeNation>
              </Offices>
            )}
          </AnimatePresence>
        </MapWrapper>
        <OfficeAddrss>
          {add.map((item, index) => (
            <motion.div
              key={index}
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                padding: isMobile ? "15px" : "20px",
                borderRadius: 10,
                boxShadow: "1px 1px 5px rgba(0,0,0,0.05)",
                margin: 5,
              }}
              ref={boxRef}
              initial="hidden"
              animate={boxControls}
              variants={boxVariants(index * 0.5)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: isMobile ? 0 : 30,
                }}
              >
                <img src={build} width={40} style={{ marginRight: 15 }} />
                <div style={{ width: isMobile ? "95%" : "90%" }}>
                  <div
                    style={{ fontSize: 16, marginBottom: 8, fontWeight: 300 }}
                  >
                    {item.type}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>
                    {item.nation}
                  </div>
                </div>
                <button
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "right",
                    padding: "5px 10px 5px 10px",
                    borderRadius: 5,
                    color: "white",
                    border: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => openMap(item.address)}
                >
                  map
                </button>
              </div>
              <div
                style={{
                  fontSize: 14,
                  width: "100%",
                  marginTop: 10,
                  lineHeight: 1.3,
                }}
              >
                {item.address}
              </div>
              <div style={{ fontSize: 14, marginTop: isMobile ? 10 : 20 }}>
                {isMobile ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 0,
                    }}
                  >
                    <span style={{ marginBottom: 10, fontSize: "14px" }}>
                      {item.mail}
                    </span>
                    <span style={{ fontSize: "14px" }}>{item.tell}</span>
                  </div>
                ) : (
                  <span style={{ whiteSpace: "nowrap" }}>
                    {item.mail}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{item.tell}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </OfficeAddrss>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Office;

import styled from "styled-components";
import worldmap from "../../img/worldmap.svg";
import pin from "../../img/pin.svg";
import { AnimatePresence, motion } from "framer-motion";
import Btn from "../../components/Btn";
import Footer from "../../components/Footer";
import { useState } from "react";
import { add } from "../../data";
import build from "../../img/build.svg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MapWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  position: relative;
`;
const Map = styled.div`
  background: url(${worldmap}) no-repeat top center;
  background-size: contain;
  width: 100%;
  max-width: 900px;
  height: 500px;
  filter: grayscale(1);
  opacity: 0.2;
  margin: 0 auto;
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
    width: 145px;
  }
  button:last-child {
    margin-left: 20px;
  }
`;
const Des = styled.p`
  width: 39%;
  text-align: center;
`;
const BlackBox = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50px;
  color: white;
  padding: 0px 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: lighter;
  margin-bottom: 35px;
`;

const OfficeAddrss = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 150px;
  color: ${(props) => props.theme.colors.black};
  button {
    background-color: ${(props) => props.theme.colors.gray}; // 기본 버튼 색상

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: ${(props) => props.theme.colors.blue}; // 기본 버튼 색상
    }
  }
`;

function Office() {
  const [isTrade, setIsTrade] = useState(false);
  const [isOffice, setIsOffice] = useState(true);
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
  return (
    <>
      <Wrapper>
        <BlackBox>Office & Trade Partners</BlackBox>
        <Des>
          {isTrade
            ? "멤프로와 현재 거래하고 있는 파트너입니다."
            : "멤프로의 본사와 해외 사업장을 소개합니다."}
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
              <motion.div exit={{ opacity: 0 }}>
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
                  initial={{ opacity: 0, top: 75 - 30, left: 100 }}
                  animate={{ opacity: 1, top: 75, left: 100 }}
                  transition={{ delay: 1.2 }}
                />
                <Nation
                  initial={{ opacity: 0, top: 135, left: 95 }}
                  animate={{ opacity: 1, top: 135, left: 95 }}
                  transition={{ delay: 1.3 }}
                >
                  USA
                </Nation>
              </motion.div>
            )}
            {isOffice && (
              <motion.div exit={{ opacity: 0 }}>
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
              </motion.div>
            )}
          </AnimatePresence>
        </MapWrapper>
        <OfficeAddrss>
          {add.map((item) => (
            <div
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                padding: 20,
                borderRadius: 10,
                boxShadow: "1px 1px 5px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <img src={build} width={40} style={{ marginRight: 15 }} />
                <div>
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
                    marginLeft: 130,
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
              <div style={{ width: 400, marginTop: 10, lineHeight: 1.3 }}>
                {item.address}
              </div>
              <div style={{ fontSize: 15, marginTop: 20 }}>
                {item.mail} | {item.tell}
              </div>
            </div>
          ))}
        </OfficeAddrss>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Office;

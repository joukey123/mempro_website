import styled from "styled-components";
import ContentsTitle from "../ContentsTitle";
import MachineDimensions from "../MachineDimensions";
import MachineVideo from "./MachineVideo";
import { Collapse } from "@mui/material";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import MachineImgBoxS from "./MachineImgBoxS";

const MachinInfoWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 0px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 50px 0;
`;

const MachineImgBox = styled.div`
  width: 50%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MachinImg = styled.div`
  width: 60%;
  height: 500px;
  background: url(${(props) => props.$url}) center no-repeat;
  background-size: contain;
`;
const MachinTextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 45px;
`;
const MachinTextModel = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;
const MachinTextTitle = styled.span`
  color: #1976d2;
  font-weight: 600;
  font-size: 35px;
  white-space: pre-line;
  line-height: 1.1;
  margin-bottom: 20px;
`;
const MachinTextSubTitle = styled.span`
  background-color: #ededed;
  padding: 5px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.1px;
`;
const MachinTextDes = styled.span`
  font-size: 16px;
  line-height: 1.5;
`;
const MachineFeatures = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 36px;
`;

const FeaturesIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 5px;
  padding: 5px;
`;

const FeaturesIcon = styled.img`
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
`;
const Contents = styled.h2`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  margin-top: 50px;
  position: relative;
`;
const InfoSection = styled.div`
  width: 100%;
`;
const ImgSection = styled.div`
  background: url(${(props) => props.$url}) no-repeat;
  background-size: contain;
  background-position: right;
  width: 30%;
  height: auto;
  opacity: 0.1;
  transform: rotate(-180deg) scale(0.8);
  margin-left: 5px;
  display: none;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ededed;
  width: 19%;
  margin: 10px;
  border-radius: 4px;
  img {
    height: 100px;
    margin-top: 20px;
    margin-bottom: 10px;
    object-fit: contain;
  }
`;

function MachineDetail({ info, blueImg, options }) {
  const [expendClicked, setExpendClicked] = useState(true);
  const showContent = (show) => {
    setExpendClicked(show);
  };
  return (
    <>
      <MachinInfoWrapper>
        <MachineImgBox>
          {/* <MachinImg $url={info?.img} /> */}
          <MachineImgBoxS src={info?.img} alt={info?.title} />
        </MachineImgBox>
        <Divider orientation="vertical" variant="middle" flexItem />

        <MachinTextBox>
          <MachinTextModel>{info?.model}</MachinTextModel>
          <MachinTextTitle>
            {info?.title.replace(
              /(Sanding|Bending|Tester|Punching|Prober|Caulking|Contact|Aging)/gi,
              "\n$1"
            )}
          </MachinTextTitle>
          <MachinTextSubTitle>{info?.subTitle}</MachinTextSubTitle>
          <MachinTextDes>{info?.des}</MachinTextDes>
          <MachineFeatures>
            {info?.features.map((item, index) => (
              <FeaturesIconBox key={index}>
                <FeaturesIcon src={item.img} />
                <span
                  style={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    width: "max-content",
                    textAlign: "center",
                    height: "20px",
                  }}
                >
                  {item.text.slice(0, 17) + `\n` + item.text.slice(17)}
                </span>
              </FeaturesIconBox>
            ))}
          </MachineFeatures>
        </MachinTextBox>
      </MachinInfoWrapper>
      <Contents>
        <InfoSection className="infoSection">
          <div className="dimensions" style={{ marginTop: "-50px" }}>
            <MachineDimensions data={info.spc} />
          </div>
          <div className="video">
            <MachineVideo url={info.video} />
          </div>
          {options && (
            <div className="options">
              <ContentsTitle title={"Sanding Jig"} onData={showContent} />
              <Collapse in={expendClicked}>
                <div style={{ display: "flex" }}>
                  {options.map((item, index) => (
                    <OptionWrapper key={index}>
                      <img src={item.img} alt={item.text} />
                      <span style={{ padding: "20px 0" }}>{item.text}</span>
                    </OptionWrapper>
                  ))}
                </div>
              </Collapse>
            </div>
          )}
        </InfoSection>
        {/* <ImgSection className="imgSection" $url={blueImg}></ImgSection> */}
      </Contents>
    </>
  );
}

export default MachineDetail;

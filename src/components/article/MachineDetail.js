import styled from "styled-components";
import ContentsTitle from "../ContentsTitle";
import MachineDimensions from "../MachineDimensions";
import MachineVideo from "./MachineVideo";

const MachinInfoWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 50px;
  margin-top: 100px;
  display: flex;
`;

const MachineImgBox = styled.div`
  width: 50%;
  max-width: 600px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ededed;
`;
const MachinImg = styled.div`
  width: 55%;
  height: 500px;
  background: url(${(props) => props.$url}) center no-repeat;
  background-size: contain;
`;
const MachinTextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ededed;
  padding: 45px;
  height: 500px;
`;
const MachinTextModel = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;
const MachinTextTitle = styled.span`
  color: #1976d2;
  font-weight: 500;
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
  font-weight: 600;
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
  margin-top: 30px;
`;

const FeaturesIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px 0px 0;
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
function MachineDetail({ info, blueImg }) {
  return (
    <>
      <MachinInfoWrapper>
        <MachineImgBox>
          <MachinImg $url={info?.img} />
        </MachineImgBox>
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
              <FeaturesIconBox>
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
          <div className="dimensions">
            <MachineDimensions data={info.spc} />
          </div>
          <div className="video">
            <MachineVideo url={info.video} />
          </div>
        </InfoSection>
        <ImgSection className="imgSection" $url={blueImg}></ImgSection>
      </Contents>
    </>
  );
}

export default MachineDetail;

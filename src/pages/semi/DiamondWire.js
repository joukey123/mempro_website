import styled from "styled-components";
import { useCategory } from "../../Hook/useCategory";
import { itemsDetail } from "../../data";
import Footer from "../../components/Footer";
import { useState } from "react";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;
const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  max-width: 1100px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
const Span = styled.span`
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.gold};
  border: 1px solid ${(props) => props.theme.colors.gold};
  border-radius: 15px;
`;
const Description = styled.p`
  margin-top: 20px;
  width: 65%;
`;
const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 50px;
`;

const DiagramImg = styled.img`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  object-fit: contain;
  object-position: center center;
  transform: scale(0.8);
`;
const Contents = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  background-color: red;
`;

const ContentsTitle = styled.div`
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 3px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
`;

const ImgSlider = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgSliderWrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0 20px;
`;
const ImgSliderBox = styled.img`
  max-width: 900px;
  width: 80%;
  height: 250px;
  object-fit: contain;
`;
const ImgSliderBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

const ApplicatonWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  background-color: tan;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  font-size: 14px;
  text-align: center;
  gap: 50px;
`;
const ApplicationImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;
function DiamondWire() {
  const sublink = "diamond";
  const { nation, title, description, images, contents } =
    itemsDetail[`${sublink}`];
  const [index, setIndex] = useState(0);
  const length = contents.sem.length;
  const handleImgSlider = (text) => {
    if (text === "prev") {
      setIndex((prev) => (prev === 0 ? (prev = length - 1) : prev - 1));
    } else if ((text = "next")) {
      setIndex((prev) => (prev === length - 1 ? (prev = 0) : prev + 1));
    }
  };
  return (
    <>
      <Wrapper>
        <TextWrapper style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>{title}</Title>
            <Span>{nation}</Span>
          </div>
          <Description>{description}</Description>
        </TextWrapper>
        <DiagramWpper>
          <DiagramImg src={images} />
        </DiagramWpper>
        <Contents>
          <ContentsTitle>
            <span>SEM</span>
          </ContentsTitle>
          <ImgSlider>
            <ImgSliderBtn onClick={() => handleImgSlider("prev")}>
              <i className="fa-solid fa-chevron-left"></i>
            </ImgSliderBtn>
            <ImgSliderWrapper>
              <ImgSliderBox src={contents.sem[index].img} />
              <span>{contents.sem[index].text}</span>
            </ImgSliderWrapper>
            <ImgSliderBtn onClick={() => handleImgSlider("next")}>
              <i className="fa-solid fa-chevron-right"></i>
            </ImgSliderBtn>
          </ImgSlider>

          <ContentsTitle>
            <span>Components</span>
          </ContentsTitle>
          <ApplicatonWrapper>
            {contents.applications.map((item) => (
              <div>
                <ApplicationImg src={item.img} />
                <div>{item.text}</div>
              </div>
            ))}
          </ApplicatonWrapper>
        </Contents>
      </Wrapper>

      <Footer />
    </>
  );
}

export default DiamondWire;

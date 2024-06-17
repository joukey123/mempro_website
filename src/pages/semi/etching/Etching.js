import styled from "styled-components";
import { itemsDetail } from "../../../data";
import Headline from "../../../components/article/Headline";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

const DiagramWpper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 50px;
  position: relative;
  overflow: hidden;
`;
const DiagramImg = styled.img`
  width: 100%;
  max-width: 1100px;
  height: 500px;
  object-fit: contain;
  object-position: center center;
  transform: scale(0.8);
  z-index: 99;
`;

function Etching() {
  const sublink = "etching";
  const { nation, title, description, images } = itemsDetail[`${sublink}`];
  return (
    <>
      <Wrapper>
        <Headline item={{ ...itemsDetail[`${sublink}`] }} />
        <DiagramWpper>
          <DiagramImg src={images.machine} />
          <DiagramImg src={images.step1} />
        </DiagramWpper>
      </Wrapper>
    </>
  );
}

export default Etching;

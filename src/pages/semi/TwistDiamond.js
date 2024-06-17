import styled from "styled-components";
import construction from "../../img/construction.svg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 40%;
  height: 40%;
  margin: 0 auto;
`;
function TwistDiamond() {
  return (
    <>
      <Wrapper>
        <Img src={construction} />
      </Wrapper>
    </>
  );
}

export default TwistDiamond;

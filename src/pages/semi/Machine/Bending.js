import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { machineDetail } from "../../../data";
import Machines from "../../../components/article/Machines";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

function Bending() {
  const sublink = "bending";
  const { contents } = machineDetail[`${sublink}`];
  const machinBtnArray = Object.values(contents).map(
    ({ title, model, img }) => ({
      title,
      model,
      img,
    })
  );

  return (
    <>
      <Wrapper>
        <Headline item={{ ...machineDetail[`${sublink}`] }} />
        <Machines machinBtnArray={machinBtnArray} />
      </Wrapper>
    </>
  );
}

export default Bending;

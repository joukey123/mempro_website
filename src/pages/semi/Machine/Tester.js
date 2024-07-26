import styled from "styled-components";
import Headline from "../../../components/article/Headline";
import { machineDetail } from "../../../data";
import Machines from "../../../components/article/Machines";
import MachineDetail from "../../../components/article/MachineDetail";
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

function Tester() {
  const sublink = "tester";
  const { contents } = machineDetail[`${sublink}`];
  const machinBtnArray = Object.values(contents).map(
    ({ num, title, model, img }) => ({
      num,
      title,
      model,
      img,
    })
  );
  const [model, setModel] = useState("");
  const info = contents[model];

  const selectModel = (item) => {
    setModel(item);
  };
  return (
    <>
      <Wrapper>
        <Headline item={{ ...machineDetail[`${sublink}`] }} />
        <Machines machinBtnArray={machinBtnArray} onModel={selectModel} />
        {info && <MachineDetail info={info} />}
      </Wrapper>
    </>
  );
}

export default Tester;

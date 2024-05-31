import styled from "styled-components";
import Header from "../../components/Header";

const Warpper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;
const TestBox = styled.div`
  width: 100%;
  height: 100%;
`;
function About() {
  return (
    <Warpper>
      <Header />
    </Warpper>
  );
}

export default About;

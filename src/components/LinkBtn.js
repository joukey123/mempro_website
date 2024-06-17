import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;

  a {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
  }
`;

const OverText = styled(motion.span)`
  position: absolute;
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  bottom: -25px;
  align-items: center;
  justify-content: center;
  padding: 2px;
  font-size: 0.8rem;
`;

function LinkBtn({ icon, link, text }) {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const handleMouseOn = () => {
    setIsMouseOn(true);
  };
  const handleMouseLeave = () => {
    setIsMouseOn(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <Button onMouseOver={handleMouseOn} onMouseLeave={handleMouseLeave}>
        <a href={link} target="_blank">
          {icon}
        </a>
      </Button>
      {isMouseOn && (
        <OverText
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          {text}
        </OverText>
      )}
    </div>
  );
}

export default LinkBtn;

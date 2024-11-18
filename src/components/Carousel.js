import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useRef, useState } from "react";
import { Collapse, useMediaQuery } from "@mui/material";
import ContentsTitle from "./ContentsTitle";

import { motion } from "framer-motion";
import styled from "styled-components";
import useAnimateOnInView from "../Hook/useAnimationOnInView";
import useTranslation from "../Hook/useTranslation";
const CarouselBox = styled(motion.div)``;
const MotionBox = motion(Box);
function Carousel({ contents }) {
  const images = contents.sem;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [expendClicked, setExpendClicked] = useState(true);

  const {
    ref: childRef,
    controls: childControls,
    animateVariants: childVariants,
  } = useAnimateOnInView(0, 0.3);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setActiveStep((prev) => (prev + 1) % maxSteps),
  //     5000
  //   );

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { getText } = useTranslation();

  return (
    <CarouselBox>
      <ContentsTitle title={"SEM"} onData={showContent} />
      <Collapse in={expendClicked}>
        <MotionBox
          sx={{
            maxWidth: 1200,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          ref={childRef}
          initial="hidden"
          animate={childControls}
          variants={childVariants(0.5)}
        >
          <Box
            component="img"
            sx={{
              width: 1200,
              height: isMobile ? 150 : 300,
              display: "block",
              maxWidth: 1200,
              overflow: "hidden",
              width: "100%",
              objectFit: "cover",
            }}
            src={images[activeStep].img}
            alt={images[activeStep].text}
          />
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              bgcolor: "#F5F5F5",
              width: "100%",
              marginBottom: 2,
              borderTop: ".5px solid black",
            }}
          >
            <Typography sx={{ letterSpacing: "-.2px" }}>
              {getText(images[activeStep].text)}
            </Typography>
          </Paper>
          <MobileStepper
            sx={{ width: "100%", maxWidth: 1000 }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </MotionBox>
      </Collapse>
    </CarouselBox>
  );
}
export default Carousel;

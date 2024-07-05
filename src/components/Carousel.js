import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import ContentsTitle from "./ContentsTitle";

function Carousel({ contents }) {
  const images = contents.sem;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [expendClicked, setExpendClicked] = useState(true);

  const showContent = (show) => {
    setExpendClicked(show);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setActiveStep((prev) => (prev + 1) % maxSteps),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <ContentsTitle title={"SEM"} onData={showContent} />
      <Collapse in={expendClicked}>
        <Box
          sx={{
            maxWidth: 1100,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            sx={{
              width: 1200,
              height: 300,
              display: "block",
              maxWidth: 1200,
              overflow: "hidden",
              width: "100%",
              objectFit: "cover",
              bgcolor: "red",
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
              pl: 2,
              bgcolor: "#F5F5F5",
              width: "100%",
              marginBottom: 2,
              borderTop: ".5px solid black",
            }}
          >
            <Typography>{images[activeStep].text}</Typography>
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
        </Box>
      </Collapse>
    </div>
  );
}
export default Carousel;

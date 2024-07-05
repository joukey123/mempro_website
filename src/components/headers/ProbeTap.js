import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function ProbeTap() {
  const [value, setValue] = useState("one");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "red",
        maxWidth: "1100px",
        margin: "0 auto",
        marginBottom: "50px",
      }}
    >
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}

export default ProbeTap;

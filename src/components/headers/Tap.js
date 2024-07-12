import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function ProbeTap({ data, handleClickProbe, sublink }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1150px",
        margin: "0 auto",
        marginBottom: "50px",
      }}
    >
      <Tabs
        value={sublink}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        {data.map((item, index) =>
          item !== "probe" ? (
            <Tab
              value={item}
              label={item}
              onClick={() => handleClickProbe(item)}
            ></Tab>
          ) : (
            <Tab
              value={item}
              label={item}
              onClick={() => handleClickProbe(item)}
            />
          )
        )}
      </Tabs>
    </Box>
  );
}

export default ProbeTap;

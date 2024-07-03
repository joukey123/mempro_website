import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const basicTheme = {
  colors: {
    black: "rgba(0,0,0,0.8)",
    blue: "#0068B7",
    lightBlue: "#44A8F4",
    gray: "#B7B7B7",
    stroke: "#D3D3D3",
    white: "#F5F5F5",
    box: "rgb(66 66 69/70%);",
    gold: "#EE7D19",
  },
};
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0068B7", // 기본 색상 파랑
    },
    secondary: {
      main: "#dc004e", // 보조 색상 빨강
    },
    background: {
      paper: "#f5f5f5", // 테이블 배경 색상 하양
    },
    text: {
      primary: "#333", // 기본 텍스트 색상
    },
    table: {
      main: "linear-gradient(to right, #2467a2, #253b78)",
    },
  },

  colors: {
    black: "rgba(0,0,0,0.8)",
    blue: "#0068B7",
    lightBlue: "#44A8F4",
    gray: "#B7B7B7",
    stroke: "#D3D3D3",
    white: "#F5F5F5",
    box: "rgb(66 66 69/70%);",
    gold: "#EE7D19",
  },
});

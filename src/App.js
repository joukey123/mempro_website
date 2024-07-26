import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { basicTheme, theme, themeui } from "./style/theme";
import Router from "./Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

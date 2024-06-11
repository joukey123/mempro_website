import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { basicTheme } from "./style/theme";
import Router from "./Router";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={basicTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

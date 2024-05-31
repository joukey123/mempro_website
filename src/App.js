import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { basicTheme } from "./style/theme";
import Router from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

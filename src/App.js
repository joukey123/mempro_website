import { ThemeProvider } from "styled-components";
import Main from "./pages/home/Main";
import GlobalStyle from "./style/GlobalStyle";
import { basicTheme } from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

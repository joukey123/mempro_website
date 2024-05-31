import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import About from "./pages/about/About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

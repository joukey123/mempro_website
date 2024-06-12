import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import About from "./pages/about/About";
import Semi from "./pages/semi/Semi";
import { items } from "./data";
import DiamondWire from "./pages/semi/DiamondWire";
import TwistDiamond from "./pages/semi/TwistDiamondWire";
import Cantilever from "./pages/semi/Cantilever/Cantilever";
import Etching from "./pages/semi/etching/Etching";
import Cprobe from "./pages/semi/Cantilever/Cprobe";
import Tube from "./pages/semi/Cantilever/Tube";
import Stiffener from "./pages/semi/Cantilever/Stiffener";
import Vertical from "./pages/semi/Vertical/Vertical";
import Vprobe from "./pages/semi/Vertical/Vprobe";
import Vstiffener from "./pages/semi/Vertical/Vstiffener";
import Ceramic from "./pages/semi/Vertical/Ceramic";
import Office from "./pages/about/Office";
import Ecatalog from "./pages/about/Ecatalog";
import Brand from "./pages/about/Brand";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Navigate to="company" />} />
          <Route path="company" element={<Brand />} />
          <Route path="office" element={<Office />} />
          <Route path="e-catalog" element={<Ecatalog />} />
        </Route>

        {items.map((item) =>
          item.subcategories ? (
            item.subcategories.map((subcategory) =>
              subcategory.subcategory.map((sub) => (
                <Route
                  key={`${item.link}-${subcategory.diagram}-${sub.link}`}
                  // path={`/${item.link}/${sub.link}`}
                  path={`/${item.link}/${sub.link}`}
                  element={<DynamicComponent link={sub.link} />}
                />
              ))
            )
          ) : (
            <Route
              key={item.link}
              path={`/${item.link}`}
              element={<DynamicComponent link={item.link} />}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

const componentMap = {
  main: Main,
  about: About,
  semi: Semi,
  diamond: DiamondWire,
  twistdiamond: TwistDiamond,
  etching: Etching,
  cantilever: Cantilever,
  cprobe: Cprobe,
  stiffener: Stiffener,
  tube: Tube,
  vertical: Vertical,
  vprobe: Vprobe,
  vstiffener: Vstiffener,
  ceramic: Ceramic,

  // 나머지 컴포넌트도 여기에 추가...
};

function DynamicComponent({ link }) {
  const Component = componentMap[link] || Main; // 기본값으로 Main 설정
  return <Component />;
}

export default Router;

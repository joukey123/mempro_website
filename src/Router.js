import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import About from "./pages/about/About";
import Semi from "./pages/semi/Semi";
import DiamondWire from "./pages/semi/DiamondWire";
import { items } from "./data";

function Router() {
  console.log(
    items.map((item) =>
      item.subcategories
        ? item.subcategories.map((array) => array.subcategory)
        : null
    )
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        {items.map((item) =>
          item.subcategories ? (
            item.subcategories.map((subcategory) =>
              subcategory.subcategory.map((sub) => (
                <Route
                  key={`${item.link}-${subcategory.diagram}-${sub.link}`}
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

  // 나머지 컴포넌트도 여기에 추가...
};

function DynamicComponent({ link }) {
  const Component = componentMap[link] || Main; // 기본값으로 Main 설정
  return <Component />;
}

export default Router;

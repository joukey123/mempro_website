import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import About from "./pages/about/About";
import Semi from "./pages/semi/Semi";
import { items } from "./data";
import DiamondWire from "./pages/semi/DiamondWire";
import TwistDiamond from "./pages/semi/TwistDiamond";
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
import Probe from "./pages/semi/Probe";
import Contact from "./pages/semi/Contact";
import Sanding from "./pages/semi/Machine/Sanding";
import Bending from "./pages/semi/Machine/Bending";
import Manual from "./pages/semi/Machine/Manual";
import Punching from "./pages/semi/Machine/Punching";
import Tester from "./pages/semi/Machine/Tester";
import Pogo from "./pages/semi/Machine/Pogo";
import Rubber from "./pages/semi/Machine/Rubber";
import Machine from "./pages/semi/Machine";

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

        <Route path="/semi/parts" element={<Semi />}>
          <Route index element={<Navigate to="diamond" />} />
          <Route path="diamond" element={<DiamondWire />} />
          <Route path="twistdiamond" element={<TwistDiamond />} />
          <Route path="etching" element={<Etching />} />
          <Route path="cantilever" element={<Cantilever />} />
          <Route path="cprobe" element={<Cprobe />} />
          <Route path="stiffener" element={<Stiffener />} />
          <Route path="tube" element={<Tube />} />
          <Route path="vertical" element={<Vertical />} />
          <Route path="vprobe" element={<Vprobe />} />
          <Route path="vstiffener" element={<Vstiffener />} />
          <Route path="ceramic" element={<Ceramic />} />
        </Route>
        <Route path="/semi/machine" element={<Machine />}>
          <Route index element={<Navigate to="sanding" />} />
          <Route path="sanding" element={<Sanding />} />
          <Route path="bending" element={<Bending />} />
          <Route path="manual" element={<Manual />} />
          <Route path="punching" element={<Punching />} />
          <Route path="tester" element={<Tester />} />
          <Route path="pogo" element={<Pogo />} />
          <Route path="rubber" element={<Rubber />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

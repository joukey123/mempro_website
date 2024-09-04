import Model from "./Model";
import canti1 from "../../../src/img/stiffener/canti1.gltf";
import { useMediaQuery } from "@mui/material";

function Canti1Model() {
  return (
    <>
      <Model
        path={canti1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Canti1Model;

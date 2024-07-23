import Model from "./Model";
import cis_model from "../../../src/img/stiffener/cis.gltf";
import cis_model_2 from "../../../src/img/stiffener/cis_2.gltf";
function Cis() {
  return (
    <>
      <Model
        path={cis_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
      <Model
        path={cis_model_2}
        position={[0.0, 0.0, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Cis;

import Model from "./Model";
import vertical3_model from "../../../src/img/stiffener/vertical3_model.gltf";

function Vertical3Model() {
  return (
    <>
      <Model
        path={vertical3_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Vertical3Model;

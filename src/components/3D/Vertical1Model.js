import Model from "./Model";
import vertical1_model from "../../../src/img/stiffener/vertical1_model.gltf";

function Vertical1Model() {
  return (
    <>
      <Model
        path={vertical1_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Vertical1Model;

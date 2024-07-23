import Model from "./Model";
import vertical2_model from "../../../src/img/stiffener/vertical2_model.gltf";

function Vertical2Model() {
  return (
    <>
      <Model
        path={vertical2_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Vertical2Model;

import Model from "./Model";
import vertical4_model from "../../../src/img/stiffener/vertical4_model.gltf";

function Vertical4Model() {
  return (
    <>
      <Model
        path={vertical4_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Vertical4Model;

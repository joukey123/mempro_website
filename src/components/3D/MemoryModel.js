import Model from "./Model";
import memory_model from "../../../src/img/stiffener/memory_model.gltf";

function MemoryModel() {
  return (
    <>
      <Model
        path={memory_model}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default MemoryModel;

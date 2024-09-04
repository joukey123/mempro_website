import Model from "./Model";
import shape5_1 from "../../../src/img/ceramic/shape5_1.gltf";
import shape5_2 from "../../../src/img/ceramic/shape5_2.gltf";

function Shape5Model() {
  return (
    <>
      <Model
        path={shape5_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"#5B5360"}
      />
      <Model
        path={shape5_2}
        position={[0.0, 0, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.3, 0.3, 0.3]}
        mapping={"darkgray"}
      />
    </>
  );
}

export default Shape5Model;

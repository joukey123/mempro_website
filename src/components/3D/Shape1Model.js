import Model from "./Model";
import shape1_1 from "../../../src/img/ceramic/shape1_1.gltf";
import shape1_2 from "../../../src/img/ceramic/shape1_2.gltf";

function Shape1Model() {
  return (
    <>
      <Model
        path={shape1_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />
      <Model
        path={shape1_2}
        position={[0.0, 0.0, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Shape1Model;

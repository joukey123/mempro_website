import Model from "./Model";
import shape3_1 from "../../../src/img/ceramic/shape3_1.gltf";
import shape3_2 from "../../../src/img/ceramic/shape3_2.gltf";

function Shape3Model() {
  return (
    <>
      <Model
        path={shape3_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />
      <Model
        path={shape3_2}
        position={[0.0, 0.03, 0.0015]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.35, 0.35, 0.35]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Shape3Model;

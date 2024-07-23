import Model from "./Model";
import shape4_1 from "../../../src/img/ceramic/shape4_1.gltf";
import shape4_2 from "../../../src/img/ceramic/shape4_2.gltf";
import shape4_3 from "../../../src/img/ceramic/shape4_3.gltf";
import shape4_4 from "../../../src/img/ceramic/shape4_4.gltf";

function Shape4Model() {
  return (
    <>
      <Model
        path={shape4_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.7, 0.7, 0.7]}
        mapping={"#989182"}
      />
      <Model
        path={shape4_2}
        position={[0.0, 0.02, 0.03]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.71, 0.71, 0.71]}
        mapping={"#E2DABD"}
      />
      <Model
        path={shape4_3}
        position={[0.0, 0.02, 0.04]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.7, 0.7, 0.7]}
        mapping={"darkgray"}
      />
      <Model
        path={shape4_4}
        position={[0.0, 0.025, 0.05]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.3, 0.3, 0.3]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Shape4Model;

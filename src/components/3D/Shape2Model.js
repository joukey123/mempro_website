import Model from "./Model";
import shape2_1 from "../../../src/img/ceramic/shape2_1.gltf";
import shape2_2 from "../../../src/img/ceramic/shape2_2.gltf";
import shape2_3 from "../../../src/img/ceramic/shape2_3.gltf";

function Shape2Model() {
  return (
    <>
      <Model
        path={shape2_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />
      <Model
        path={shape2_2}
        position={[0.0, 0.0, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"dimgray"}
      />
      <Model
        path={shape2_3}
        position={[0.0, 0.0, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Shape2Model;

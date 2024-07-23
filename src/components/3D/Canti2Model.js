import Model from "./Model";
import canti2_1 from "../../../src/img/stiffener/canti2_1.gltf";
import canti2_2 from "../../../src/img/stiffener/canti2_2.gltf";
import canti2_3 from "../../../src/img/stiffener/canti2_3.gltf";
import canti2_4 from "../../../src/img/stiffener/canti2_4.gltf";
import canti2_5 from "../../../src/img/stiffener/canti2_5.gltf";
import canti2_6 from "../../../src/img/stiffener/canti2_6.gltf";
import canti2_7 from "../../../src/img/stiffener/canti2_7.gltf";

function Canti2Model() {
  return (
    <>
      <Model
        path={canti2_1}
        position={[0.0, 0.0, 0.0]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
      />
      <Model
        path={canti2_2}
        position={[0, 0.109, -0.04]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
      <Model
        path={canti2_3}
        position={[-0.09, 0.109, -0.04]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
      <Model
        path={canti2_4}
        position={[0.09, 0.109, -0.04]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
      <Model
        path={canti2_5}
        position={[0, -0.091, 0.07]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
      <Model
        path={canti2_6}
        position={[-0.09, -0.091, 0.07]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
      <Model
        path={canti2_7}
        position={[0.09, -0.091, 0.07]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"dimgray"}
      />
    </>
  );
}

export default Canti2Model;

import Model from "./Model";

import high1 from "../../../src/img/stiffener/hiigh1.gltf";
import high2 from "../../../src/img/stiffener/hiigh2.gltf";
import high3 from "../../../src/img/stiffener/hiigh3.gltf";
import high4 from "../../../src/img/stiffener/hiigh4.gltf";
import high5 from "../../../src/img/stiffener/hiigh5.gltf";
import high6 from "../../../src/img/stiffener/hiigh6.gltf";
import high7 from "../../../src/img/stiffener/hiigh7.gltf";
import high8 from "../../../src/img/stiffener/hiigh8.gltf";

function HiFix() {
  return (
    <>
      <Model
        path={high1}
        position={[0.01, 0.01, 0.01]}
        rotation={[-0.5, 0.0, 0]}
        mapping={"darkgray"}
        scale={[0.8, 0.8, 0.8]}
      />
      <Model
        path={high2}
        position={[-0.22, 0.18, 0.02]}
        rotation={[-5.3, 0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />

      <Model
        path={high3}
        position={[-0.22, -0.055, 0.15]}
        rotation={[-5.3, 0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />

      <Model
        path={high4}
        position={[0.25, -0.055, 0.15]}
        rotation={[-5.3, 0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />
      <Model
        path={high5}
        position={[0.25, 0.18, 0.02]}
        rotation={[-5.3, 0, 0]}
        scale={[0.6, 0.6, 0.6]}
        mapping={"darkgray"}
      />

      <Model
        path={high6}
        position={[0.02, 0.05, 0.05]}
        rotation={[-0.5, 0, 0]}
        scale={[0.85, 0.85, 0.85]}
        mapping={"dimgray"}
      />
      <Model
        path={high7}
        position={[0.02, 0.06, 0.076]}
        rotation={[-0.5, 0, 0]}
        scale={[0.7, 0.7, 0.7]}
        mapping={"darkgray"}
      />
      <Model
        path={high8}
        position={[0.02, 0.07, 0.08]}
        rotation={[-0.5, 0, -0.15]}
        scale={[0.7, 0.7, 0.7]}
        color={"dimgray"}
      />
    </>
  );
}

export default HiFix;

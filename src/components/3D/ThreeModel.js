import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Model from "./Model";
import canti1 from "../../../src/img/stiffener/canti1.gltf";

function ThreeModel({ types, number, type }) {
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "1000px",
        }}
        camera={{ position: [0, 2, 3], fov: 15 }}
      >
        {/* 기본 조명 */}
        <ambientLight intensity={0.5} />

        <directionalLight position={[0, 2, 5]} intensity={1.0} castShadow />
        <pointLight position={[0, 2, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          {/* {types[type][number].model.length > 1 ? (
            types[type][number].model.map((item, index) => (
              <Model
                key={index}
                path={item}
                position={[0.01, 0.01, 0.01]}
                rotation={[-0.5, 0.0, 0]}
              />
            ))
          ) : (
            <Model
              path={types[type][number].model[number]}
              position={[0.01, 0.01, 0.01]}
              rotation={[-0.5, 0.0, 0]}
            />
          )} */}
          {types[type][number]?.model}
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          maxDistance={3}
          minDistance={1}
          maxPolarAngle={1} // 상하 회전 최대 각도
          minPolarAngle={0} // 상하 회전 최소 각도
          maxAzimuthAngle={Math.PI / 6} // 좌우 회전 최대 각도
          minAzimuthAngle={-Math.PI / 6} // 좌우 회전 최소 각도
        />
      </Canvas>
    </>
  );
}

export default ThreeModel;

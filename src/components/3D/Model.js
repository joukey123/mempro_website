import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Model = ({
  path,
  position,
  rotation,
  onPointerOver,
  onPointerOut,
  scale,
  mapping,
}) => {
  const gltf = useGLTF(path, true);
  const modelRef = useRef();

  useEffect(() => {
    if (gltf.scene) {
      // 모델을 참조하여 위치 설정
      modelRef.current.position.set(...position);
      modelRef.current.rotation.set(...rotation);
      if (scale) {
        modelRef.current.scale.set(...scale);
      }
      // 모델에 금속 재질 적용

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: mapping,
            roughness: 0.5,
            metalness: 1.0,
          });
        }
      });

      // 모델을 모델 참조에 추가
      modelRef.current.add(gltf.scene);
    }
  }, [gltf, position, rotation, scale]);

  return <primitive ref={modelRef} object={new THREE.Object3D()} />;
};

export default Model;

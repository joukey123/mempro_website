import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// 별의 위치를 생성하는 함수
const generateStars = (count) => {
  const positions = new Float32Array(count * 10);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30; // X 위치
    positions[i * 3 + 1] = Math.random() * 30; // Y 위치
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z 위치
  }

  return positions;
};

const FallingStars = ({ count }) => {
  const points = useRef();
  const positions = useMemo(() => generateStars(count), [count]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.002; // Y축을 기준으로 별을 천천히 회전

      for (let i = 0; i < count; i++) {
        const index = i * 3 + 1;
        positions[index] -= 0.01; // 별을 아래로 이동
        if (positions[index] < -10) positions[index] = 10; // 별이 화면 아래로 사라지면 위로 이동
      }
      points.current.geometry.attributes.position.needsUpdate = true; // 위치 업데이트
    }
  });

  return (
    <Points ref={points} positions={positions}>
      <PointMaterial size={0.01} color="#ffffff" />
    </Points>
  );
};

export default FallingStars;

import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Cloud, Clouds, Sky as SkyFromDrei } from '@react-three/drei';
import { useRef } from 'react';

export default function Sky() {
  const cloudsRef = useRef();

  useFrame((state) => {
    cloudsRef.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    cloudsRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
  });

  return (
    <>
      <SkyFromDrei />
      <group ref={cloudsRef}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud color="#eed0d0" seed={2} position={[20, 0, 0]} volume={25} />
          <Cloud
            color="#ccf2ff"
            seed={3}
            position={[-15, 0, 0]}
            bounds={[10, 2, 2]}
          />
          <Cloud color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud color="#c0c0dd" seed={5} position={[0, 0, 12]} />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
}

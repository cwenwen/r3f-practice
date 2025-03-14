import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Sky from './Sky.jsx';
import { useEffect } from 'react';

export default function App() {
  const AdjustCamera = () => {
    const { camera } = useThree();

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          camera.position.set(0, 0, 20);
        } else {
          camera.position.set(0, 0, 15);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [camera]);

    return null;
  };

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight position={[2, 2, 2]} />
        <Sky />
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight
          position={[0, 40, 0]}
          decay={0}
          distance={45}
          penumbra={1}
          intensity={100}
        />
        <spotLight
          position={[-20, 0, 10]}
          color="red"
          angle={0.15}
          decay={0}
          penumbra={-1}
          intensity={30}
        />
        <spotLight
          position={[20, -10, 10]}
          color="red"
          angle={0.2}
          decay={0}
          penumbra={-1}
          intensity={20}
        />
        <CameraControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <AdjustCamera />
      </Canvas>
    </div>
  );
}

import { useRef, Suspense } from 'react';
import {
  Instances,
  Instance,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const particles = Array.from({ length: 30 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 1),
  xFactor: MathUtils.randFloatSpread(80),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40),
}));

const App = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ fov: 75, position: [0, 0, 60], near: 10, far: 150 }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={0.8} />
      <Cubes />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -35, 0]}
        opacity={0.25}
        width={100}
        height={100}
        blur={2}
        far={50}
      />
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default App;

const Cubes = () => {
  const ref = useRef();

  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta,
      )),
  );

  return (
    <Instances
      limit={particles.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 10, 0]}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial roughness={1} color="#f0f0f0" />
      {particles.map((data, i) => (
        <Cube key={i} {...data} />
      ))}
    </Instances>
  );
};

const Cube = ({ factor, speed, xFactor, yFactor, zFactor }) => {
  const ref = useRef();

  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2);
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5));
    ref.current.position.set(
      Math.cos(t) +
        Math.sin(t * 1) / 10 +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 10,
    );
  });

  return <Instance ref={ref} />;
};

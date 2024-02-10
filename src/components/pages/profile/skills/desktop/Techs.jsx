import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
/*   Preload, */
  useTexture,
} from "@react-three/drei";


const Techs = (props) => {
  const [decal] = useTexture([props.imgUrl]); 

  return (
    <Float style={{position: 'relative', left: '-10em'}} speed={1.75} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={0.95} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#0a0f1b'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.95}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon , name }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 3]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
        <Techs imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas; 

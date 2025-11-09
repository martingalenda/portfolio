import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from 'three'

const Logo = () => {
  const { scene } = useGLTF("./logo/mglogo.glb")

  return (
    <primitive object={scene} scale={[22, 53, 22]} position-y={0} rotation-z={Math.PI / 1} rotation-x={Math.PI / 2} />
  )
}

const LogoMG = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
        <directionalLight position={[-20, 40, 350]} intensity={1.3} color={'#A7C8EC'} />
        <directionalLight position={[20, -40, -350]} intensity={1.3} color={'#A7C8EC'} />

        <directionalLight position={[-15, 30, 175]} intensity={3.9} color={'#A7C8EC'} />
        <directionalLight position={[15, -30, -175]} intensity={3.9} color={'#A7C8EC'} />

        <directionalLight position={[-10, 20, 0]} intensity={3.5} color={'#A7C8EC'} />
        <directionalLight position={[10, -20, 0]} intensity={3.5} color={'#A7C8EC'} />

        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
        <Logo />
    </Canvas>
  )
}

export default LogoMG

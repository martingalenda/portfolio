import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from 'three'

const Logo = () => {
  const { scene } = useGLTF("./card/mg3d.glb")
  const gradientTexture = useLoader(THREE.TextureLoader, "./card/gradient.png")

  const clonedScene = scene.clone();

  clonedScene.traverse((child) => {
    if (child.isMesh) {
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => {
            material.map = gradientTexture;
            material.needsUpdate = true;
          });
        } else {
          child.material.map = gradientTexture;
          child.material.needsUpdate = true;
        }
      } else {
        child.material = new THREE.MeshStandardMaterial({ map: gradientTexture });
      }
    }
  });

  return (
    <primitive object={clonedScene} scale={[33, 53, 33]} position-y={0} rotation-z={Math.PI / 2} rotation-x={Math.PI / 2} />
  )
}

const LogoMG = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 0, 0]} intensity={0.9} castShadow />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Logo />
    </Canvas>
  )
}

export default LogoMG

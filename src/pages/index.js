import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Rotate from "react-reveal/Rotate"
import Slide from "react-reveal/Slide"
import ScrollAnimation from 'react-animate-on-scroll'
import ReactRotatingText from 'react-rotating-text'
import Wave from "react-wavify"
import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { EffectComposer, SSAO } from 'react-postprocessing'
import * as THREE from 'three'


function Swarm({ count, mouse }) {
  const mesh = useRef()
  const [dummy] = useState(() => new THREE.Object3D())

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -20 + Math.random() * 40
      const yFactor = -20 + Math.random() * 40
      const zFactor = -20 + Math.random() * 40
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 5)
      particle.mx += (state.mouse.x * state.viewport.width - particle.mx) * 0.02
      particle.my += (state.mouse.y * state.viewport.height - particle.my) * 0.02
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]} castShadow receiveShadow>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
      </instancedMesh>
    </>
  )
}

const textArray = ['программный инженер', 'инженер данных', 'бизнес-аналитик', 'аналитик данных']
const Home = () => (
  <Layout>
    <div style = {{ paddingTop: '30px', backgroundColor: 'white'}}>
      <Wave fill="url(#gradient)"  options={{
          height: 35,
          amplitude: 25,
          speed: 0.25,
          points: 3
        }}>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#000428" />
      <stop offset="90%" stopColor="#00006f" />
    </linearGradient>
  </defs>
</Wave>
  </div>
  <div className = "Wave1"></div>
    <div className = "HomePage">
    <SEO title="Главная" />
    
    <Slide left cascade>
    <div style={{marginLeft: '20px'}}>
          <h1>Привет!</h1>
          <h2>Меня зовут Денис</h2>
          <h2>И я <ReactRotatingText items={textArray} /></h2>
    <p>Добро пожаловать на сайт</p>
    <p>Now go build something great.</p>
    </div>
    </Slide>
    <div style={{ maxWidth: `900px`, margin: '0 auto', height: '900px', backgroundColor: '#00006f'}}>
    <Canvas
      shadowMap
      gl={{ alpha: false, antialias: false }}
      camera={{ fov: 75, position: [0, 0, 70], near: 10, far: 150 }}
      onCreated={(state) => state.gl.setClearColor('#00006f')}>
      <ambientLight intensity={1.5} />
      <pointLight position={[100, 100, 100]} intensity={2} castShadow />
      <pointLight position={[-100, -100, -100]} intensity={5} color="red" />
      <Swarm count={10} />
      <EffectComposer multisampling={0}>
        <SSAO samples={31} radius={20} intensity={40} luminanceInfluence={0.1} color="black" />
      </EffectComposer>
    </Canvas>
    </div>
    <div style={{ maxWidth: `300px`, margin: '0 auto'}}>
      <Image />
    </div>
    
    <Rotate bottom right cascade>
  Some Text
</Rotate >
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
<Slide left>
  <h1>
    animateOut
  </h1>
</Slide>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </div>
  </Layout>
  
)


export default Home

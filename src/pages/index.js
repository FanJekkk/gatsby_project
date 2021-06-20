import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactRotatingText from 'react-rotating-text'
import React, { useRef, useState }  from 'react'
import Scramble from 'react-scramble'
import { Canvas, useRender, useFrame } from 'react-three-fiber';

import Preloader from "../components/preloader"
import LottieLoader from 'react-lottie-loader'
import data from '../components/animation/data.json'
import { CSSTransition } from "react-transition-group"


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [2, 2, 2]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}
const textArray = ['Инженер данных','Бизнес-аналитик', 'Разработчик','Аналитик данных']
const Home = () => (
  <Layout>
    <Preloader/>
   
     <div className = "HomePage container-lg">
      <div className="row">
    <SEO title="Главная" />
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
      <div className="col-lg-4 col-md-4 col-sm-4">
    <div>
          <h3 className="NameSpace"><Scramble
        autoStart
        text="Денис Тепляков"
        steps={[
          {
            roll: 15,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'random',
          },
        ]}
      /></h3><span className ="intro__title-line intro__title-line--entered mb-3"></span>
          
          <h2><ReactRotatingText items={textArray} /></h2>
    </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 p-4">
    <div className= "p-5" maxwidth= "900px" maxheight = "900px">
      <LottieLoader animationData={data} />
    </div>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2">
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    
    </div>
    </div>
    </div>
  </Layout>
  
)


export default Home

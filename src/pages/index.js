import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactRotatingText from 'react-rotating-text'
import React, { useRef, useState }  from 'react'
import Scramble from 'react-scramble'
import { Canvas, useRender, useFrame } from 'react-three-fiber';

import Preloader from "../components/preloader"


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
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2">
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    
    <svg
        id="hello"
        width="300px"
        height="200px"
        viewBox="-5 0 291 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.25 0.25C34.61 0.25 33.125 1.735 33.125 4.375V37.375C33.125 40.015 31.64 41.5 29 41.5H20.75C18.11 41.5 16.625 40.015 16.625 37.375V4.375C16.625 1.735 15.14 0.25 12.5 0.25H4.25C1.61 0.25 0.125 1.735 0.125 4.375V86.875C0.125 89.515 1.61 91 4.25 91H12.5C15.14 91 16.625 89.515 16.625 86.875V62.125C16.625 59.485 18.11 58 20.75 58H29C31.64 58 33.125 59.485 33.125 62.125V86.875C33.125 89.515 34.61 91 37.25 91H45.5C48.14 91 49.625 89.515 49.625 86.875V4.375C49.625 1.735 48.14 0.25 45.5 0.25H37.25Z"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M103.186 16.75C105.826 16.75 107.311 15.265 107.311 12.625V4.375C107.311 1.735 105.826 0.25 103.186 0.25H74.3105C63.5855 0.25 57.8105 6.025 57.8105 16.75V74.5C57.8105 85.225 63.5855 91 74.3105 91H103.186C105.826 91 107.311 89.515 107.311 86.875V78.625C107.311 75.985 105.826 74.5 103.186 74.5H78.4355C75.7955 74.5 74.3105 73.015 74.3105 70.375V62.125C74.3105 59.485 75.7955 58 78.4355 58H103.186C105.826 58 107.311 56.515 107.311 53.875V45.625C107.311 42.985 105.826 41.5 103.186 41.5H78.4355C75.7955 41.5 74.3105 40.015 74.3105 37.375V20.875C74.3105 18.235 75.7955 16.75 78.4355 16.75H103.186Z"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M136.121 74.5C133.481 74.5 131.996 73.015 131.996 70.375V4.375C131.996 1.735 130.511 0.25 127.871 0.25H119.621C116.981 0.25 115.496 1.735 115.496 4.375V74.5C115.496 85.225 121.271 91 131.996 91H164.996C167.636 91 169.121 89.515 169.121 86.875V78.625C169.121 75.985 167.636 74.5 164.996 74.5H136.121Z"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M193.807 74.5C191.167 74.5 189.682 73.015 189.682 70.375V4.375C189.682 1.735 188.197 0.25 185.557 0.25H177.307C174.667 0.25 173.182 1.735 173.182 4.375V74.5C173.182 85.225 178.957 91 189.682 91H222.682C225.322 91 226.807 89.515 226.807 86.875V78.625C226.807 75.985 225.322 74.5 222.682 74.5H193.807Z"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M230.867 74.5C230.867 85.225 236.642 91 247.367 91H263.867C274.592 91 280.367 85.225 280.367 74.5V16.75C280.367 6.025 274.592 0.25 263.867 0.25H247.367C236.642 0.25 230.867 6.025 230.867 16.75V74.5ZM259.742 16.585C262.382 16.585 263.867 18.07 263.867 20.71V70.375C263.867 73.015 262.382 74.5 259.742 74.5H251.492C248.852 74.5 247.367 73.015 247.367 70.375V20.71C247.367 18.07 248.852 16.585 251.492 16.585H259.742Z"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
  
      <p>Привет! Меня зовут Денис и я инженер данных .</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3">
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>

    <p>Now go build something great.</p>
    <p>Now go build something great.</p>

    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    <p>Now go build something great.</p>

    <p>Now go build something great.</p>
    <p>Now go build something great.</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    </div>
    </div>
  </Layout>
  
)


export default Home

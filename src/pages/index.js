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
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { CSSTransition } from "react-transition-group"
import video from "../assets/about1080p.mp4"

const textArray = ['Инженер данных','Бизнес-аналитик','Менеджер IT-проектов','Разработчик','Аналитик данных']
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
    <div className="col-lg-4 col-md-4 col-sm-4">
    <div className= "p-5" maxwidth= "800px" maxheight = "800px">
     
    </div>
    </div>
    <div className="col-lg-5 col-md-5 col-sm-5"></div>
    <div className="col-lg-2 col-md-2 col-sm-2 align-items-center text-center"> 
      <AniLink paintDrip to="/about" hex="#33FF9C" className = "NavItem"><button class="btn btn-success">Далее</button></AniLink></div>

    <div className="col-lg-5 col-md-5 col-sm-5 mb-4"></div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    </div>
    </div>
  </Layout>
  
)


export default Home

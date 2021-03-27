import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slide from "react-reveal/Slide"
import ReactRotatingText from 'react-rotating-text'
import React from 'react'
import Scramble from 'react-scramble'



const textArray = ['программный инженер', 'инженер данных', 'бизнес-аналитик', 'аналитик данных']
const Home = () => (
  <Layout>
    <div className = "HomePage container-lg">
      <div className="row">
    <SEO title="Главная" />
      <div className="col-lg-6 col-md-6 col-sm-6">
    <Slide left cascade>
    <div>
          <h1><Scramble
        autoStart
        text="Привет!"
        steps={[
          {
            roll: 40,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      /></h1>
          <h2><Scramble
        autoStart
        text="Меня зовут Денис"
        steps={[
          {
            roll: 40,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      /></h2>
          <h2>Я <ReactRotatingText items={textArray} /></h2>
    <p>Добро пожаловать на сайт</p>
    <p>Now go build something great.</p>
    </div>
    </Slide>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6">
    <div style={{ maxWidth: `300px`, margin: '0 auto'}}>
      <Image />
    </div>
    </div>
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
    </div>
  </Layout>
  
)


export default Home

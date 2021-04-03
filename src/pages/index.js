import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactRotatingText from 'react-rotating-text'
import React from 'react'
import Scramble from 'react-scramble'



const textArray = ['Инженер данных','Бизнес-аналитик', 'Разработчик','Аналитик данных']
const Home = () => (
  <Layout>
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
      /></h3><span className ="intro__title-line intro__title-line--entered"></span>
          
          <h2><ReactRotatingText items={textArray} /></h2>
    </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 p-4">
    <div styles = "max-width: 300px; margin: 0;">
      <Image />
    </div>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2">
      
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
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

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactRotatingText from 'react-rotating-text'
import React from 'react'
import Scramble from 'react-scramble'





const textArray = ['Инженер данных','Бизнес-аналитик', 'Разработчик','Программный инженер']
const Home = () => (
  <Layout>
    <div className = "HomePage container-lg">
      <div className="row">
    <SEO title="Главная" />
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
      <div className="col-lg-6 col-md-6 col-sm-6">
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
      /></h3><span class="intro__title-line intro__title-line--entered"></span>
          
          <h2><ReactRotatingText items={textArray} /></h2>
    </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    <div className="col-lg-6 col-md-6 col-sm-6"></div>
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

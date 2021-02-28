import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Rotate from "react-reveal/Rotate"
import Slide from "react-reveal/Slide"
import ScrollAnimation from 'react-animate-on-scroll'
import ReactRotatingText from 'react-rotating-text'
import Wave from "react-wavify"


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

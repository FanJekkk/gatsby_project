import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Rotate from "react-reveal/Rotate"
import Slide from "react-reveal/Slide"
import ScrollAnimation from 'react-animate-on-scroll'
import ReactRotatingText from 'react-rotating-text'


const textArray = ['программный инженер', 'инженер данных', 'бизнес-аналитик', 'аналитик данных']
const Home = () => (
  <Layout>
    <SEO title="Home" />
    
    <Slide left cascade>
    <div>
          <h1>Привет!</h1>
          <h2>TEST TEST TEST</h2>
          <h2>И я <ReactRotatingText items={textArray} /></h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
                  I'm a <br />
                  <h1 className="text-2xl text-gray-600 md:text-4xl lg:text-6xl lg:tracking-wider">
                  <ReactRotatingText items={textArray} />
                </h1>
                </p>
    </div>
    </Slide>
     
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
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
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  
)


export default Home

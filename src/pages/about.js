import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <div className = "AboutPage container-lg">
      <div className="row">
    <SEO title="Обо мне" />
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    <div className="col-lg-3 col-md-3 col-sm-3">
    <h1>Добро пожаловать на страницу обо мне!</h1>
    <p>Welcome to About page!</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3">
    <Link to="/">Go back to the homepage</Link>
    <h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p><h1>Hi from the About page</h1>
    <p>Welcome to page 3</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    </div>
    </div>
  </Layout>
)

export default About
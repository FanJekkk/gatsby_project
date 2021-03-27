import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <div className = "AboutPage container-lg">
      <div className="row">
    <SEO title="Обо мне" />
    <div className="col-lg-6 col-md-6 col-sm-6">
    <h1>Добро пожаловать на страницу обо мне!</h1>
    <p>Welcome to About page!</p>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6">
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
    </div>
    </div>
  </Layout>
)

export default About
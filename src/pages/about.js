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
    <h1>Навыки</h1>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3">
    <Link to="/">Go back to the homepage</Link>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3"></div>
    </div>
    </div>
  </Layout>
)

export default About
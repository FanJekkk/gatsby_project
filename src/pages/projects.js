import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <div className = "ProjectPage container-lg">
      <div className="row">
    <SEO title="Проекты" />
    <div className="col-lg-6 col-md-6 col-sm-6">
    <h1>Добро пожаловать на страницу c моими проектами!</h1>
    <p>Welcome to projects page!</p>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6">
    <Link to="/">Go back to the homepage</Link>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    </div>
    </div>
    </div>
  </Layout>
)

export default Projects
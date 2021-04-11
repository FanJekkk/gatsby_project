import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const Projects = () => (
  
  <Layout>
    <div className = "ProjectPage container-lg">
      <div className="row">
    <SEO title="Проекты" />
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    <h1>Добро пожаловать на страницу c моими проектами!</h1>
    <p>Welcome to projects page!</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
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
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    </div>
    </div>
  </Layout>
)

export default Projects
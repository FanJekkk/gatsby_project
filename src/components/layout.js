/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Container from "./container"
import "./layout.css"
import Header from './header'
import NavBar from "./NavBar/NavBar"

const Layout = ({ children }) => {

  return (
    <><NavBar />
        <Header />
        <Container>
          
        <main>{children}</main>
        </Container>
        
    </>
  )


  }
export default Layout

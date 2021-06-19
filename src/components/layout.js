/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState, useEffect} from "react"
import Container from "./container"
import "./layout.css"
import Header from './header'
import NavBar from "./NavBar/NavBar"
import LottieLoader from 'react-lottie-loader'
import rocket from './animation/rocket.json'





const Layout = ({ children }) => {
  const [loader, setLoader]=useState(true);

  useEffect(()=>{
   setTimeout(()=> {
      setLoader(false)
   }, 3000)
  }, [])
  return (
    
    <>
    <NavBar />
        <Header />
        <Container>
        <main>{children}</main>
        </Container>
        
    </>
  )


  }
export default Layout

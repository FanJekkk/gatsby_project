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
import {FazerAnimation} from 'react-fazer-animation';



const Layout = ({ children }) => {
  const [loader, setLoader]=useState(true);

  useEffect(()=>{
   setTimeout(()=> {
      setLoader(false)
   }, 3000)
  }, [])
  return (
    
    <>{loader ?
   <div id = "preloader">
  <FazerAnimation
    title={'Redirecting'}
    bodyColor={'#FFFFFF'}
    longfazersColor={'#FFFFFF'}
  /></div> :<div><NavBar />
        <Header />
        <Container>
        <main>{children}</main>
        </Container></div>}
        
    </>
  )


  }
export default Layout

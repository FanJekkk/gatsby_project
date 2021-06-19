import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "../../images/logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link"

const Navigation = styled.nav`
  height: 90px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding-left: 8%;
  top:0;
  z-index: 104;
  align-self: center;
  color: white;
  font-family: Arial, serif;
  @media (max-width: 768px) {
    position: fixed;
    height: 90px;
    top: 0;
    right: 0;
    z-index: 104;
    padding-bottom: 80px;
    color: white;
    font-family: Arial, serif;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  position: absolute;
    display: flex;
    padding-left: 0px;
    z-index: 105;
    right: 8%;
    width: 45px;
    direction: rtl;
    -webkit-tap-highlight-color: transparent;

  
`
   
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 8%;
  z-index: 101;
  flex-direction: column;
  position: fixed;
  width: 100%;
  right: 0;
  justify-content: flex-start;
  padding-top: 4%;
  transition: 0.5s;
  background-color: black;
  transform: ${props => (props.open ? "translateY(-100%);" : "0")};
  opacity: ${props => (props.open ? "0" : "1")};
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
  

`


const Hamburger = styled.div`
  background-color: #fff;
  width: ${props => (props.open ? "45px" : "30px")};
  height: 2px;
  transition: all .3s linear;
  align-self: center;
  position: fixed;
  direction: rtl;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before {
    width: 45px;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #fff;
    transition: all 0.3s linear;
  }
  ::after {
    width: 15px;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #fff;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
    right: 0;
    background-color: #fff;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    right:0;
    background-color: #fff;
  }
`




const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
  
    }else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };
  const isBrowser = () => typeof window !== "undefined"
  isBrowser() && window.addEventListener('scroll',changeBackground);
  return (
    <Navigation className = {navbar ? 'navigation active' : 'navigation'}>
      <Link to="/"  className = "logo"
        >
          {/*<img className= "logo" width="150" height="50" src={Logo} alt="logo" />
          
        
  */} 
 
  <div className = "logoanime1"></div>
  <div className = "logoname">D</div>
  <div className = "logoanime2"></div>
          <div className = "logoanime3"></div>
          {/* <h2
            className="magic-hover magic-hover__square"
            style={{ lineHeight: "1.4rem" }}
          >
            Teplyak
          </h2> */}
      </Link>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)} 
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger /> }
      </Toggle>
      {navbarOpen ? (
        <Navbox className = "Navbox">
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
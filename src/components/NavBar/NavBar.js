import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"

const Navigation = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 10vw;
  top:0;
  z-index: 104;
  align-self: center;
  @media (max-width: 768px) {
    position: fixed;
    height: 80px;
    top: 0;
    right: 0;
    z-index: 104;
    padding-bottom: 80px;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  position: absolute;
  right: 5%;
  z-index: 105;
  @media (max-width: 768px) {
    display: flex;
    padding-left: 0px;
    z-index: 105;
    right: 5%;
    width: 45px;
  }
`
   
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 101;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    z-index: 101;
    justify-content: flex-start;
    padding-top: 20%;
    transition: 0.5s;
    bottom: ${props => (props.open ? "100%" : "0")};
    background-color: white;
    transform: ${props => (props.open ? "translateY(-100%);" : "0")};
    opacity: ${props => (props.open ? "0" : "1")};
    border-radius:${props => (props.open ? "50%" : "0")};
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
    
  }

`

const Hamburger = styled.div`
  background-color: ${props => (props.open ? "#111" : "#fff")};
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
    background-color: #111;
    transition: all 0.3s linear;
  }
  ::after {
    width: 15px;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #111;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
    background-color: ${props =>
      props.open ? "#111" : "#fff"}; ;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    background-color: #fff;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      
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
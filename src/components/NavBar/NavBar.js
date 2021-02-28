import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"

const Navigation = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  background-color: #fff;
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 10vw;
  top:0;
  z-index: 101;
  align-self: center;
  @media (max-width: 768px) {
    position: fixed;
    height: 80px;
    top: 0;
    right: 0;
    z-index: 101;
    padding-bottom: 80px;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 8vw;
  position: absolute;
  right: 5%;
  z-index: 101;
  @media (max-width: 768px) {
    display: flex;
    padding-left: 0px;
    z-index: 101;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 20px;
  z-index: 101;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    z-index: 101;
    justify-content: flex-start;
    padding-top: 15vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: fixed;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
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
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
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
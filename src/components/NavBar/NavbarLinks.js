import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const NavbarLinks = () => {
  return (
    <>
      <AniLink paintDrip to="/" hex="#00006f" className = "NavItem">
      Главная
      </AniLink>
      <AniLink paintDrip to="/about" color="red" className = "NavItem">
      Обо мне
      </AniLink>
      <AniLink paintDrip to="/contact" color="black" className = "NavItem">Контакты
      </AniLink>
      <AniLink paintDrip to="/projects" color="blue" className = "NavItem">Проекты
      </AniLink>
    </>
  )
}

export default NavbarLinks
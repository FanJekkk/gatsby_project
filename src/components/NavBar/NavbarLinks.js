import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link"

const NavbarLinks = () => {
  return (
    <> 
      <Link to="/"  className = "NavItem FirstItem">
      Главная
      </Link>
      <AniLink paintDrip to="/about" hex="#00006f" className = "NavItem">
      Навыки
      </AniLink>
      <AniLink paintDrip to="/projects" hex="#00006f" className = "NavItem">Проекты
      </AniLink>
      <AniLink paintDrip to="/contact" hex="#00006f" className = "NavItem">Контакты
      </AniLink>
    </>
  )
}

export default NavbarLinks
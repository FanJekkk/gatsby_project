import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const NavbarLinks = () => {
  return (
    <> 
      <AniLink paintDrip to="/" hex="#00006f" className = "NavItem">
      Главная
      </AniLink>
      <AniLink paintDrip to="/about" hex="#9d316e" className = "NavItem">
      Навыки
      </AniLink>
      <AniLink paintDrip to="/projects" hex="#7209b7" className = "NavItem">Проекты
      </AniLink>
      <AniLink paintDrip to="/contact" hex="#4361EE" className = "NavItem">Контакты
      </AniLink>
    </>
  )
}

export default NavbarLinks
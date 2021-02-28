import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (

  <header style={{
      backgroundColor: '#000',
    }}>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

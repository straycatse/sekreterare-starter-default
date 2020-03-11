import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles/footer.css"

const Footer = () => (
  <footer className="mainFooter">
    <div className="content">
      © {new Date().getFullYear()}, Utvecklat av
      {` `}
      <a href="https://straycat.nu">Stray Cat</a>
    </div>
  </footer>
)

export default Footer

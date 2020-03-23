import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles/section.css"

const Section = ({ bgColor, align, width, children }) => (
  <div
    className="section"
    style={{ backgroundColor: bgColor, textAlign: align }}
  >
    <div className="content" style={{ width: width }}>
      {children}
    </div>
  </div>
)

Section.propTypes = {
  bgColor: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
}

Section.defaultProps = {
  bgColor: `#ffffff`,
}

export default Section

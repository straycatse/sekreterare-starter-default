import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles/section.css"

const Section = ({ bgColor, title, text, align, width, children }) => (
  <div
    className="section"
    style={{ backgroundColor: bgColor, textAlign: align }}
  >
    <div className="content" style={{ width: width }}>
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </div>
  </div>
)

Section.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
}

Section.defaultProps = {
  bgColor: `#ffffff`,
}

export default Section

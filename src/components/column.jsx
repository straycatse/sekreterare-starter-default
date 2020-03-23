import PropTypes from "prop-types"
import React from "react"

import "./styles/column.css"

const Column = ({ children, float }) => (
  <div className="column" style={{ float: float }}>
    {children}
  </div>
)

Column.propTypes = {
  float: PropTypes.string,
}

Column.defaultProps = {
  float: "none",
}

export default Column

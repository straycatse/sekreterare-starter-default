import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PrimaryButton = ({ link, text }) => (
  <a href={link}>
    <button
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        fontFamily: "sans-serif",
        color: "white",
        border: "#cf475b solid 3px",
        borderRadius: "6px",
        backgroundColor: "#cf475b",
      }}
    >
      {text}
    </button>
  </a>
)

PrimaryButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
}

PrimaryButton.defaultProps = {
  link: ``,
  text: ``,
}

export default PrimaryButton

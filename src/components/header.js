import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/sekreterare.nu.png"
import PrimaryButton from "../components/primarybutton"

import "./styles/header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1920,
        padding: `1.45rem 1.3rem`,
        minHeight: "10vh",
      }}
    >
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        <img style={{ maxWidth: 200 }} src={logo} alt={siteTitle}></img>
      </Link>

      <nav style={{ float: "right", margin: 0 }}>
        <a className="navLink" href="https://beta.sekreterare.nu/signin">
          Logga in
        </a>
        <PrimaryButton
          link="https://beta.sekreterare.nu/signup"
          text="Skapa konto"
        ></PrimaryButton>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

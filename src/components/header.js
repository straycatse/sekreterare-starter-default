import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/sekreterare.nu.png"
import PrimaryButton from "../components/primarybutton"
import { slide as Menu } from "react-burger-menu"

import "./styles/header.css"

const isMobile = window.innerWidth < 480
console.log(isMobile)
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

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
      {!isMobile && (
        <nav style={{ float: "right", margin: 0 }}>
          <a className="navLink" href="https://beta.sekreterare.nu/signin">
            Logga in
          </a>
          <PrimaryButton
            link="https://beta.sekreterare.nu/signup"
            text="Skapa konto"
          ></PrimaryButton>
        </nav>
      )}
      {isMobile && (
        <Menu styles={styles} right>
          <a className="navLink" href="https://beta.sekreterare.nu/signin">
            Logga in
          </a>
          <PrimaryButton
            link="https://beta.sekreterare.nu/signup"
            text="Skapa konto"
          ></PrimaryButton>
        </Menu>
      )}
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

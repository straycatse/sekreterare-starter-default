import React from "react"
import PrimaryButton from "../components/primarybutton"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import wide from "../images/wide.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Enkla mötesprotokoll online - sekreterare.nu" />

    <div style={{ paddingTop: "10rem" }}>
      <h1>Gör det enkelt att vara sekreterare</h1>
      <h2>Enkla digitala protokoll, direkt i webbläsaren!</h2>
      <PrimaryButton
        link="https://beta.sekreterare.nu/signup"
        text="Skapa konto"
      ></PrimaryButton>
    </div>
    <div></div>
  </Layout>
)

export default IndexPage

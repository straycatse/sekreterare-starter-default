import React from "react"

import { graphql } from "gatsby"

import Img from "gatsby-image"
import PrimaryButton from "../components/primarybutton"
import Layout from "../components/layout"
import Section from "../components/section"
import Column from "../components/column"
import SEO from "../components/seo"

export const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Enkla mötesprotokoll online" />

    <Section width="65%">
      <Column float="left">
        <h1>Gör det enkelt att vara sekreterare</h1>
        <h3 style={{ fontWeight: "normal" }}>
          Enkla digitala protokoll, direkt i webbläsaren!
        </h3>
        <PrimaryButton
          link="https://beta.sekreterare.nu/signup"
          text="Skapa konto"
        ></PrimaryButton>
      </Column>
      <Column float="right">
        <Img
          style={{ float: "right" }}
          fixed={data.file.childImageSharp.fixed}
        />
      </Column>
    </Section>
    <Section bgColor="#f5f6f7" align="Center">
      <Column>
        <h2>Kom igång med digitala protokoll!</h2>
        <p>
          sekreterare.nu befinner sig just nu i en gratis betaperiod, och det är
          öppet för vemsomhelst. Klicka bara på skapa konto för att komma igång
          med dina protokoll!
        </p>
      </Column>
    </Section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "note_taking.png" }) {
      childImageSharp {
        fixed(width: 300, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

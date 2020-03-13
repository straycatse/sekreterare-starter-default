import React from "react"
import PrimaryButton from "../components/primarybutton"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Enkla mötesprotokoll online - sekreterare.nu" />

    <Section>
      <div style={{ paddingBottom: "3rem" }}>
        <h1>Gör det enkelt att vara sekreterare</h1>
        <h3 style={{ fontWeight: "normal", lineHeight: 1 }}>
          Enkla digitala protokoll, direkt i webbläsaren!
        </h3>
        <PrimaryButton
          link="https://beta.sekreterare.nu/signup"
          text="Skapa konto"
        ></PrimaryButton>
      </div>
    </Section>
    <Section
      bgColor="#f5f6f7"
      title="Kom igång med digitala protokoll!"
      text="sekreterare.nu befinner sig just nu i en gratis betaperiod, och det är öppet för vemsomhelst. Klicka bara på skapa konto för att komma igång med dina protokoll!"
      align="Center"
    ></Section>
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      height: `80vh`,
      maxWidth: `440px`,
      width: `100%`,
      margin: `0 auto`,
      padding: `0 20px`,
    }}>
      <h1 
        className="title-container"
        style={{
          lineHeight: `1.6`,
      }}>
        Hi my name is Pete.<br />
        I'm a developer.
      </h1>
    </div>
  </Layout>
)

export default IndexPage

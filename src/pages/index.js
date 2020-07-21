import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%,-50%)`,
      width: `100%`,
      padding: `0 1.45rem`,
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

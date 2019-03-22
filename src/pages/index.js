import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="title-container">Coming Soon...ish</h1>
    <div style={{ maxWidth: `300px`, margin: `0 auto 1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BodyLink = props =>(
  <a href={props.href} target={props.target} rel="noopener noreferrer" style={{ textDecoration: `none`, fontWeight: `bold`, color: `black` }}>{props.children}</a>
)

const Container = props => (
  <div style={{
    margin: `20px auto 0`,
    textAlign: `center`,
  }}>
    {props.children}
  </div>
)

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div
      style={{
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%,-50%)`,
        width: `100%`,
      }}>
      <h1 className="title-container">Contact</h1>

      <Container>
        <BodyLink href="mailto:kangpeter5@gmail.com" target="_top">Email</BodyLink> | <BodyLink href="https://github.com/kangpeter5" target="_blank">Github</BodyLink> | <BodyLink href="https://www.linkedin.com/in/kangpeter/" target="_blank">Linkedin</BodyLink>
      </Container>
    </div>
  </Layout>
)

export default ContactPage

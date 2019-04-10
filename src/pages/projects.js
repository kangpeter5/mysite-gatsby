import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BodyLink = props =>(
    <a target="_blank" rel="noopener noreferrer" href={props.href} style={{ textDecoration: `none`, fontWeight: `bold`, color: `#000`, }}>{props.children}</a>
)

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" keywords={[`adobe`, `javascript`, `jquery`, `less`, `scss`, `html`, `css`, `social-media`, `js`, `es6`, `github`, `linux`]} />

        <h1 className="title-container">Projects</h1>

        <BodyLink href="https://github.com/kangpeter5/kendrick-lamar-damn">Kendrick</BodyLink>
        <BodyLink href="https://github.com/kangpeter5/KMK_eCommerce_php">KMK eCommerce</BodyLink>
        <BodyLink href="https://github.com/MCKnute/rails_payme_project">Pay Me</BodyLink>
    </Layout>
)

export default ProjectsPage
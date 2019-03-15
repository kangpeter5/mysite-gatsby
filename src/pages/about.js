import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Me</h1>
        <Link to="/">Home</Link>
    </Layout>
)

export default AboutPage
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BodyLink = props =>(
    <a target="_blank" rel="noopener noreferrer" href={props.href} style={{ textDecoration: `none`, fontWeight: `bold` }}>{props.children}</a>
)

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Me</h1>
        <p>I started out as a Battery Systems Test Engineer for <BodyLink href="https://www.linkedin.com/in/kangpeter">General Motors</BodyLink> writing and running automated-tests for the Chevrolet Volt and other hybrid vehicles.</p>
        <p>At the same time, I became a videographer/part-owner at <BodyLink href="https://www.youtube.com/user/strifetv">Strife.TV</BodyLink> to document and explore the different urban dance cultures around the world. Also, I helped manage and strategize all social media accounts for <BodyLink href="http://supercr3w.com/">SuperCr3w</BodyLink> (MTV's America's Best Dance Crew Season 2 Winner), <BodyLink href="https://www.instagram.com/fssworldwide/">Freestyle Session</BodyLink>, and <BodyLink href="https://www.instagram.com/mariepoppinsdancer/">Marie Poppins</BodyLink>.</p>
        <p>After a while, I wanted to get back into creating/building things, but didn't want to work in a factory.</p>
        <Link to="/">Home</Link>
    </Layout>
)

export default AboutPage
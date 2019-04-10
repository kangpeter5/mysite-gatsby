import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BodyLink = props =>(
    <a target="_blank" rel="noopener noreferrer" href={props.href} style={{ textDecoration: `none`, fontWeight: `bold`, color: `#000`, }}>{props.children}</a>
)

const WorksPage = () => (
    <Layout>
        <SEO title="Works" keywords={[`adobe`, `javascript`, `jquery`, `less`, `scss`, `html`, `css`, `social-media`, `js`, `es6`]} />
        <h1 className="title-container">Works</h1>
        
        <p style={{ textAlign: `center`, }}>Here's some of my latest works</p>
        <div>
            <BodyLink href="https://www.activisionblizzardmedia.com/">Activision Blizzard Media</BodyLink>
            <BodyLink href="https://www.callofdutyendowment.org/">Call of Duty Endowment</BodyLink>
            <BodyLink href="https://www.sekirothegame.com/">Sekiro: Shadows Die Twice</BodyLink>
            <BodyLink href="https://www.crashbandicoot.com/">Crash Bandicoot</BodyLink>
            <BodyLink href="https://spyrothedragon.com/">Spyro the Dragon</BodyLink>
            <BodyLink href="https://www.treyarch.com/">Treyarch</BodyLink>
            <BodyLink href="https://www.callofduty.com/wwii/buy">Call of Duty WWII</BodyLink>
            <BodyLink href="https://www.destinythegame.com/">Destiny the Game</BodyLink>
            <BodyLink href="https://www.activisionblizzard.com/">Activision Blizzard</BodyLink>
        </div>
    </Layout>
)

export default WorksPage
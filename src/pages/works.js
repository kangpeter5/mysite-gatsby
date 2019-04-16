import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const WorkContainer = props => (
    <div style={{
        flex: `1 0 30%`,
        margin: `1%`,
        maxWidth: `400px`,
    }}>
        <a target="_blank" rel="noopener noreferrer" href={props.href} 
        style={{ 
            textDecoration: `none`, 
            fontWeight: `bold`, 
            color: `#000`,
        }}>{props.children}</a>
    </div>
)

const WorksPage = () => (
    <Layout>
        <SEO title="Works" keywords={[`adobe`, `javascript`, `jquery`, `less`, `scss`, `html`, `css`, `social-media`, `js`, `es6`]} />
        <h1 className="title-container">Here's some things I've been working on</h1>
        
        <div style={{
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
            }}
        >
            <WorkContainer href="https://www.activisionblizzardmedia.com/">
            <Image />
            Activision Blizzard Media</WorkContainer>

            <WorkContainer href="https://www.callofdutyendowment.org/">Call of Duty Endowment</WorkContainer>

            <WorkContainer href="https://www.sekirothegame.com/">Sekiro: Shadows Die Twice</WorkContainer>

            <WorkContainer href="https://www.crashbandicoot.com/">Crash Bandicoot</WorkContainer>

            <WorkContainer href="https://spyrothedragon.com/">Spyro the Dragon</WorkContainer>

            <WorkContainer href="https://www.treyarch.com/">Treyarch</WorkContainer>
            
            <WorkContainer href="https://www.callofduty.com/wwii/buy">Call of Duty WWII</WorkContainer>

            <WorkContainer href="https://www.destinythegame.com/">Destiny the Game</WorkContainer>
        </div>
    </Layout>
)

export default WorksPage
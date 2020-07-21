import React from "react"
import Layout from "../components/layout"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from "../components/image"
import SEO from "../components/seo"

//https://github.com/netlify-templates/gatsby-starter-netlify-cms/

const WorkContainer = props => (
    <div style={{
        padding: `1%`,
        marginBottom: `1.45rem`,
        textAlign: `center`,
    }}>
        <a target="_blank" rel="noopener noreferrer" href={props.href} 
        style={{ 
            textDecoration: `none`, 
            fontWeight: `bold`, 
            fontSize: `1.2rem`,
            color: `#000`,
        }}>{props.children}</a>
    </div>
)

const WorkPage = ({
    data
}) => (
    <Layout>
        <SEO title="Work" keywords={[`adobe`, `javascript`, `jquery`, `less`, `scss`, `html`, `css`, `social-media`, `js`, `es6`]} />
        <h1 className="title-container">Work</h1>

        <div className="row">
            <div 
                className="col col-1" 
                style={{
                    padding: `1%`,
                }}
            >
            
                <h3 
                    style={{
                        textAlign: `center`,
                        marginTop: `1.45rem`,
                        marginBottom: `1.45rem`,
                    }}
                >Games</h3>
                <hr />

                <WorkContainer href="https://www.callofduty.com/modernwarfare/">Call of Duty : Modern Warfare</WorkContainer>

                <WorkContainer href="https://www.crashbandicoot.com/">Crash Bandicoot</WorkContainer>

                <WorkContainer href="https://www.sekirothegame.com/">Sekiro: Shadows Die Twice</WorkContainer>

                <WorkContainer href="https://spyrothedragon.com/">Spyro the Dragon</WorkContainer>

                <WorkContainer href="https://www.treyarch.com/">Treyarch</WorkContainer>

                <WorkContainer href="https://www.callofduty.com/wwii/buy">Call of Duty WWII</WorkContainer>

                <WorkContainer href="https://www.destinythegame.com/">Destiny the Game</WorkContainer>

            </div>

            <div 
                className="col col-2"
                style={{
                    marginTop: `1.45rem`,
                    padding: `1%`,
                }}
            >
                <h3 
                    style={{
                        textAlign: `center`,
                        marginBottom: `1.45rem`,
                    }}
                >Artists / Marketing</h3>

                <hr />
                <WorkContainer href="https://www.ativision.com/">Activision</WorkContainer>
                
                <WorkContainer href="https://www.activisionblizzardmedia.com/">
                    <Image imageInfo={data.image1.childImageSharp.fluid} alt="Activision Blizzard Media" />Activision Blizzard Media
                </WorkContainer>

                <WorkContainer href="https://www.callofdutyendowment.org/">Call of Duty Endowment</WorkContainer>

                <WorkContainer href="http://www.operandirecords.com/">Operandi Records</WorkContainer>

                <WorkContainer href="http://www.whatsupturtle.com/">Turtle T</WorkContainer>

                <WorkContainer href="http://www.jess2sick.com/">jess2sick</WorkContainer>
            </div>
        </div>
        
    </Layout>
)

WorkPage.propTypes = {
    data: PropTypes.shape({
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
}

export default WorkPage

export const WorkPageQuery = graphql`
    query {
        image1: file(relativePath: { eq: "abm.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image2: file(relativePath: { eq: "codendow.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image3: file(relativePath: { eq: "crash.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image4: file(relativePath: { eq: "destiny.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image5: file(relativePath: { eq: "sekiro.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image6: file(relativePath: { eq: "spyro.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image7: file(relativePath: { eq: "treyarch.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        image8: file(relativePath: { eq: "wwii.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
    
    }
`;
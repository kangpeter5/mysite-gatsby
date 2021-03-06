import React from "react"
import PropTypes from 'prop-types'
//import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//import { checkPropTypes } from "prop-types";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

/*export const fluidImage = graphql`
fragment fluidWorksImg on File {
  childImageSharp {
    fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;*/

const Image = (imageInfo) => {
  const { alt ='', childImageSharp, image } = imageInfo

  if(!!image && !!image.childImageSharp){
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if(!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if(!!image && typeof image ==='string'){
    return <img src={image} alt={alt} />
  }
  
  return null
}

Image.prototypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

/*const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        abmImage: file(relativePath: { eq: "abm.png" }) {
          ...fluidWorksImg
        }
        codendowImage: file(relativePath: { eq: "codendow.png" }) {
          ...fluidWorksImg
        }
        crashImage: file(relativePath: { eq: "crash.png" }) {
          ...fluidWorksImg
        }
        destinyImage: file(relativePath: { eq: "destiny.png" }) {
          ...fluidWorksImg
        }
        sekiroImage: file(relativePath: { eq: "sekiro.png" }) {
          ...fluidWorksImg
        }
        spyroImage: file(relativePath: { eq: "spyro.png" }) {
          ...fluidWorksImg
        }
        treyarchImage: file(relativePath: { eq: "treyarch.png" }) {
          ...fluidWorksImg
        }
        wwiiImage: file(relativePath: { eq: "wwii.png" }) {
          ...fluidWorksImg
        }
      }
    `}
    render={
      data => <Img fluid={data.abmImage.childImageSharp.fluid} />
    }
  />
)*/
export default Image

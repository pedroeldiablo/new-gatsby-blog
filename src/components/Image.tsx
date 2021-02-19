import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type ImageComponent = {
  alt: string
  filename: string
  fluid?: boolean
}

// Note: You can change "images" to whatever you'd like.
// https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources

const Image = (props: ImageComponent) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
                fixed(
                  width: 200
                  duotone: { highlight: "00ca01", shadow: "0010ca" }
                ) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <>
          {props.fluid ? (
            <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
          ) : (
            <Img alt={props.alt} fixed={image.node.childImageSharp.fixed} />
          )}
        </>
      )
    }}
  />
)

export default Image

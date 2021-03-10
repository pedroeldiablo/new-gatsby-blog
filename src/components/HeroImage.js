import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "thinking-about-code.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(
            width: 200
            duotone: { highlight: "00ca01", shadow: "0010ca" }
          ) {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
  `);
  // console.log('data', data.image.childImageSharp.fluid)
  return (
    <div>
      {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
      <Img fixed={data.image.childImageSharp.fixed} />
    </div>
  );
};

export default HeroImage;

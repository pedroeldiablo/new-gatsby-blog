import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const GoToLink = styled(Link)`
  text-decoration: none;
  color: #7b00ff;
  font-size: small;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #ff0084;
`


export default ({ data }) => { 
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Dev Blogs</h1>
      <Image />
      <h4> { data.allMarkdownRemark.totalCount }</h4>
      { data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
           <BlogLink to={node.fields.slug}>
             <BlogTitle>{node.frontmatter.title} - { node.frontmatter.date}</BlogTitle>
            </BlogLink>
          <p>{node.excerpt}</p>
          <GoToLink to={node.fields.slug}>Go to blog</GoToLink>
          <p>Time to read: {node.timeToRead}</p>
          </div>
      ))}
    </div>
  </Layout>
)}



export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

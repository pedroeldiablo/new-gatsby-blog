import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { ViewportProvider, viewportContext } from '../context/viewportContext'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    // <ViewportProvider>
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
    // </ViewportProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

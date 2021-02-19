import React from 'react'
import { Link, graphql } from 'gatsby'
import { ViewportProvider, viewportContext } from '../context/viewportContext'

import styled from 'styled-components'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import SEO from '../components/seo'
import Profile from '../components/profile'

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

const PostCounter = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const PostCard = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`

const PostDetails = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: rgba(100, 100, 100, 1);
`

const FlexArea = styled.div`
  display: grid;
  background-color: pink;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1em;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FlexColumn = styled(FlexArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
`;

const HomePage = ({ data }) => (
  <ViewportProvider>
  <Layout>
    <SEO title="Home" />
    <FlexArea>
      <FlexColumn>
        {data.allMdx.edges.map(({ node }) => (
          <PostCard key={node.id}>
            <BlogLink to={node.slug}>
              <BlogTitle>
                {node.frontmatter.title}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
            <PostDetails>
            <p>{node.frontmatter.date}</p>
            <p>{node.timeToRead} min read</p>
            </PostDetails>
          </PostCard>
        ))}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
            <PostDetails>
            <p>{node.frontmatter.date}</p>
            <p>{node.timeToRead} min read</p>
            </PostDetails>
          </PostCard>
        ))}
        <PostCounter>
          <h4>Posts: {data.allMarkdownRemark.totalCount}</h4>
          <h4>Posts MDX: {data.allMdx.totalCount}</h4>
        </PostCounter>
      </FlexColumn>
      <Profile />
    </FlexArea>
  </Layout>
  </ViewportProvider>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    allMdx {
    edges {
      node {
        slug
        id
        frontmatter {
          date
          description
          title
        }
        timeToRead
        excerpt
      }
    }
    totalCount
  }

  }
`
export default HomePage

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ViewportProvider, viewportContext } from '../context/viewportContext';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const BlogPost = ({ data }: { data: any }): JSX.Element => {
  const post = data.markdownRemark;
  const mdxPost = data.mdx;
  return (
    <ViewportProvider>
      <Layout>
        <div>
          {mdxPost ? (
            <>
              <h1>{mdxPost.frontmatter.title}</h1>
              <MDXRenderer>{mdxPost.body}</MDXRenderer>
            </>
          ) : (
            <>
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </>
          )}
        </div>
      </Layout>
    </ViewportProvider>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;

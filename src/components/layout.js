/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {useViewport} from '../hooks/useViewport'

import Header from './header'
import './layout.css'

const backgroundColor = `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`;
// const currentColor = useViewport().width / 255;

const PageComponent = styled.div`
background: ${backgroundColor};
height: 100%;
width: 100vw;`



const Layout = ({ children }) => {
  console.log(useViewport().width);

  const currentColor = useViewport().width / 255;
  const hueRotation = `hue-rotate(${currentColor}rad)`;

  console.log({hueRotation});



 

  console.log("Current color is ", currentColor);
  

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageComponent style={{filter:hueRotation}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </PageComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

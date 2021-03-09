/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ViewportProvider, viewportContext } from "../context/viewportContext"
import { useViewport } from "../hooks/useViewport"

import Header from "./header"
import "./layout.css"

const backgroundColor = `linear-gradient(217deg, rgba(255,0,0,.2), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(0,255,0,.2), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(0,0,255,.2), rgba(0,0,255,0) 70.71%);`
// const currentColor = useViewport().width / 255;

const PageComponent = styled.div`
  background: ${backgroundColor};
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  display: grid;
`

const Layout = ({ children }) => {
  // const cContext = useContext(viewportContext);
  // const currentColor = cContext.width / 255;
  // const hueRotation = `hue-rotate(${currentColor}rad)`;

  // const cContext = useContext(viewportContext1).width;

  // console.log({cContext});

  console.log("Layout1 width", useViewport())

  const currentColor = useViewport().width / 255
  const hueRotation = `hue-rotate(${currentColor}rad)`

  console.log({ hueRotation })

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
    <ViewportProvider>
      <PageComponent style={{ filter: hueRotation }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            width: `100vw`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </PageComponent>
    </ViewportProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { viewportContext} from '../context/viewportContext'
import {useViewport} from '../hooks/useViewport'
import Image from './image'
import styled from 'styled-components'

const HeaderStyles = styled.header`
      display: grid;
      grid-template-columns: 75% 25%;
      background:#ff0084;
      background:rgba(255, 0, 132, 0.2);
      margin-bottom: 1.45rem;
      @media (max-width: 768px) {
        grid-template-columns: 100%;
  }
`

const Header = ({ siteTitle }) => {
  // console.log("What is useV", useViewport().width)
  const cCon = useContext(viewportContext);
  const currentColor = cCon.width / 255;
  const hueRotation = `hue-rotate(${currentColor}rad)`;

  return <HeaderStyles
    style={{filter: `${hueRotation}`}}
  >
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`
      }}
    > */}
      <h1 style={{ marginLeft: `10px`, marginBottom: `0px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Image />
    {/* </div> */}
  </HeaderStyles>
        }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

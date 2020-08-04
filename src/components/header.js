import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { viewportContext} from '../context/viewportContext'
import {useViewport} from '../hooks/useViewport'

const Header = ({ siteTitle }) => {
  console.log("What is useV", useViewport().width)
  const cCon = useContext(viewportContext);
  const currentColor = cCon.width / 255;
  const hueRotation = `hue-rotate(${currentColor}rad)`;

 console.log("hello", cCon)
  return <header
    style={{
      background: `#ff0084`,
      marginBottom: `1.45rem`,
      filter: `${hueRotation}`

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
    </div>
  </header>
        }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import styled from 'styled-components'
import {useViewport} from '../hooks/useViewport'


const IframeContainer = styled.div`
filter: hue-rotate(0rad);
&[style] {
    filter: hue-rotate(0rad);;
    color: blue !important;
  }`

// const hueRotation = `hue-rotate(0rad)`;

const IframeComponent = ( {children}) =>{

  const currentColor = useViewport().width / 255;
  const hueRotation = `hue-rotate(-${currentColor}rad)`;

return (
  <IframeContainer className="susan" style={{filter:hueRotation}}>
     {children}
  </IframeContainer>
)
}

export default IframeComponent

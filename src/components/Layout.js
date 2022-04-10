import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #43F174;
    --secondary-color: lightblue;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Arial, sans-serif;
    background-color: #242E41;
    color: #fafafa;
  }
`

export default Layout

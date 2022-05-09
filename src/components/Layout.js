import React from 'react'
import Footer from './Footer'

// If in the future I have multiple pages with re-accuring components on them I can add them here. Like a Navbar or footer, etc.

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
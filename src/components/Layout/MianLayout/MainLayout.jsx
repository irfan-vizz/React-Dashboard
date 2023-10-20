import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
function MainLayout({ children }) {
  return (
    <>
        <Header/>
          {children}
        <Footer/>
    </>
  )
}

export default MainLayout

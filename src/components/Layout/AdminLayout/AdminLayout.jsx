import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
function AdminLayout({children}) {
  return (
    <>
        <Header/>
        <Sidebar/>
        {children}
        <Footer/>
    </>
  )
}

export default AdminLayout

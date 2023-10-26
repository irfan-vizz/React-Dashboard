import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
function AdminLayout({children}) {
  return (
    <>
      <div className='outerWrap'>
        <Header/>
        <Sidebar/>
        <div className='pageWrapper'>
          {children}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default AdminLayout

import React from 'react'
import {topNavIcons} from './svgIcons';
import parse from 'html-react-parser';
function Header() {
  return (
    <>
        {topNavIcons.map((navData,index)=>(
            <div key={index}>
                {navData.title}
                <div>{parse(navData.icon)}</div>
            </div>
        ))}
    </>
  )
}

export default Header

import React from 'react'
import "./adminHeader.css"
import { BsJustify, BsGrid1X2Fill, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';

const AdminHeader = ({OpenSidebar}) => {
  return (
        <div className="adminHeader">
            <div className='menuIcon'>
                <BsJustify className='BsIconH' onClick={OpenSidebar}/>
            </div>
            <div className='headerLeft'>
                <BsGrid1X2Fill className='BsIconH'/>
            </div>
            <div className='headerRight'>
                <BsFillBellFill className='BsIconH'/>
                <BsFillEnvelopeFill className='BsIconH' />
                <BsPersonCircle className='BsIconH'/>
            </div>
        </div>
        
  )
}

export default AdminHeader



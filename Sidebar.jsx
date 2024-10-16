import React from 'react'
import "./sideBar.css"
import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill} from 'react-icons/bs'


  
const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebarResponsive":""}>
      <div className='sidebarTitle'>
        <div className='sidebarBrand'>
          <BsMenuButtonWideFill className='icon_header'/> MENU
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>


      <ul className='sidebarList'>
        <li className='sidebarListItem'>
          <a href="">
            <BsGrid1X2Fill className='BsIcon'/> Dashboard
          </a>
        </li>
        <li className='sidebarListItem'>
          <a href="">
            <BsListCheck className='BsIcon'/> Rooms
          </a>
        </li>
        <li className='sidebarListItem'>
          <a href="">
            <BsFillGrid3X3GapFill className='BsIcon'/> Rezervations
          </a>
        </li>
        <li className='sidebarListItem'>
          <a href="">
            <BsPeopleFill className='BsIcon'/> Users
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {Link} from 'react-router-dom'
import '../../assets/ADashboard/Adminsidebar.css'

function Sidebar({openSidebarToggle, OpenSidebar}) {
return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title  '>
                    <div className='sidebar-brand text-gray-200 flex gap-1'>
                            <BsCart3  className='icon_header text-gray-400'/> SHOP
                    </div>
                    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list '>
                    <li className='sidebar-list-item'>
                            <Link to="" className='flex gap-2'>
                                    <BsGrid1X2Fill className='icon'/> Dashboard
                            </Link>
                    </li>
                    <li className='sidebar-list-item' >
                            <Link to="/viewallproducts" className='flex gap-2'>
                                    <BsFillArchiveFill className='icon'/> Luggages
                            </Link>
                    </li>
                    <li className='sidebar-list-item'>
                            <Link to="/product/create-products" className='flex gap-2'>
                                    <BsFillGrid3X3GapFill className='icon'/> Product
                            </Link>
                    </li>
                    <li className='sidebar-list-item'>
                            <Link to="/viewuser" className='flex gap-2'>
                                    <BsPeopleFill className='icon'/> Users
                            </Link>
                    </li>
                 
                    <li className='sidebar-list-item'>
                            <Link to="" className='flex gap-2'>
                                    <BsFillGearFill className='icon'/> Settings
                            </Link>
                    </li>
            </ul>
    </aside>
)
}

export default Sidebar
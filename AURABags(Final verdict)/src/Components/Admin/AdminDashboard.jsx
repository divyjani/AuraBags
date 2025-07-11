import { useState } from 'react'
import '../../assets/ADashboard/Amain.css';
import AdminHome from '../../Components/Admin/AdminHome';
import Adminnav from '../../Components/Admin/Adminnav'
import AdminSidebar from '../../Components/Admin/Adminsidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Adminnav OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHome />
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ImageSlider from './Components/Slider/ImageSlider'
import ShopSlider from './Components/Slider/ShopSlider'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import FooterOne from './Components/Header&Footer/FooterOne'
import FooterTwo from './Components/Header&Footer/FooterTwo'
import ResetPassword from './Components/Authentication/ResetPassword'

import SignUp from './Components/Authentication/SignUp'
import ScrollButton from './Components/Header&Footer/ScrollButton'
import WhyChooseUs from './Components/WhyChooseUs.jsx/WhyChooseUs'
import Duffles from '../src/pages/Duffles'
// import Bags from './Components/Products/Bags'
import Bagpacks from '../src/pages/Bagpacks'
import Luggage from '../src/pages/Luggage'
import BestSeller from '../src/pages/Bestseller'
import Cart from './pages/Cart'
import CreateProducts from './Components/Product/CreateProducts'
import ProductProfile from './Components/Product/ProductProfile'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'//
// import Adminsidebar from './Components/Admin/Adminsidebar'
import AdminLogout from './Components/Admin/AdminLogout'
import ViewLuggage from './Components/Product/ViewLuggage'
import Userview from './Components/Admin/Userview'
import MostPopular from './pages/MostPopular'
  import axios from "axios";
// import TrendyBags from '../src/pages/TrendyBags'
import { useEffect } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
// import LoginPopup from './Components/Popups/LoginPopup'
function App() {

// useEffect(() => {
//   fetchData();
//   // Fetch data from the backend when the component mounts
//   },[]);
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://aurabagsbackend.onrender.com/api/data");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };


  const [count, setCount] = useState(0)
  function HomeLayout() {
    return (
      <>
        <Navbar />
        <ImageSlider />
        <div className='mt-5'>
          <ShopSlider />
        </div>
        <WhyChooseUs/>
        <FooterOne />
        <FooterTwo/>
         <ScrollButton/>


      </>
    );
  }

   const [activePage, setActivePage] = useState('dashboard');

  // Render the appropriate component based on the active page
  
  const AdminProducts = () =>{
   return<CreateProducts/>
}


  return (
    <BrowserRouter>
    <> 
   


 
  <Routes>
    <Route path='/' element={<><HomeLayout/></>}/>
    <Route path="/login" element={<> <Login/></>}/>
    <Route path="/signup" element={<SignUp/>} />

    <Route path="/reset-password/" element={<ResetPassword/>} />
    <Route path='/Duffles' element={<><Navbar/><Duffles/></>} />
    <Route path='/Bagpacks' element={<><Navbar/><Bagpacks/></>} />
    <Route path="/Luggage" element={<><Navbar/><Luggage/></>} />
    <Route path="/Bestseller" element={<><Navbar/><BestSeller/></>} />
    <Route path="/product/create-products" element={<CreateProducts/>} />
    <Route path="/product/profile/" element={<ProductProfile/>} />
<Route path="/viewallproducts" element={<ViewLuggage/>} />
<Route path="/viewuser" element={<><Userview/></>}/>
    {/* <Route path="/TrendyBags" element={<TrendyBags/>} /> */}
    <Route path="/Shop" element={<><Navbar/><MostPopular/></>} />
    <Route path="/cart" element={<><Cart/></>} />

    <Route path="admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/logout" 
     element={<><AdminLogout/></>}     
        />

         <Route 
          path="/admin" 
          element={
            // <ProtectedRoute>
              <AdminDashboard />
               
          } 
        />
       

  </Routes>
         </> 
       </BrowserRouter>  
  )
}

export default App

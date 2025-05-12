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
import Sidebar from './Components/admin/Sidebar'
import Products from './Components/admin/Products'
import Dashboard from './Components/admin/Dashboard'
import Users from './Components/admin/Users'



// import TrendyBags from '../src/pages/TrendyBags'

// import LoginPopup from './Components/Popups/LoginPopup'
function App() {
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
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'users':
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

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
    <Route path="/admin/create-products" element={<AdminProducts/>} />
    <Route path="/product/profile/" element={<ProductProfile/>} />
    {/* <Route path="/TrendyBags" element={<TrendyBags/>} /> */}
    <Route path="/MostPopular" element={<h1>Most Popular</h1>} />
    <Route path="/cart" element={<><Cart/></>} />
    <Route path="/admin" element={<>
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 overflow-auto p-6">
        {renderPage()}
      </div>
      
    </div>
</>} />

  </Routes>
 



         </> 
       </BrowserRouter>  
  )
}

export default App

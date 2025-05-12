


import React from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaCartPlus} from 'react-icons/fa'
import { Navigation, Thumbs } from 'swiper/modules';
import { sampleProducts } from '../../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


 const handleAddToCart = async() => {
 

  
      const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
console.log(token);

    // This assumes you have toast configured in your parent component/app
    if (typeof toast !== 'undefined') {
      toast.success('Product added to cart');
    }
  }

const NextArrow = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="next-arrow">
      <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
      <path d="M21 16L29 24L21 32" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const PrevArrow = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="prev-arrow">
      <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
      <path d="M27 16L19 24L27 32" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

const ShopSlider = () => {




     const fetchdata=()=>{
      const response=axios.get('https://localhost:4000/products/create')
     }
  
      
     
  return (
    <>
      <h1 className="text-4xl ml-[10rem] mt-[1.7rem] mx-[5rem] font-bold text-zinc-800">Shop Products </h1>
      <div className='flex justify-center mx-[2rem] mt-[2rem]  items-center p-2 gap-[10rem]'>
        <input type="submit" value="Best Seller" className='px-12 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100 hover:bg-zinc-800 hover:text-white ' href="/Bestseller"/>
        <input type="submit" value="Trendy Bags" className='px-12 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100  hover:bg-zinc-800 hover:text-white' href="/Trendy Bags"/>
        <input type="submit" value="Most Popular" className='px-12 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100  hover:bg-zinc-800 hover:text-white' href="/Most Popular"/>
      </div>
       <div className=" w-full  p-6  ">
      <div className='relative mx-12 my-5 px-5  py-2 max-w-screen flex items-center justify-center'>     
      <Swiper  modules={[Navigation]} slidesPerView={2.3}  navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
  spaceBetween={30}  
  style={{ padding: "0 2rem" }} className='product-swiper'
  breakpoints={{
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.7,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.4,
                  spaceBetween: 30,
                },
              }}>


        {sampleProducts.map((item)=>(
          
           <SwiperSlide>
          <div className="w-[17rem]  rounded-xl shadow-md border-2 border-gray-100  " 
        //  style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
        >
         
      
          <div className='img-container w-full h-[230px] mt-2 mb-2 flex justify-center items-center'>
            <img src={`/ShopSlider/Image (${item.id}).webp`}
             alt="Product" className="w-full h-[230px] hover:scale-105 transition-transform duration-300 object-contain"/>
          </div>
         <div className="product-info flex flex-col justify-center p-3 mx-2 ml-4" >
          <div className="product-title flex flex-col justify-center ml-[1.1rem]">
          <h2 className="text-xl font-bold truncate ">{item.name}</h2>
           <p className="text-md text-zinc-400 ">{item.category}</p>
           </div>
            
            <div className="price-element flex items-center px-5 py-1">
              <h2 className='font-semibold text-xl mr-2'>{item.price}</h2>
              <p className='text-zinc-400 line-through'>{item.MRP}</p>
              <span>
              <p className=" ml-2 font-semibold text-blue-600  text-lg italic ">{(item.discount).toFixed(2)}%</p>
              </span> 
              </div>
            
              <div className="cart-element flex items-center mx-2 my-4">
                      <button  onClick={handleAddToCart} className='px-8 py-2 text-lg font-bold  rounded-xl text-white bg-zinc-900 hover:border-2 hover:border-zinc-100 hover:bg-white hover:text-zinc-800 transition-colors duration-300 flex items-center justify-center'>
                        <FaCartPlus className="mr-2" />  Add to Cart
                      </button>
                    </div>
            </div>
                 </div>
        </SwiperSlide>

        ))}
    
      </Swiper>
     
      <div className="custom-prev absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 cursor-pointer">
        <PrevArrow />
         </div>     
             <div className="custom-next absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 cursor-pointer">        
               <NextArrow />
         </div>

      

      </div>
      </div>
    </>
  )
}

export default ShopSlider



// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { sampleProducts } from '../../data/products';

// // Custom SVG Arrow Components
// const NextArrow = () => (
//   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="next-arrow">
//     <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
//     <path d="M21 16L29 24L21 32" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const PrevArrow = () => (
//   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="prev-arrow">
//     <circle cx="24" cy="24" r="23" fill="white" stroke="#E5E5E5" strokeWidth="2"/>
//     <path d="M27 16L19 24L27 32" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const ShopSlider = () => {
//   // const [activeCategory, setActiveCategory] = useState('Best Seller');
  
//   // const categories = [
//   //   'Best Seller',
//   //   'Trendy Bags',
//   //   'Most Popular'
//   // ];
  
//   // Custom navigation configuration
//   const navigationConfig = {
//     prevEl: '.custom-prev',
//     nextEl: '.custom-next',
//   };

//   return (
//     <>
//       <h1 className="text-4xl font-bold text-zinc-800 mr-10 mb-8">Shop Products</h1>
      
//       <div className='flex justify-center mx-[2rem] mt-[2rem]  items-center p-2 gap-[12rem]'>
// //         <input type="submit" value="Best Seller" className='px-16 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100 hover:bg-zinc-800 hover:text-white ' href="/Bestseller"/>
// //         <input type="submit" value="Trendy Bags" className='px-15 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100  hover:bg-zinc-800 hover:text-white' href="/Trendy Bags"/>
// //         <input type="submit" value="Most Popular" className='px-15 py-4 text-xl font-bold bg-white rounded-4xl border-2 border-zinc-100  hover:bg-zinc-800 hover:text-white' href="/Most Popular"/>
// //       </div>
      
//     <div className="container mx-auto px-4 py-8">
//       {/* Product Slider */}
//       <div className="relative">
//         <Swiper
//           modules={[Navigation]}
//           navigation={navigationConfig}
//           slidesPerView={2}
//           spaceBetween={24}
//           className="product-swiper"
//           breakpoints={{
//             640: {
//               slidesPerView: 2.7,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 24,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 24,
//             },
//           }}
//         >
//           {sampleProducts.map((product, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <div className="mb-3">
//                     <h3 className="text-lg font-bold text-zinc-800 mb-1 truncate">{product.name}</h3>
//                     <p className="text-sm text-zinc-500">{product.category}</p>
//                   </div>
                  
//                   <div className="flex items-center mb-4">
//                     <span className="text-xl font-bold mr-2">${product.price}</span>
//                     <span className="text-sm text-zinc-400 line-through mr-2">${product.MRP}</span>
//                     <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//                       {product.discount.toFixed(2)}% OFF
//                     </span>
//                   </div>
                  
//                   <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
//                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                       <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
//                     </svg>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
        
//         {/* Custom Navigation Arrows */}
//         <div className="custom-prev absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 cursor-pointer">
//           <PrevArrow />
//         </div>
//         <div className="custom-next absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 cursor-pointer">
//           <NextArrow />
//         </div>
//       </div>
      
    
     
//     </div>
//     </>
//   );
// };

// export default ShopSlider;

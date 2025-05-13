import { sampleProducts } from '../data/products';
import ProductCard from '../Components/Product/ProductCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config';
import FooterOne from '../Components/Header&Footer/FooterOne';
import FooterTwo from '../Components/Header&Footer/FooterTwo';
import SortBy from './SortBy';
const MostPopular = () => {

    const [products, setProducts] = useState([]);

// const getProducts=async()=>{
//   const Products= await axios.get(`${API_KEY}/admin/give-products`);
//   console.log(Products);
//   return Products.data.product
// }
const token = localStorage.getItem('authToken')

useEffect(()=>{
  const getProducts=async()=>{
    const Products= await axios.get(`${API_KEY}/product/give-products`);

    setProducts(Products.data.product);
  }

  getProducts();
   
},[])
  return (
    <>
    <div className='flex '>
      <SortBy/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold  mb-8 italic text-gray-700 mx-15 flex"> Shop - <p className='italic font-semibold text-teal-900 text-shadow-teal-300'> Grab The Deals with an Exciting Discount </p> </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
    </div>
    <FooterOne/>
    <FooterTwo/>
    </>
  );
};

export default MostPopular;
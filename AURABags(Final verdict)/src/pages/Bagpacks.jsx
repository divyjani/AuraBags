import { sampleProducts } from '../data/products';
import ProductCard from '../Components/Product/ProductCard';
import SortBy from './SortBy';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config';

const Bagpacks = () => {

  const [products, setProducts] = useState([]);

// const getProducts=async()=>{
//   const Products= await axios.get(`${API_KEY}/admin/give-products`);
//   console.log(Products);
//   return Products.data.product
// }
// const token = localStorage.getItem('authToken')

useEffect(()=>{
  const getProducts=async()=>{
    const token = localStorage.getItem('authToken');
    const response= await axios.get(`${API_KEY}/product/give-products`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true,
    });
    setProducts(response.data.product);
  }
  getProducts();

},[])

  //  console.log(products[0]);
  const bagpacks = products.filter(product => product.category === 'Bagpacks');

  return (
    <>
      <div className="flex">
        {/* Sidebar - Sorting Component */}
        <SortBy />

        {/* Main Content Area */}
        <div className="w-3/4 h-screen p-5 flex flex-col items-start">
          {/* Sort by dropdown */}
          <div className="flex items-center gap-2 mb-5">
            <h3 className="font-semibold">Sort By</h3>
            <select className="border px-2 py-1">
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bagpacks.map(product => (
              <ProductCard key={product._id} {...product} token={localStorage.getItem('authToken')}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bagpacks;

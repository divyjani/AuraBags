// 
import { toast } from 'react-hot-toast';
import { React,useState, } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { API_KEY } from '../../../config/config';


const ProductCard = ({ name, price, image, category, discount,MRP,_id }) => {
 // Fallback image if the provided image is empty or fails to load
    const fallbackImage = "/src/assets/placeholder.png";
  
  // State to track the current image source
  const [imgSrc, setImgSrc] = useState(`http://localhost:5000${image} `|| fallbackImage);
  const [isAdmin, setIsAdmin] = useState(false);
  // Handle add to cart action
  console.log(imgSrc);


  const handleAddToCart = async() => {
    const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
console.log(token);

    console.log(`Added ${name} to cart`); 
    console.log(_id);
    const response= await axios.post(`${API_KEY}/addToCart`,{_id},{withCredentials: true, Authorization: `Bearer YOUR_ACCESS_TOKEN`
})

     console.log(response.data); 
   
    // This assumes you have toast configured in your parent component/app
    if (typeof toast !== 'undefined') {
      toast.success('Product added to cart');
    }
  }

  const ProductProfile =()=>{
    console.log("Product profile")
    // const navigate = useNavigate();
    // navigate(`/product/profile/`);
  }
  // console.log(id);

  return (
    
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full w-[210px]" onClick={ProductProfile} >
      {/* Product Image Container */}
      <div className=" relative overflow-hidden  ">
        {/* Product Image */}
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-65 object-cover ransition-transform duration-300 group-hover:scale-105"
          onError={() => setImgSrc(fallbackImage)}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {(discount).toFixed(1)}% OFF
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="flex items-center gap-1 justify-between">        
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            {category}
          </p>
         
         {isAdmin&&<span className=" "> <button className="rounded-full p-2  bg-gray-100 " onClick={() => {handleDelete()}}><FaTrash/></button></span>}
            </div> 
        
          {/* Product Name */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 ">
            {name}
          </h3>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-0 pt-0.5 flex items-center justify-between gap-3">
           
            <div className="flex items-center gap-2 ">
          <p className="text-lg font-semibold text-gray-900">
            ${price}
          </p>
        
            <p className="text-sm font-bold text-gray-600 line-through font-sans">
              ${MRP}
            </p>

          </div>
          <button
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="flex items-center justify-center  bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
       
      </div>
    </div>
    
  );

};

export default ProductCard;
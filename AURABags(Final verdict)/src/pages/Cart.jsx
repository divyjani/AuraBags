import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import axios from 'axios';
import { API_KEY } from '../../config/config';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


useEffect(()=>{
 
    CartData();
    
},[]);




    // Handle success

const CartData = async () =>{
  
     const token=localStorage.getItem('authToken');
     const response = await axios.get(`${API_KEY}/cart`,{
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
        withCredentials: true, // Ensure cookies are sent if required
      });
     console.log(response.data.cart[0]);
     setCartItems(response.data.cart);

}

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length  === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to your cart to continue shopping</p>
        <Link
          to="/Shop"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.id} className="p-6 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                <div className="mt-2 flex items-center">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <span className="ml-4 text-lg font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
        
        <div className="p-6 bg-gray-50 flex flex-col justify-center ">
          <div className="flex justify-between mx-10 text-lg font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className='flex justify-center'>
          <button
            className="mt-6 w-1/5 bg-blue-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Checkout
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
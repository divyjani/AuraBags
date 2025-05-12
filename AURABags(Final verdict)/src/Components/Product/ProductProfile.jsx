import { useState } from 'react';
import { ShoppingCart, Heart, Share2, Star, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

// Sample product data
const product = {
  id: 1,
  name: "Premium Leather Backpack",
  brand: "TrendyBags",
  price: 1499,
  originalPrice: 2999,
  discount: 50,
  rating: 4.5,
  reviewCount: 842,
  images: [
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
  ],
  colors: ["Black", "Brown", "Blue"],
  inStock: true,
  features: [
    "Genuine leather material",
    "Laptop compartment",
    "Water resistant",
    "Adjustable straps"
  ],
  specifications: {
    "Material": "Premium Leather",
    "Dimensions": "30cm x 45cm x 15cm",
    "Weight": "0.8 kg",
    "Capacity": "25 Liters"
  }
};

// Product offers
const offers = [
  "Bank Offer: 10% off on ABC Bank Credit Cards",
  "Special Price: Get extra 5% off",
  "Partner Offer: Get GST invoice and save up to 28%",
  "No Cost EMI on select cards"
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>Home</span>
        <ChevronRight size={16} />
        <span>Bags</span>
        <ChevronRight size={16} />
        <span>Backpacks</span>
        <ChevronRight size={16} />
        <span className="text-blue-500">{product.name}</span>
      </div>

      {/* Product Main Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm">
        {/* Left: Product Images */}
        <div className="w-full md:w-2/5">
          <div className="relative h-80 bg-gray-100 rounded-lg mb-4">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
            
            {/* Image navigation buttons */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
              onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
              onClick={() => setCurrentImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Thumbnail images */}
          <div className="flex gap-2 justify-center">
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`h-16 w-16 border-2 rounded cursor-pointer ${currentImage === idx ? 'border-blue-500' : 'border-gray-200'}`}
                onClick={() => setCurrentImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded font-medium">
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded font-medium">
              BUY NOW
            </button>
          </div>
        </div>
        
        {/* Right: Product Details */}
        <div className="w-full md:w-3/5">
          <div className="mb-4">
            <h1 className="text-xl font-medium text-gray-800">{product.name}</h1>
            <div className="flex items-center gap-2 my-1">
              <span className="flex items-center gap-1 px-2 py-1 bg-green-700 text-white text-sm rounded">
                {product.rating} <Star size={12} fill="white" />
              </span>
              <span className="text-gray-500 text-sm">{product.reviewCount} Ratings & Reviews</span>
            </div>
            <div className="text-green-600 text-sm font-medium">Special Price</div>
          </div>
          
          {/* Price Section */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-medium">₹{product.price}</span>
            <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-green-600 font-medium">{product.discount}% off</span>
          </div>
          
          {/* Offers */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Available Offers</h3>
            <ul className="space-y-2">
              {offers.map((offer, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <div className="text-green-600 font-bold mt-1">✓</div>
                  <div>{offer}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Color Options */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <div 
                  key={color} 
                  className={`cursor-pointer border-2 px-4 py-1 rounded ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center w-32 h-10">
              <button 
                className="w-8 h-full bg-gray-200 rounded-l flex items-center justify-center"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <div className="h-full flex-1 border-t border-b flex items-center justify-center">
                {quantity}
              </div>
              <button 
                className="w-8 h-full bg-gray-200 rounded-r flex items-center justify-center"
                onClick={() => setQuantity(prev => Math.min(10, prev + 1))}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Highlights */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Specifications */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Specifications</h3>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-2 text-gray-600 w-1/3">{key}</td>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Seller Information */}
          <div className="mb-4 flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <span className="text-gray-600 text-sm">Seller</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">TrendyStore</span>
                <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded">
                  4.8 <Star size={10} fill="white" />
                </span>
              </div>
            </div>
            <div>
              <span className="text-blue-600 text-sm font-medium cursor-pointer">View Seller Info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
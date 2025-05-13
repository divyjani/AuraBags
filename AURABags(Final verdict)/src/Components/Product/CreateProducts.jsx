import { useState, useRef } from "react";
import { Package, DollarSign, ArrowLeft, Image, Check } from "lucide-react";
import axios from "axios";
import { API_KEY } from "../../../config/config";
const ProductCreationPage = () => {
  // State management
    
  const [formData, setFormData] = useState({
    name: "",
    MRP: "",
    price: "",
    discount: "",
    category: "",
  });



  const [selectedImage, setSelectedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Form input change handler
  const handleInputChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // Image selection handler
  const handleImageChange = (e) => {
    console.log(e.target.files,e.target.files[0]);
    if (e.target.files && e.target.files[0])  {
      setSelectedImage(e.target.files[0]);
    }
    console.log(selectedImage);
  };

  // Handle image upload button click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Form submission handler
  const handleSubmit =  async(e) => {
    console.log(formData);
    // e.preventDefault();
    const formDataToSend = new FormData();
  
    // Append text fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("MRP", formData.MRP);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("discount", formData.discount);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("image", selectedImage);
    
    
     
     const response =await axios.post(`${API_KEY}/product/create-products`,formDataToSend,{withCredentials: true,})

      console.log(response.data);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSuccessMessage("Product created successfully!");
      setFormData({ name: "", price: "", discount: "" , category: "",MRP:""});
      setSelectedImage(null);
      setLoading(false);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success notification */}
      {successMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <Check className="w-5 h-5 mr-2" />
            {successMessage}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-bold text-lg mb-6 flex items-center">
              <Package className="mr-2" size={20} />
              Product Management
            </h2>
            
            <nav className="space-y-2">
              <a 
                href="/viewallproducts" 
                className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                All Products
              </a>
              <a 
                href="#create-product" 
                className="flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-md font-medium"
              >
                <Package size={18} className="mr-2" />
                Create New Product
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
              
              <div onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Product Image Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b pb-2">Product Image</h3>
                    
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedImage ? "border-blue-400 bg-blue-50" : "border-gray-300"
                      }`}
                      onClick={triggerFileInput}
                    >
                      {selectedImage ? (
                        <div className="text-center">
                          <div className="mb-3 flex justify-center">
                            <img 
                              src={URL.createObjectURL(selectedImage)} 
                              alt="Product preview" 
                              className="h-32 object-contain" name="image"
                            />
                          </div>
                          <p className="text-sm text-gray-600">{selectedImage.name}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Click to change
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Image size={40} className="mx-auto text-gray-400 mb-2" />
                          <p className="text-gray-600 mb-1">Drop your image here, or click to browse</p>
                          <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                        </div>
                      )}
                      
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b pb-2">Product Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter product name"
                          className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          MRP ($)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="MRP"
                            value={formData.MRP}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 pl-10 px-4 py-2"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Price ($)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 pl-10 px-4 py-2"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Discount Price ($)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="discount"
                            value={formData.discount=(((formData.MRP - formData.price) / formData.MRP) * 100).toFixed(0)}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 pl-10 px-4 py-2"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <div className="relative">
                         
                          <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            placeholder="Category"
                            className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`px-6 py-3 rounded-md text-white font-medium shadow-sm 
                    ${
                      loading 
                        ? "bg-blue-400 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                    } transition-colors w-full md:w-auto`}
                  >
                    {loading ? (
                    
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Create Product"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreationPage;
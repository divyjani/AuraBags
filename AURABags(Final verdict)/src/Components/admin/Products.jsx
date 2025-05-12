import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inventorySummary, setInventorySummary] = useState([]);
  
  // Form state for creating new products
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    MRP: '',
    discount: '0',
    image: '',
    stock: ''
  });
  const [formVisible, setFormVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/product/all');
        setProducts(response.data);
        
        // Also fetch inventory summary
        const summaryResponse = await axios.get('/api/product/category-stock-summary');
        setInventorySummary(summaryResponse.data);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'MRP' || name === 'discount' || name === 'stock' 
        ? value === '' ? '' : Number(value)
        : value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.price || !formData.category || !formData.MRP || !formData.stock) {
      setFormError('Please fill in all required fields');
      setSubmitting(false);
      return;
    }

    try {
      await axios.post('/api/product/create-product', formData);
      
      // Reset form and refresh products
      setFormData({
        name: '',
        price: '',
        category: '',
        MRP: '',
        discount: '0',
        image: '',
        stock: ''
      });
      setFormVisible(false);
      
      // Refresh products list
      const response = await axios.get('/api/product/all');
      setProducts(response.data);
      
      // Refresh inventory summary
      const summaryResponse = await axios.get('/api/product/category-stock-summary');
      setInventorySummary(summaryResponse.data);
      
    } catch (err) {
      console.error('Error creating product:', err);
      setFormError(err.response?.data?.message || 'Failed to create product');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center p-6">Loading products...</div>;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button 
          onClick={() => setFormVisible(!formVisible)} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {formVisible ? 'Cancel' : 'Add Product'}
        </button>
      </div>

      {/* Create Product Form */}
      {formVisible && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Create New Product</h2>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Backpacks">Backpacks</option>
                  <option value="Luggages">Luggages</option>
                  <option value="Duffles">Duffles</option>
                  <option value="Wallets">Wallets</option>
                  <option value="Handbags">Handbags</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price * ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  MRP * ($)
                </label>
                <input
                  type="number"
                  name="MRP"
                  value={formData.MRP}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  min="0"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  min="0"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL *
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting ? 'Creating...' : 'Create Product'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products Table */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">All Products ({products.length})</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img 
                              className="h-10 w-10 rounded-full object-cover" 
                              src={product.image || "/api/placeholder/40/40"} 
                              alt={product.name} 
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${product.stock > 10 ? 'bg-green-100 text-green-800' : 
                              product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'}`}
                        >
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Inventory Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Inventory Summary</h2>
          <ul className="divide-y divide-gray-200">
            {inventorySummary.length > 0 ? (
              inventorySummary.map((item) => (
                <li key={item.category} className="py-3 flex justify-between">
                  <span className="text-gray-600">{item.category}</span>
                  <span className="font-medium">{item.total} items</span>
                </li>
              ))
            ) : (
              <li className="py-3 text-center text-gray-500">No inventory data</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
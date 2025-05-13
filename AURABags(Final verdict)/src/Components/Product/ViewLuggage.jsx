// LuggageView.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaList, FaThLarge, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import '../../assets/Luggageview/viewLuggage.css';
// import AdminSidebar from '../Admin/AdminSidebar';
import { API_KEY } from '../../../config/config';

const LuggageView = () => {
  const [luggage, setLuggage] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLuggage();
  }, []);

  const fetchLuggage = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_KEY}/product/give-products`);
      console.log(response.data);
      setLuggage(response.data.product);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching luggage:", error);
      setLoading(false);
    }
  };

  const handleView = (id) => {
    console.log("View luggage with ID:", id);
    // Implementation for viewing luggage details
  };

  const handleEdit = (id) => {
    console.log("Edit luggage with ID:", id);
    // Implementation for editing luggage
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this luggage item?")) {
      try {
        // Implement your API call for deletion
        await axios.delete(`/product/products/${id}`);
        fetchLuggage(); // Refresh the list
      } catch (error) {
        console.error("Error deleting luggage:", error);
      }
    }
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'list' ? 'grid' : 'list');
  };

  if (loading) {
    return <div className="loading">Loading luggage items...</div>;
  }

  if (!luggage || luggage.length === 0) {
    return <div className="no-data">No luggage items found</div>;
  }

  return (
    <>
    {/* <AdminSidebar /> */}
    <div className="luggage-view">
      <div className="header">
        <h1>Products Listings</h1>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
            onClick={toggleViewMode}
            aria-label="List View"
          >
            <FaList />
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
            onClick={toggleViewMode}
            aria-label="Grid View"
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>MRP</th>
                <th>Discount</th>
                <th>Size</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {luggage.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>${item.MRP}</td>
                  <td>{item.discount}% </td>
                  <td>{item.size}</td>
                  <td>
                    <span className={`status ${item.active ? 'active' : 'inactive'}`}>
                      {item.active ? 'Active' : 'Active'}
                    </span>
                  </td>
                  <td className="actions">
                    <button 
                      className="btn btn-view"
                      onClick={() => handleView(item._id)}
                      aria-label="View"
                    >
                      <FaEye />
                    </button>
                    <div className="divider"></div>
                    <button 
                      className="btn btn-edit"
                      onClick={() => handleEdit(item._id)}
                      aria-label="Edit"
                    >
                      <FaEdit />
                    </button>
                    <div className="divider"></div>
                    <button 
                      className="btn btn-delete"
                      onClick={() => handleDelete(item._id)}
                      aria-label="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid-container">
          {luggage.map(item => (
            <div key={item._id} className="grid-item">
              <div className="card">
                <div className="card-header">
                  <h3>{item.name}</h3>
                  <span className={`status ${item.active ? 'active' : 'inactive'}`}>
                    {item.active ? 'Active' : 'Active'}
                  </span>
                </div>
                <div className="card-body">
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Brand:</strong> {item.brand}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>MRP:</strong> ${item.MRP}</p>
                  <p><strong>Discount:</strong> {item.discount}</p>
                  {item.description && <p><strong>Description:</strong> {item.description}</p>}
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-view"
                    onClick={() => handleView(item._id)}
                    aria-label="View"
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="btn btn-edit"
                    onClick={() => handleEdit(item._id)}
                    aria-label="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => handleDelete(item._id)}
                    aria-label="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default LuggageView;
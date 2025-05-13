import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaList, FaThLarge, FaEye, FaEdit, FaTrash, FaShoppingCart, FaBox } from 'react-icons/fa';
import '..//../assets/Luggageview/viewLuggage.css';
import { API_KEY } from '../../../config/config';

const Userview = () => {
  const [users, setUsers] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_KEY}/user/allusers`);
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleView = (id) => {
    console.log("View user with ID:", id);
    // Implementation for viewing user details
  };

  const handleEdit = (id) => {
    console.log("Edit user with ID:", id);
    // Implementation for editing user
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        // Implement your API call for deletion
        await axios.delete(`${API_KEY}/user/${id}`);
        fetchUsers(); // Refresh the list
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'list' ? 'grid' : 'list');
  };

  if (loading) {
    return <div className="loading">Loading user data...</div>;
  }

  if (!users || users.length === 0) {
    return <div className="no-data">No users found</div>;
  }

  return (
    <>
    <div className="user-view">
      <div className="header">
        <h1>User Management</h1>
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
                <th>Username</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Cart Items</th>
                <th>Orders</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.contact || 'N/A'}</td>
                  <td>{user.cart?.length || 0}</td>
                  <td>{user.orders?.length || 0}</td>
                  <td className="actions">
                    <button 
                      className="btn btn-view"
                      onClick={() => handleView(user._id)}
                      aria-label="View"
                    >
                      <FaEye />
                    </button>
                    <div className="divider"></div>
                    <button 
                      className="btn btn-edit"
                      onClick={() => handleEdit(user._id)}
                      aria-label="Edit"
                    >
                      <FaEdit />
                    </button>
                    <div className="divider"></div>
                    <button 
                      className="btn btn-delete"
                      onClick={() => handleDelete(user._id)}
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
          {users.map(user => (
            <div key={user._id} className="grid-item">
              <div className="card">
                <div className="card-header">
                  <h3>{user.username}</h3>
                  {user.picture && (
                    <div className="user-avatar">
                      <img src={user.picture} alt={user.username} />
                    </div>
                  )}
                </div>
                <div className="card-body">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Contact:</strong> {user.contact || 'Not provided'}</p>
                  <p>
                    <strong>Cart Items:</strong> 
                    <span className="badge">{user.cart?.length || 0}</span>
                    <FaShoppingCart className="icon-cart" />
                  </p>
                  <p>
                    <strong>Orders:</strong> 
                    <span className="badge">{user.orders?.length || 0}</span>
                    <FaBox className="icon-orders" />
                  </p>
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-view"
                    onClick={() => handleView(user._id)}
                    aria-label="View"
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="btn btn-edit"
                    onClick={() => handleEdit(user._id)}
                    aria-label="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => handleDelete(user._id)}
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

export default Userview;
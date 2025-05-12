import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [monthlyNewUsers, setMonthlyNewUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Fetch all users
        const usersResponse = await axios.get('/api/users/all');
        setUsers(usersResponse.data);
        
        // Fetch monthly stats
        const monthlyResponse = await axios.get('/api/users/stats/month');
        setMonthlyNewUsers(monthlyResponse.data.count);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center p-6">Loading users...</div>;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">New Users This Month</h2>
          <p className="text-2xl font-bold">{monthlyNewUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="text-2xl font-bold">
            {users.reduce((acc, user) => acc + (user.orders?.length || 0), 0)}
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">User List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    {user.picture ? (
                      <img 
                        src={user.picture} 
                        alt={user.username} 
                        className="h-10 w-10 rounded-full object-cover" 
                      />
                    ) : (
                      <span className="text-lg font-medium text-gray-600">
                        {user.username?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{user.username}</h3>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Contact:</span> {user.contact || 'N/A'}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Orders:</span> {user.orders?.length || 0}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-4 text-gray-500">
              No users found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    newUsers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy sales data for the chart
  const salesData = [
    { name: 'Jan', sales: 24000 },
    { name: 'Feb', sales: 18000 },
    { name: 'Mar', sales: 29000 },
    { name: 'Apr', sales: 35000 },
    { name: 'May', sales: 40000 },
    { name: 'Jun', sales: 32000 },
    { name: 'Jul', sales: 38000 },
    { name: 'Aug', sales: 42000 },
    { name: 'Sep', sales: 37000 },
    { name: 'Oct', sales: 45000 },
    { name: 'Nov', sales: 50000 },
    { name: 'Dec', sales: 55000 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Get products count
        const productsResponse = await axios.get('/api/product/all');
        
        // Get users data
        const usersResponse = await axios.get('/api/users/all');
        
        // Get new users this month
        const monthlyStatsResponse = await axios.get('/api/users/stats/month');
        
        // Calculate totals
        const totalProducts = productsResponse.data.length;
        const totalUsers = usersResponse.data.length;
        const totalOrders = usersResponse.data.reduce(
          (acc, user) => acc + (user.orders?.length || 0), 
          0
        );
        
        // Calculate revenue (simplified)
        const totalRevenue = productsResponse.data.reduce((acc, product) => {
          const soldQuantity = Math.floor(product.stock * 0.1); // Assuming 10% sold
          return acc + (product.price * soldQuantity);
        }, 0);

        setStats({
          totalProducts,
          totalUsers,
          totalOrders,
          totalRevenue,
          newUsers: monthlyStatsResponse.data.count
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-6">Loading dashboard data...</div>;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Products</h2>
          <p className="text-2xl font-bold">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Total Revenue</h2>
          <p className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>
      
      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-medium mb-4">Monthly Sales</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => ['$' + value, 'Sales']} />
              <Bar dataKey="sales" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* New Users Card */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-2">New Users This Month</h2>
        <p className="text-2xl font-bold">{stats.newUsers}</p>
      </div>
    </div>
  );
}

export default Dashboard;
import React from 'react';

function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'products', name: 'Products', icon: '🛍️' },
    { id: 'users', name: 'Users', icon: '👥' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Aura Bags Admin</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="px-6 py-3">
              <button
                onClick={() => setActivePage(item.id)}
                className={`flex items-center w-full text-left ${
                  activePage === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
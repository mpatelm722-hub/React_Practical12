
import { NavLink, Outlet } from 'react-router-dom';

function Orders() {
  const tabs = [
    { name: 'Current Orders', path: 'current' },
    { name: 'Order History', path: 'history' },
    { name: 'Cancelled Orders', path: 'cancelled' }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800">
        My Orders
      </h2>

      <p className="mt-2 text-gray-500">
        View and manage your orders.
      </p>

      <nav className="mt-6 flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;

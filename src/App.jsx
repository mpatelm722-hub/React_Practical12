
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Home from './Pages/Home';
import Orders from './Pages/Orders';
import CurrentOrders from './Pages/CurrentOrders';
import OrderHistory from './Pages/OrderHistory';
import CancelledOrders from './Pages/CancelledOrders';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-5 sm:p-10">

        <div className="mx-auto max-w-5xl">

          <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-extrabold text-purple-700">
              ShopEase 🛍️
            </Link>

            <Link
              to="/orders"
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-purple-700"
            >
              My Orders
            </Link>
          </header>

          <main className="min-h-96 rounded-3xl border border-white bg-white/90 p-6 shadow-xl sm:p-10">

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/orders" element={<Orders />}>
                <Route
                  index
                  element={<Navigate to="current" replace />}
                />
                <Route
                  path="current"
                  element={<CurrentOrders />}
                />
                <Route
                  path="history"
                  element={<OrderHistory />}
                />
                <Route
                  path="cancelled"
                  element={<CancelledOrders />}
                />
              </Route>
            </Routes>

          </main>

          <footer className="mt-6 text-center text-sm text-gray-500">
            ShopEase • Order Management System
          </footer>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


function CurrentOrders() {
  const orders = [
    { id: '#ORD101', item: 'Wireless Headphones', status: 'Shipped' },
    { id: '#ORD102', item: 'Smart Watch', status: 'Processing' }
  ];

  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-gray-800">
        Current Orders
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-400">{order.id}</p>

            <h4 className="mt-2 font-bold text-gray-800">
              {order.item}
            </h4>

            <span className="mt-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;

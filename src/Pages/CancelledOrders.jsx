
function CancelledOrders() {
  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
      <h3 className="text-xl font-bold text-gray-800">
        Cancelled Orders
      </h3>

      <p className="mt-3 text-gray-600">
        Order #ORD075 — Bluetooth Speaker
      </p>

      <p className="mt-2 text-sm font-semibold text-red-600">
        ✕ Cancelled
      </p>
    </div>
  );
}

export default CancelledOrders;

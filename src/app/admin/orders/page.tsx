'use client';
import { useEffect, useState } from 'react';

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);

  // Fetch all orders on page load
  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // Update order status (e.g., completed or cancelled)
  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    setOrders(orders.map(o => (o._id === id ? updated : o)));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Manage Orders</h1>
      <div className="grid gap-6">
        {orders.map(order => (
          <div key={order._id} className="border rounded-lg p-6 bg-white shadow-sm">
            <p><b>Order ID:</b> {order._id}</p>
            <p><b>Status:</b> {order.status}</p>
            <p><b>Total:</b> ₦{order.total}</p>
            <p className="mt-2 font-semibold">Items:</p>
            <ul className="list-disc list-inside text-sm text-neutral-700">
              {order.items.map((item: any, idx: number) => (
                <li key={idx}>
                  {item.quantity} × {item.productId} — ₦{item.price}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => updateStatus(order._id, 'completed')}
              >
                Mark Completed
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => updateStatus(order._id, 'cancelled')}
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

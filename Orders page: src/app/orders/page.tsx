'use client';
import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (!token) return;
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUserId(payload.sub);
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetch(`/api/orders?userId=${userId}`).then(r=>r.json()).then(setOrders);
  }, [userId]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="grid gap-4">
        {orders.map(o => (
          <div key={o._id} className="border rounded p-4 bg-white">
            <p><b>Status:</b> {o.status}</p>
            <p><b>Total:</b> ₦{o.total}</p>
            <ul className="mt-2 text-sm">
              {o.items.map((it:any, idx:number)=>(
                <li key={idx}>• {it.quantity} × {it.productId} — ₦{it.price}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

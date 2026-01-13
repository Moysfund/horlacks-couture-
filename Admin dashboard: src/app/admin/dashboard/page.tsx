'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products:0, orders:0 });

  useEffect(() => {
    Promise.all([
      fetch('/api/products').then(r=>r.json()),
      fetch('/api/orders').then(r=>r.json()),
    ]).then(([p,o])=>setStats({ products:p.length, orders:o.length }));
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="border rounded p-6 bg-white"><b>Products:</b> {stats.products}</div>
        <div className="border rounded p-6 bg-white"><b>Orders:</b> {stats.orders}</div>
      </div>
      <div className="mt-8 flex gap-4">
        <a className="btn" href="/admin/products">Manage Products</a>
        <a className="btn" href="/admin/orders">Manage Orders</a>
      </div>
    </section>
  );
}

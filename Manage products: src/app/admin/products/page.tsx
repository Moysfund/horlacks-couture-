'use client';
import { useEffect, useState } from 'react';

const categories = ['Suit','Native','Senate Wear','Agbada','Shirt','Joggers','Polo'];

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [form, setForm] = useState({ name:'', category:'Suit', price:0, description:'', imageUrl:'', featured:false });

  useEffect(() => { fetch('/api/products').then(r=>r.json()).then(setProducts); }, []);

  async function addProduct() {
    const res = await fetch('/api/products', { method:'POST', body: JSON.stringify(form) });
    const p = await res.json();
    setProducts([p, ...products]);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Upload product</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Name" onChange={e=>setForm({...form, name:e.target.value})}/>
        <select className="input" onChange={e=>setForm({...form, category:e.target.value})}>
          {categories.map(c=><option key={c}>{c}</option>)}
        </select>
        <input className="input" type="number" placeholder="Price" onChange={e=>setForm({...form, price:Number(e.target.value)})}/>
        <input className="input" placeholder="Image URL" onChange={e=>setForm({...form, imageUrl:e.target.value})}/>
        <textarea className="input" placeholder="Description" onChange={e=>setForm({...form, description:e.target.value})}/>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" onChange={e=>setForm({...form, featured:e.target.checked})}/> Featured
        </label>
      </div>
      <button className="btn mt-4" onClick={addProduct}>Save</button>

      <h3 className="text-xl font-semibold mt-10 mb-4">Products</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p=>(
          <div key={p._id} className="border rounded bg-white overflow-hidden">
            <img src={p.imageUrl} className="h-40 w-full object-cover" />
            <div className="p-4">
              <p className="font-medium">{p.name}</p>
              <p className="text-sm">{p.category}</p>
              <p className="font-semibold mt-1">₦{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

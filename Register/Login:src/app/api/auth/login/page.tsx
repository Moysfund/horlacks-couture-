'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({ email:'', password:'', name:'' });
  const [msg, setMsg] = useState('');

  async function submit() {
    const res = await fetch('/api/auth/register', { method:'POST', body: JSON.stringify(form) });
    const data = await res.json();
    setMsg(data.message || data.error);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold mb-4">Create account</h1>
      <input className="input" placeholder="Name" onChange={e=>setForm({...form, name:e.target.value})}/>
      <input className="input" placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})}/>
      <input className="input" type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})}/>
      <button className="btn" onClick={submit}>Register</button>
      <p className="mt-3 text-sm">{msg}</p>
    </div>
  );
}

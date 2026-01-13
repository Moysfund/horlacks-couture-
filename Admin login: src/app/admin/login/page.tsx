'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [form, setForm] = useState({ email:'', password:'' });
  const [msg, setMsg] = useState('');

  async function submit() {
    const res = await fetch('/api/auth/login', { method:'POST', body: JSON.stringify(form) });
    const data = await res.json();
    if (data.access && data.user.role === 'admin') {
      localStorage.setItem('access', data.access);
      window.location.href = '/admin/dashboard';
    } else {
      setMsg('Invalid admin credentials');
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
      <input className="input" placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})}/>
      <input className="input" type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})}/>
      <button className="btn" onClick={submit}>Login</button>
      <p className="mt-3 text-sm">{msg}</p>
    </div>
  );
}

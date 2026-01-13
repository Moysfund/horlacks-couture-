'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ email:'', password:'' });
  const [msg, setMsg] = useState('');

  async function submit() {
    const res = await fetch('/api/auth/login', { method:'POST', body: JSON.stringify(form) });
    const data = await res.json();
    if (data.access) {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      window.location.href = '/';
    } else {
      setMsg(data.error);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <input className="input" placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})}/>
      <input className="input" type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})}/>
      <button className="btn" onClick={submit}>Login</button>
      <p className="mt-3 text-sm">{msg}</p>
    </div>
  );
}

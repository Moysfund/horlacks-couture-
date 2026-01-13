import { NextResponse } from 'next/server';
import { connectDB } from '@/src/lib/db';
import User from '@/src/models/User';
import { comparePassword, signAccessToken, signRefreshToken } from '@/src/lib/auth';

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  if (!user.emailVerified) return NextResponse.json({ error: 'Email not verified' }, { status: 403 });

  const access = signAccessToken({ sub: user._id, role: user.role });
  const refresh = signRefreshToken({ sub: user._id });

  return NextResponse.json({ access, refresh, user: { id: user._id, email: user.email, role: user.role, name: user.name } });
}

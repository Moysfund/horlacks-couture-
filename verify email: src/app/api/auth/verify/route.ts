import { NextResponse } from 'next/server';
import { connectDB } from '@/src/lib/db';
import User from '@/src/models/User';

export async function POST(req: Request) {
  await connectDB();
  const { token } = await req.json();
  const user = await User.findOne({ verificationToken: token });
  if (!user) return NextResponse.json({ error: 'Invalid token' }, { status: 400 });

  user.emailVerified = true;
  user.verificationToken = undefined;
  await user.save();

  return NextResponse.json({ message: 'Email verified' });
}

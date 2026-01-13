import { NextResponse } from 'next/server';
import { connectDB } from '@/src/lib/db';
import User from '@/src/models/User';
import { hashPassword } from '@/src/lib/auth';
import crypto from 'crypto';
import { sendVerificationEmail } from '@/src/lib/email';

export async function POST(req: Request) {
  await connectDB();
  const { email, password, name } = await req.json();
  const exists = await User.findOne({ email });
  if (exists) return NextResponse.json({ error: 'Email already registered' }, { status: 400 });

  const passwordHash = await hashPassword(password);
  const verificationToken = crypto.randomBytes(32).toString('hex');

  const user = await User.create({ email, passwordHash, name, verificationToken });
  await sendVerificationEmail(email, verificationToken);

  return NextResponse.json({ message: 'Registered. Check your email to verify.' });
}

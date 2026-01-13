import mongoose, { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  name: { type: String },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  emailVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
}, { timestamps: true });

export default models.User || model('User', UserSchema);

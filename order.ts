import mongoose, { Schema, models, model } from 'mongoose';

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true },
  }],
  status: { type: String, enum: ['pending','completed','cancelled'], default: 'pending' },
  total: { type: Number, required: true },
}, { timestamps: true });

export default models.Order || model('Order', OrderSchema);

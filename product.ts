import mongoose, { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Suit','Native','Senate Wear','Agbada','Shirt','Joggers','Polo'], 
    required: true 
  },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  featured: { type: Boolean, default: false },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

export default models.Product || model('Product', ProductSchema);

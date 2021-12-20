import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProduitSchema = new Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
}, {timestamps: true});

export const ProduitName = "Produit";
import { Document } from "mongoose";

export interface IProduit extends Document {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
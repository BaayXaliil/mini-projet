import { Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  firstname: string;
  lastname: string;
  address: string;
}
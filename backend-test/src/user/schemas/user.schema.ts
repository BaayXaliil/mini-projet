import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  address: { type: String }
});

export const UserName = "User";
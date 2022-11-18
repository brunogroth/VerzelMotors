import { model, Schema } from 'mongoose';

export const Vehicle = model('Vehicle', new Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: Number,
  imagePath: String,
  createdAt:{
    type:Date,
    default:Date.now,
  },
  makeId: {
    type:Schema.Types.ObjectId,
    required: true,
    ref:'Make',
  }
}));


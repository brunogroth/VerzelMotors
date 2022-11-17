import { model, Schema } from 'mongoose';

export const Make = model('Make', new Schema({
  name: {
    type:String,
    required:true,
  },
  imagePath: String,
})
);
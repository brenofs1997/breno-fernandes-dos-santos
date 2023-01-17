import { model, Schema } from 'mongoose';

export const  Client = model('Client',new Schema({
  
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  adress:{
    type:String,
    required:true,
  },
  cpf:{
    type:String,
    required:true,
  },
})
);

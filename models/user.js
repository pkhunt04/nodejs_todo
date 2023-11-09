import mongoose from "mongoose";
// import User from "../models/user.js"

 const schema = new mongoose.Schema({
        name:String,
        email:{type:String,
              unique:true},
        password:{type:String,
          select: false,
        },

        createdAt:{
          type:Date,
          default:Date.now,
        },
    }); 

  export const User = mongoose.model("user",schema);
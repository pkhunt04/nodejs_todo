import mongoose from "mongoose";
 import User from "../models/user.js"

 const schema = new mongoose.Schema({
        title:{
            type:String,
            required:true,  
        },
        description:
        {
        type:String,
        required:true,
        unique:true,
        required:true,
        },

        isCompleted:{
            type:Boolean,
          default: false,
        },
        user:{
            type: mongoose.Schema.Types.Object,
            ref:"user",
            required:true,
        },

        createdAt:{
          type:Date,
          default:Date.now,
        },
    }); 

  export const User = mongoose.model("Task",schema);
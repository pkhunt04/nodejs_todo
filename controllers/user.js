import {User} from "../models/user.js"
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import {errormiddle} from "../middle/err.js"

export const login = async (req,resp)=>{

    try {
        
    const {email,password} = req.body;

    const user = await User.findOne({ email }).select("+password");

    if(!user)
        return next(new ErrorHandler("Invalid Email or Password",400));

    const isMatch = await bcrypt.compare(password,user.password )

    if(!isMatch)
    return next(new ErrorHandler("Invalid Email or Password",400));

    sendCookie(user, resp, "Register  not Successfully", 201);
    } 
    catch (error) {
        next(error);
    }

};

export const register = async (req,resp)=>{

  try {
    const {name,email,password} = req.body;

    let user = await User.findOne({ email });

    if(user)
    return next(new ErrorHandler("User Already Exist",400));

    const hashedPassword = await bcrypt.hash(password,10);

   user = await User.create({name,email,password:hashedPassword});

    sendCookie(user,resp, "Register Successfully",202 )
  } 
  catch (error) {
    next(error)
  }
}

export const getMyProfile = async (req,resp)=>{

    resp.status(200).json({
        success:true,
        user:req.user,
    })

}

export const logout = async (req,resp)=>{

    resp.status(200).Cookiejson("token","",
    { expires: new Date(Date.now()) ,
        sameSite:process.env.NODE_ENV==="Development"? "lax" : "none",
        secure:process.env.NODE_ENV==="Development"? false : true,
    })
    .json({
        success:true,
        user:req.user,
    })
    
}



export const userdetails = async (req,resp)=>{}

export const updateUser = async (req,resp)=>{}

export const deleteUser = async (req,resp)=>{}
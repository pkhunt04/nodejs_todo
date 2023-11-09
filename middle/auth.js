import { User } from "../models/user.js"
import  Jwt  from "jsonwebtoken";

export const isAuthenticated = async (req,resp,next) =>{

    const {token} = req.cookies;

    if(!token)
    return resp.status(404).json({
        success: false,
        message:"Login first",
});

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await user.findbyId(decoded._id);
    next();
};
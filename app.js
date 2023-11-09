import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env"
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);

    // const schema = new mongoose.Schema({
    //     name:String,
    //     email:String,
    //     password:String,
    // }); 

    // const User = mongoose.model("user",schema);


app.get("/",(req,resp)=>{
    resp.send("nice working")
});

// app.get("/users/all", async (req,resp)=>{

//     const users = await User.find({})

//     console.log(req.query)

//     resp.json({
//         success:true,
//         users,
//     });
// });

// app.post("/users/new", async (req,resp)=>{

//     const {name,email,password} = req.body;

//      await User.create({
//         name:"prince",
//         email:"pkhunt04@gmail.com",
//         password:"123",
//     })

//     resp.status(201).cookie("tempi","lol").json({
//         success:true,
//         message:"Registered Successfully",
//     });
// });

// app.get("/userid/special", (req,resp)=>{

//     resp.json({
//         success:true,
//         message:"just joking",
//     })

// })

// app.get("/userid/:id", async (req,resp) =>  {
    
//     const { id } =  req.params ;
//     const user = await User.findById(id);

//     resp.json({
//         success:true,
//         user,
//     })

// })
app.use(errormiddle)

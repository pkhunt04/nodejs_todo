import ErrorHandler from "../middle/err";

export const newtask = async (req,resp,next)=>{

   try {
    const {title,description} = req.body;

    await Tsk.create({
        title,
        description,
        user:req.user,
    });

    resp.status(201).json({
        success:true,
        message:"Task added Successfully"
    })
   } catch (error) {
        next(error);
   }
}

export const getMyTask = async(rq,resp,next) => {
    try {
        const userid = req.user._id;
    const tasks = await Task.find({ user:userid})
    resp.status(200).json({
        success:true,
        tasks,  
      })
    } catch (error) {
        next(error);
    }
}

export const updateMyTask = async(rq,resp,next) => {

  try {
    const { id } = req.params;
    const task = await Task.findById(req.params.id);

  
    if(!task)
    return next(new ErrorHandler("Task not found",404))


    task.isCompleted=!task.isCompleted;
    await task.save();

    
    if(!task)
        return resp.status(404).json({
    success:false,
    message:"invalid id",
})

    resp.status(200).json({
        success:true,
        message:"Task Updated" 
      })
  } catch (error) {
        next(error);
  }
}

export const deleteMyTask = async(rq,resp,next) => {

   try {
    const task = await Task.findById(req.params.id);

    if(!task)
        return next(new ErrorHandler("Task not found",404))

    await task.deleteOne();

    resp.status(200).json({
        success:true,
        message:"Task deleted" 
      })
   } catch (error) {
        next(error)
   }
}
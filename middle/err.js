class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}



export const errormiddle = (err,req,resp,next)=>{
    
    err.message = err.message || "internel server Error";
    err.statusCode = err.statusCode || 500;

        return  resp.status(err.statusCode).json({
              success:false,
              message:err.message,
          })
      }

export default ErrorHandler;
import  expres,{Request,Response} from "express";
const app = expres();
app.get("/",(req:Request,res:Response)=>{
    res.send("hello world");
})
export default app
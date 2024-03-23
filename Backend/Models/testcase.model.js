import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const testcaseSchema=new Schema({
   problemId:{
    type:Schema.Types.ObjectId,
    ref:"Problem",
    required:true,
   },
   input:[
   {
        type:String,
        required:true,
   }],
   output:[{
    type:String,
    required:true,
   }]
    
},{timestamps:true})


const testcases=model("Testcase",testcaseSchema);
export default testcases;
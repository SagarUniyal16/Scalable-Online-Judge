import mongoose,{Schema,model} from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const submissionSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    problemId:{
        type:Schema.Types.ObjectId,
        ref:"Problem",
        required:true,
    },
    submittedCode:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Submission=model("Submission",submissionSchema);
export default Submission;
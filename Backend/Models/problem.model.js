import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const ProblemSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Statement: { type: String, required: true },
  Difficulty: { type: String, required: true },
  Code: { type: String, required: false },
},{
  timestamps:true,
});

const Problem = mongoose.model("Problem", ProblemSchema);
export default Problem;

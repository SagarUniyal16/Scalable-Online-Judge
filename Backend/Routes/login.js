import { Router } from "express";
import User from "../Models/user.model.js";
const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
    const { userName, password } = req.body.values;
  
    const isUserExist = await User.findOne({ userName: userName });
  
    if (isUserExist) {
      const isPasswordCorrect = await isUserExist.isPasswordCorrect(password);
      if (isPasswordCorrect) {
          return res
          .status(200)
          .json({ userName, message: "logged in successfully" });
      } else {
        res.status(400).json({ message: "Please check your password" });
      }
    } else {
      res
        .status(401)
        .json({ message: "Invalid user please check your username or password" });
    }
  });
  


export default loginRouter;
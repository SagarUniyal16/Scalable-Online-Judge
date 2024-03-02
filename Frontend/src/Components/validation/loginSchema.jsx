import * as Yup from "yup";
export const loginSchema = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must contain at least 6 characters")
      .required("Password is required"),
  
  });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

//Initializing App
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//API Routes
app.use("/api/user", router); 
app.use("/api/blog", blogRouter);


//Connecting to Database and running on localhost:5000
mongoose
  .connect(
    "mongodb+srv://admin:VfxHEdVvvOSzEDJY@cluster0.hiefn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to the Database... and listening to localhost 5000")
  ).catch((err) => console.log(err));

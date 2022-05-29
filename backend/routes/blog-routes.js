import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs); // http://localhost:5000/api/blog
blogRouter.post("/add", addBlog); // http://localhost:5000/api/blog/add
blogRouter.put("/update/:id", updateBlog); // http://localhost:5000/api/blog/update/:id
blogRouter.get("/:id", getById); // http://localhost:5000/api/blog/:id
blogRouter.delete("/:id", deleteBlog); // http://localhost:5000/api/blog/:id
blogRouter.get("/user/:id", getByUserId); // http://localhost:5000/api/blog/user/:id

export default blogRouter;

import express from "express";
import { addCategoryAction, addCategoryPage, deleteCategory,viewCategoryPage } from "../controller/Categories.controller.js";
import { verify } from "../middleware/auth.js";
const router = express.Router();

router.get("/add-category",verify,addCategoryPage);
router.post("/add-category",verify,addCategoryAction)
router.get("/view",verify,viewCategoryPage);
router.post("/delete/:CategoryId",verify,deleteCategory);

export default router;
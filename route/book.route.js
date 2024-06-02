import express from "express";
import { getBook, saveBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/savebook", saveBook);

export default router;
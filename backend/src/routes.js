import { Router } from "express";
import {
  createTable,
  deleteBook,
  insertBook,
  selectBook,
  selectBooks,
  updateBook,
} from "./data/book.js";

createTable();

const router = Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "API Rodando (porta: http://localhost:5000/).",
  });
});

router.get("/books", selectBooks);
router.get("/book", selectBook);
router.post("/book", insertBook);
router.put("/book", updateBook);
router.delete("/book", deleteBook);

export default router;

import { openDB } from "../configDB.js";

export async function createTable() {
  openDB().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Book (id INTEGER PRIMARY KEY, title TEXT, author TEXT, synopsis TEXT, cover TEXT, banner TEXT, price TEXT)"
    );
  });
}

export async function selectBooks(req, res) {
  openDB().then((db) => {
    db.all("SELECT * FROM Book").then((books) => res.json(books));
  });
}

export async function selectBook(req, res) {
  let id = req.body.id;
  openDB().then((db) => {
    db.get("SELECT * FROM Book WHERE id=?", [id]).then((book) =>
      res.json(book)
    );
  });
}

export async function insertBook(req, res) {
  let book = req.body;
  openDB().then((db) => {
    db.run(
      "INSERT INTO Book (title, author, synopsis, cover, banner, price) VALUES (?, ?, ?, ?, ?, ?)",
      [
        book.title,
        book.author,
        book.synopsis,
        book.cover,
        book.banner,
        book.price,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateBook(req, res) {
  let book = req.body;
  openDB().then((db) => {
    db.run(
      "UPDATE Book SET title=?, author=?, synopsis=?, cover=?, banner=?, price=? WHERE id=?",
      [
        book.title,
        book.author,
        book.synopsis,
        book.cover,
        book.banner,
        book.price,
        book.id,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteBook(req, res) {
  let id = req.body.id;
  openDB().then((db) => {
    db.get("DELETE FROM Book WHERE id=?", [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}

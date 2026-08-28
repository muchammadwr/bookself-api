const {
  addBook,
  getAllBooks,
  getAllBookById,
  updateBooks,
  deleteBook,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getAllBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBooks,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBook,
  },
];

module.exports = routes;

const { Router } = require('express');

const authorRouter = Router();
const authors = [];

authorRouter.get('/', (req, res) => res.send(authors));
authorRouter.get('/:authorId', (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

authorRouter.post("/", (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.status(201).json({ message: "Author added", author: newAuthor });
});

module.exports = authorRouter;

import bp from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const port = 8000;

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);

  res.json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(db);
});

app.listen(port, () => {
  console.log(`Server listening on https://localhost:${port}`);
});

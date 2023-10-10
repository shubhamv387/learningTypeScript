import { Router } from "express";

import { Todo } from "../models/todos";

const router = Router();

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

router.get("/todos", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = { id: Date.now().toString(), text: body.text };

  todos.push(newTodo);
  res.status(201).json({ message: "posting todos", todo: newTodo, todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const body = req.body as RequestBody;
  const params = req.params as RequestParams;
  const tId = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);

  if (todoIndex >= 0) {
    // todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    todos[todoIndex].text = body.text;
    return res.status(200).json({ message: "updated todo", todos: todos });
  }
  res.status(400).json({ message: "Item not found" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;

  todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
  res.status(200).json({ message: "Deleted todo", todos: todos });
});

export default router;

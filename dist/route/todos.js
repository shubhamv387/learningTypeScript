"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/todos", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/", (req, res, next) => {
    const body = req.body;
    const newTodo = { id: Date.now().toString(), text: body.text };
    todos.push(newTodo);
    res.status(201).json({ message: "posting todos", todo: newTodo, todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const body = req.body;
    const params = req.params;
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
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: "Deleted todo", todos: todos });
});
exports.default = router;

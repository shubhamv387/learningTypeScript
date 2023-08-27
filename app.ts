import express from "express";

import todosRoutes from "./route/todos";

const app = express();

app.use(express.json());

app.use(todosRoutes);

app.listen(3000);

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

// Routes
import todoRouter from "./routes/todo.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// To make the code more readable, we will use `router` to handle each resource.
app.use("/api/todos", todoRouter);

app.get("/heartbeat", (_, res) => {
  return res.send({ message: "Hello World!" });
});

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`),
);

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// Routes
import todoRouter from "./routes/todo.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// To make the code more readable, we will use `router` to handle each resource.
app.use("/api/todos", todoRouter);

app.get("/heartbeat", (_, res) => {
  return res.send({ message: "Hello World!" });
});

const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // We move app.listen() here to make sure that the server is started after the connection to the database is established.
    app.listen(port, () =>
      console.log(`Server running on port http://localhost:${port}`),
    );
    // If the connection is successful, we will see this message in the console.
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    // Catch any errors that occurred while starting the server
    console.log(error.message);
  });

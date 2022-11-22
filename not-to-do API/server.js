import express from "express";
const app = express();
const PORT = 8000;

import morgan from "morgan";
import cors from "cors";

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//db Connection
import mongoConnect from "./src/config/dbConfig.js";
mongoConnect();

//API endpoints
import taskRouter from "./src/routers/TaskRouter.js";
app.use("/api/v1/task", taskRouter);

app.use((error, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "error.message",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});

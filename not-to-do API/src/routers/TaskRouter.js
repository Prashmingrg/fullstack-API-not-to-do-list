import express from "express";
import {
  deleteTasks,
  getTasks,
  insertTask,
  updateTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

// workflow : CRUD
// C(create) => receive new task and store in the database
router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const result = await insertTask(req.body);
    console.log(result);

    res.json({ status: "success", message: "New task has been added" });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// R(Read) => read data from data base and return to the client
router.get("/", async (req, res) => {
  const data = await getTasks();
  res.json({
    status: "success",
    message: "Here are the available list",
    data,
  });
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", async (req, res) => {
  const { _id, type } = req.body;
  console.log(req.body);

  const result = await updateTask(_id, { type });

  if (result?._id) {
    res.json({ message: "todo put method", status: "success" });
  } else {
    res.json({ message: "nothing deleted", status: "sucess" });
  }
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", async (req, res) => {
  const result = await deleteTasks(req.body);
  console.log(result);

  if (result?.deletedCount) {
    res.json({
      status: "success",
      message: "The selected task has been delete",
    });
  } else {
    res.json({
      status: "",
      message: "The selected task has been delete",
    });
  }
});

export default router;

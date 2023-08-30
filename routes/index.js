const express = require("express")

const router = express.Router();
const  { getAllTasks , createTask, updateTask, deleteTask, getOneTask} =require("../controllers/task")



router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask)

module.exports = router
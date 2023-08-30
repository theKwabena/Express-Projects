const Task = require("../models/Task")

const getAllTasks = (req, res) => {
    res.send("All items")
}

const getOneTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)

}
const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

const updateTask = (req, res) => {
    res.send("Update task")
}

const deleteTask = (req, res) => {
    res.send("delete task")
}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask
}
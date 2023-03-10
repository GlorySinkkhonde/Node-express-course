

const getAllTasks = (req, res) =>{
    res.send('all items from the file')
}

const createTask = (req, res) =>{
    res.json(req.body)
}

const getTask = (req, res) =>{
    res.send('get single task')
}

const updateTask = (req, res) =>{
    res.send('update task')
}

const deleteTask = (req, res) =>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask, 
    getTask, 
    createTask,
    updateTask,
    deleteTask
}
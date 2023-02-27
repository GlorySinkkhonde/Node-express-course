const express = require('express')
//initialising our app by envoking express 
const app = express()
//exporting our routes
const tasks = require('./routes/tasks')

//getting inbuilt middleware to help display data in res.body
app.use(express.json())

//routes

app.get('/hello', (req, res) =>{
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)

const PORT = 5000

app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}...`)
})

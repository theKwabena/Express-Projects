const express = require("express")
const app = express()
const db = require('./db/connect')
require("dotenv").config()

const tasks = require('./routes')

const port = 3000

//Middleware
app.use(express.json()) //We can get the  data in req.body 
 

//Routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await db(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Task App listening on ${port}`)
        })
            

    } catch (error) {
        console.log(error)
    }
}

start()


// app.listen(port, ()=>{
//     console.log(`Task App listening on ${port}`)
// })



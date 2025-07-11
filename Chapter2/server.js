// The address to the server is connected to the local host
//URL :-> http://localhost:8383
// IP :-> 127.0.0.1:8383

const express = require('express')
const app = express()
const PORT = 3000

let data = ["Parth"]
// let data = {
//     name: 'Parth'
// }

//Middleware
app.use(express.json())

//HTTP verbs and Routes
//Verbs are like GET and POST which your brower asks for , and Routes are like the endpoint which your code will refer according to those verbs.

// Type 1 -> Websites endpoints (For sending back HTML Files)


//Request and Respond
app.get('/',(req,res)=>{
    console.log('User requested the Home Page website.')
//This is an end point.
// console.log('Got a response from this end point!!',req.method)
// res.sendStatus(201)
// res.send('<h1>Homepage</h1>')
res.send(`<body style="background:pink;
    color:blue; gap : 3rem;" >
        <h1>Data : </h1>
        <P style =" font-size:large; " >${JSON.stringify(data)}  </p>
        <a  style =" font-size:large;" href="/about" >About Page</a> <br>
        <btn>Delete</btn>
            </body>
            <script>console.log('This is my script')</script>`)
})

app.get('/About',(req,res)=>{
// res.send('<h1>This is an actually a website</h1> <input/>')
res.send('<body style =" background-color:pink; color:blue"; ><h1>This is my about section.</h1> <a href="/" >Home</a> </body>')
})

// app.get('/dashboard',(req,res)=>{
//     //This is an end point.
//     console.log('This is dashboard endpoint.',req.method)
//     res.send('Hi')
// })


// Type 2 -> API endpoints ( Non visual or you can say they return some kind of data. )

//CRUD-method Operations : Create - Post , Read - GET , Update - PUT and Delete-DELETE .


app.get('/api/data', (req,res)=>{
    console.log('This is for data')
    res.send(data)
})

app.post('/api/data', (req,res)=>{
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data',(req,res) =>{
    data.pop()
    console.log('Data deleted')
    res.sendStatus(203)
})



app.listen(PORT , () => console.log(`Server is started on : ${PORT}`) )
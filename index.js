const express = require('express')
const app = express();
const port = 3000;


//request parameter
// app.get('/', (req, res)=> {
//     // const id = req.query.id
//     // const name = req.query.name
//     const{id, name} = req.query
//     console.log(req.query); //this returns an object of parameters from url
//     // console.log("student id is: ", id);
//     res.send(`<h1>Student id: ${id}. Name: ${name}</h1>`)
//     // res.send(`<h1>Student Name: ${name}</h1>`)
// })

//route parameter-->
// app.get('/userId/:id/age/:age', (req, res)=> {
//     const{id, age} = req.params
//     res.send(`<h1>Student id: ${id}, Age: ${age}</h1>`)
// })

//request with headers-->
app.get('/', (req, res)=> {
    const id = req.header("id")
    const name = req.header("name")
    res.send(`<h1>Student id: ${id}, Name: ${name}</h1>`)
})

app.listen(port, ()=> {
    console.log(`server is running at http://localhost:${port}`);
})
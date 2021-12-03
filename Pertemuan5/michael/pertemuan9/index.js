var http = require('http')
var mysql = require('mysql')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pengembangan_web"
})

conn.connect((err) => {
    if (err)
    console.log("Problem with MySQL" + err)
    else
    console.log("Connected with Database");
    })

app.post('/myguest', (req, res) => {
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.boy.email
    var query = "INSERT INTO myguest (firstname, lastname, email) VALUES ('" + firstname + "','" + ;lastname + "','" + email + "')"
    conn.query(query, (err, result) => {
        if (err)
        res.json(err)
        else
        res.json(result)
    })
})

app.delete('/myguest/:id' , (req,res) => {
    var query = "DELETE FROM myguest WHERE Id = " + id
    conn.query(query, (err, result)=> {
        if (err)
        res.json(err)
        else
        res.json(result)
    })
})

app.put('/myguest/:id' , (req,res) => {
    var id = req.params.id
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.boy.email
    var query = "UPDATE myguest SET firstname = '" + firstname + "', lastname = '" + lastname + "', email'" + email + "' WHERE id = " + id
    conn.query(query, (err, result)=> {
        if (err)
        res.json(err)
        else
        res.json(result)
    })
})

http.createServer(app).listen(8000, () => {
        console.log("Server is running on port 8000")
    })
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "my_airbnb"
});


app.get('/', (re, res) => {
    return res.json("FROM BACKEND SIDE");
})

app.get('/people', (req, res) => {
    const sql = "SELECT * FROM PEOPLE";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/houses', (req, res) => {
    const sql = "SELECT * FROM HOUSES";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/images_all', (req, res) => {
    const sql = "SELECT IMG_SRC FROM PEOPLE UNION SELECT IMG_SRC FROM HOUSES ORDER BY RAND();";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("DB Server already started");
    console.log("Listening on Port 8081");
})
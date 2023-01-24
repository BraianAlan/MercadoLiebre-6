const express = require("express");
const path = require("path");
const app = express();

app.use (express.static(path.join(__dirname, 'public')))

app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get ("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get ("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get ("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

const PORT = 3030

app.listen (PORT, console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}/home`))
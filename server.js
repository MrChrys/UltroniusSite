const express = require("express")
const app = express()
require('dotenv').config();

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/pages/index.html`)
})

app.get("/comandos", function (req, res) {
  res.sendFile(`${__dirname}/pages/commands.html`)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("[SERVER] Agora online");
    console.log("[SERVER] http://localhost:8080")
})
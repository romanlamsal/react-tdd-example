const express = require('express')
const app = express()

app.get('/book', function (req, res) {
    res.send(require("./books"))
})

app.get('/uml', function (req, res) {
    res.sendFile(__dirname + "/BookUML.svg")
})

const PORT = 8282;
app.listen(PORT, function () {
    console.log(`Bookserver listening on port ${PORT}.`)
})

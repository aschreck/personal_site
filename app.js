
const express = require('express');
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

let aCount = 0;
let sCount = 0;

app.post("/a-increment", (req, res) => {
    aCount += 1;
    return res.send(JSON.stringify({aristotleCount: aCount}));
})

app.post("/s-increment", (req, res) => {
    sCount += 1;
    return res.send(JSON.stringify({shaqCount: sCount}));
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port);

console.log(`Server started on port ${port}`);

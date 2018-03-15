
const express = require('express');
// const port = 3000;
var port = process.env.PORT || 3000;


const app = express();


let aCount = 0;
let sCount = 0;

let jsonDatabase = {}
let jsonIncrementer = 1

app.use(express.static(__dirname + '/public'));


app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get("/a-value", (req, res) => {
    return res.send(JSON.stringify(aCount));
})

app.post("/a-increment", (req, res) => {
    aCount += 1;
    return res.send(JSON.stringify({aristotleCount: aCount}));
})

app.get("/s-value", (req, res) => {
    return res.send(JSON.stringify(sCount));
})

app.post("/s-increment", (req, res) => {
    sCount += 1;
    return res.send(JSON.stringify({shaqCount: sCount}))
})

app.get("/login", (req, res)=> {
    let name = req.query.name
    jsonDatabase[jsonIncrementor] = name
    jsonIncrementor += 1
    // res.cookie("ajs_"+name)
    return res.status(204)
})

app.get("/login-report", (req, res)=> {
    return res.send(JSON.stringify(jsonDatabase))
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})


app.listen(port);

console.log(`Server started on port ${port}`);

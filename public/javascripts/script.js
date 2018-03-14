$(document).ready(addListeners)

function addListeners() {
    $(".shaq-btn").on("click", shaqFu)
    $(".a-vote-btn").on("click", aristotleListener)
    $(".s-vote-btn").on("click", shaqListener)
    fetchAristotle()
    fetchShaq()
}

function shaqFu() {
    $(".shaq-zone").append(`<img height=200 width=280 src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/9/13/11/enhanced-buzz-3994-1379086824-25.jpg?downsize=715:*&output-format=auto&output-quality=auto">`)
}

function aristotleListener() {
//make a fetch call that updates the variable. 
    fetchAristotle()
}
function fetchAristotle() {
    fetch("/a-increment", {method: "POST"})
    .then((resp)=>{
        return resp.json()
    })
    .then((json) => {
        $(".a-votes").text(json.aristotleCount)
    })
}

function shaqListener() {
    fetchShaq()
}

function fetchShaq() {
    fetch("/s-increment", {method: "POST"})
    .then((resp)=>{
        return resp.json()
    })
    .then((json) => {
        $(".s-votes").text(json.shaqCount)
    })
}

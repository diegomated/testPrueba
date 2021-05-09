
const express = require("express")

var app = express()

app.get("/other", function(request, response){
    response.send("Emelava")
})

app.listen(10000, function(){
    console.log("App starter in port 1234 B)")
})
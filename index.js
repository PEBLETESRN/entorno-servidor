const express = require("express")
const app = express()
const port = 3001

app.get("/",function(req,res){
    res.send("HOLA")
})

//Levantamos el servidor a partir de aqui.
app.listen(port)


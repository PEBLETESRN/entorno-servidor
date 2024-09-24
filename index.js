const express = require("express")
const app = express()
const port = 3001

//Cuando llegue a la rama raiz que muestre por pantalla el siguiente mensaje.
app.get("/",function(req,res){
    res.send("HOLA")
})

//Levantamos el servidor a partir de aqui.
app.listen(port)


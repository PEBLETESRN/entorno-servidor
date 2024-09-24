//Creacion de constantes.

const express = require("express")
const app = express()
const port = 3001
const path = require ("path") //Si no se declara, no va a funcionar.
const usuarios = [
    {
        nombre: "PACO",
        edad: 18
    },
    {
        nombre: "PABLO",
        edad: 20
    },
    {
        nombre: "JOSE",
        edad: 79
    },
]

//Configuramos el servidor, aqui se le indica que las rutas que va a tener que renderizar,
//se encuentran en la ruta indicada, que seria "views".

app.set("views", path.join(__dirname, "views"))  ///npm i path.
app.set("view engine" , "ejs") //npm install ejs.


//Cuando llegue a la rama raiz que muestre por pantalla el siguiente mensaje.
//Lo que estamos creando son rutas (end points).

app.get("/users",function(req,res){
    res.json(usuarios)
})

app.get("/usersview",function(req,res){ //Cuando vaya a esa ruta, que acceda a list.ejs.
    res.render("list.ejs", {usuarios})
})

app.get("/",function(req,res){
    res.send("HOLA")
})

//Levantamos el servidor a partir de aqui.

app.listen(port)
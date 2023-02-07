const express = require('express') //llamamos al paquete (todo lo que necesitamos del framework)
const app = express() // inicializacion 
const port = 3000 //puerto


app.use(express.static("public"))


app.get("/" , (req,res)=>{
    res.send("hola")
})

app.get("/index" , (req,res)=>{
        console.log(__dirname)
        res.sendFile(__dirname + "/view/index.html")
})
app.get("/about" , (req,res)=>{
        console.log(__dirname)
        res.sendFile(__dirname + "/view/about.html")
})
app.get("/works" , (req,res)=>{
        console.log(__dirname)
        res.sendFile(__dirname + "/view/works.html")
})



app.listen(port, () => {
    console.log(`Prueba ${port}`)
  })
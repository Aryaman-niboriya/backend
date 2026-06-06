const express = require("express")

const app = express()

app.use(express.json())

const nodes=[]

//nodes post
app.post("/nodes",(req,res)=>{
    nodes.push(req.body)
    res.status(201).json({message:"node aded sucessfully"})
})
//nodes get
app.get("/nodes",(req,res)=>{

    res.status(200).json({
        message:"nodes recieve sucessfully",
        nodes : nodes

    })
})
//help post
  app.post("/help",(req,res)=>{
    help.push(req.body)
    res.status(201).json({
        message :"valuuu aagyii he sserver pr "
    })
})
//help get
const help=[]

app.get("/help",(req,res)=>{
   res.status(200).json({
    message:"myyyyyyyyyyyy aagyaaaa",
    help : help
   })
    })


//map post
    app.post("/map",(req,res)=>{
    map.push(req.body)})

//map get

    const map=[]

    app.get("/map",(req,res)=>{

    res.status(200).json({
        message:"map recieve sucessfully",
        map : map

    })
})

//contact delete

app.delete("/help/:index",(req,res)=>{

    const index=req.params.index
    delete help[index]
    res.status(201).json({
        message:"help is deleted"
    })

})

//patch help
app.patch("/help/:index",(req,res)=>{
    const index=req.params.index
    const description = req.body.description

    help[index].description=description
    res.status(200).json({
        message:"help updated sucessfully"
    })

})
    

module.exports = app
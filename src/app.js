const express = require("express")
const helpmodel = require("./modules/help.model")


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
  app.post("/help",async(req,res)=>{
    const data = req.body
    await helpmodel.create({
        title:data.title,
        description:data.description,
        age:data.age,
        dob:data.dob
    })
    
    res.status(201).json({
        message :"new help created "
    })
})
//help get


app.get("/help",async (req,res)=>{

    const help=await helpmodel.find()
   res.status(200).json({
    message:"help fatched",
    data:help
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

app.delete("/help/:id",async(req,res)=>{

    const id=req.params.id
    await helpmodel.findOneAndDelete({
        _id:id

    })
    res.status(201).json({
        message:"help is deleted"
    })

})

//patch help
app.patch("/help/:id",async(req,res)=>{
    const id=req.params.id
    const description = req.body.description
    await helpmodel.findOneAndUpdate({_id:id},{description:description})

    res.status(200).json({
        message:"help updated sucessfully"
        
    })

})
    

module.exports = app
const express = require('express')
const app = express()
const port = 5000
const connection = require('./config')
const Subscription = require('./db')
const cors = require('cors')

connection()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/addusers',async (req,res)=>{
    console.log('req: ', req.body.name);
    let Obj = {
        // Subscription_name:Math.floor(Math.random() * 300).toString(),
        Subscription_name:req.body.name,
        gridData:[{
            // Date:new Date(),
            Date:req.body.date,
            // startTime:new Date(),
            startTime:req.body.startTime,
            // endTime:new Date()
            endTime:req.body.endTime
        }]
    }

    let dataObj = new Subscription(Obj)
    let Response = await dataObj.save()

    res.json(Response)
})

app.get('/allusers',async (req,res)=>{
    let Response = await Subscription.find()
    res.json(Response)
})

app.put('/updatedata/:id',async (req,res)=>{

    // let data = await Subscription.findById({_id:req.params.id})

    // let resObj = {

    // }
    // req.params.date ?  resObj.Date = req.params.date ? data.date
    
    // let updateData = await Subscription.findByIdAndUpdate({_id:req.params.id, resObj})
})  

app.listen(port)